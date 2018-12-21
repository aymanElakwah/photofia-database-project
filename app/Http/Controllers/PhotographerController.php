<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use DateTime;

function st($s) {
    return "'".addslashes($s)."'";
}
function scalar($result) {
    if(sizeof($result) < 1) {
        return NULL;
    }
    return $result[0];
}
function result($result, $status) {
    return response()->json($result, intval($status));
}
class PhotographerController extends Controller
{
    function codeToArray($code) {
        $code = decbin($code);
        $code = array_map('intval', str_split($code));
        $arr = array();
        $count = 24 - count($code);
        for($i=0;$i<count($code);$i++) {
            if($code[$i] == 1) {
                $arr[] = $i + $count;
            }
        }
        return $arr;
    }

    function getWeeklySchedule($photographerEmail, $day) {
        $query = "select code from schedule where day = ".$day." and photographerEmail = ".$photographerEmail;
        $code = scalar($query);
        if(!$code) {
            return NULL;
        }
        return $code->code;
    }

    public function getHoursByDate($email, $date)
    {
        if(!checkEmail($email)) {
            return error();
        }
        $email = st($email);
        $day = getWeekDay($date);
        $date = st(substr($date, 0, 10));
        $query = "select code from actualSchedule where date=".$date." and photographerEmail = ".$email;
        $code = scalar($query);
        if($code) {
            $code = $code->code;
            return result(array_merge($this->codeToArray($code)), 201);
        } else {
            $weeklySchedule = $this->getWeeklySchedule($email, $day);
            if(!$weeklySchedule) {
                return serverResponse("Something went wrong! This shouldn't happen", false, 404);
            }
            return result($this->codeToArray($weeklySchedule), 201);
            //return serverResponse("Photographer didn't set his schedule on this day", false, 404);
        }
        
    }

    public function modifyDayServer($photographerEmail, $day, $code) {
        $query = "update schedule set code=".$code." where photographerEmail = ".$photographerEmail.", day = ".$day;
        return insert($query);
    }

    public function order($photographerEmail, $customerEmail, $date, Request $request) {
        if(!checkEmail($photographerEmail) || !checkEmail($customerEmail)) {
            return error();
        }
        $photographerEmail = st($photographerEmail);
        $customerEmail = st($customerEmail);
        $day = getWeekDay($date);
        $date = st(substr($date, 0, 10));
        $query = "select code from actualSchedule where date=".$date." and photographerEmail = ".$photographerEmail;
        $code = scalar($query); // photographer's schedule
        if(!$code) { // there is no reservation at this date, create new one 
            $code = $this->getWeeklySchedule($photographerEmail, $day);
            $code = $code->code;
            if(insert("insert into actualSchedule(photographerEmail, date, code) values(".$photographerEmail.", ".$date.", ".$code.");") < 1) {
                return serverResponse("Something went wrong! This shouldn't happen", false);
            }
        } else {
            $code = $code->code;
        }
        $arr = $request->all();
        $order = json_decode($arr['order']);
        $orderCode = 0;
        foreach($order as $n) {
            $orderCode += pow(2, 23 - $n);
        }
        if($orderCode & $code) {
            return serverResponse("Sorry, photographer is busy!", false);
        } else {
            $query = "update actualSchedule set code=".($orderCode | $code)." where photographerEmail=".$photographerEmail."";
            if(insert($query) > 0) {
                if(!insert("insert into order(photographerEmail, customerEmail, date, code) values (".$photographerEmail.", ".$customerEmail.", ".$date.", $code)") > 0) {
                    return serverResponse("Something went wrong! This shouldn't happen", false);
                }
                return serverResponse("Reserved successfully", true);
            } else {
                return serverResponse("Something went wrong", false);
            }
        }
    }

    public function show($email)
    {
        $query=DB::select("select avgPrice,bio,qualifications,rate,birthDate,gender,profilePicture,username,userPhone,userAddress 
        from users,photographer 
        Where userEmail=photographerEmail 
        AND photographerEmail=".st($email));
        $result = scalar($query);
        if($result) {
            return result($result, 201);
        } else {
            return error();
        }
    }
}
