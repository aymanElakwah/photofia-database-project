<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use DateTime;

class PhotographerController extends Controller
{
    public function getHoursByDate($email, $date)
    {
        $query = "select code from schedule where day=".getDayFromDate($date)." and photographerEmail = ".st($email);
        $code = scalar($query);
        if($code) {
            $code = $code->code;
            $code = decbin($code);
            $code = array_map('intval', str_split($code));
            $arr = array();
            $count = 24 - count($code);
            for($i=0;$i<count($code);$i++) {
                if($code[$i] == 1) {
                    $arr[] = $i + $count;
                }
            }
            return result(array_merge($arr), 201);
        } else {
            return serverResponse("Photographer didn't set his schedule on this day", false);
        }
        
    }

    public function order($email, $date, Request $request) {
        if(!checkEmail($email)) {
            return error();
        }
        $email = st($email);
        $day = getDayFromDate($date);
        $query = "select code from schedule where day=".$day." and photographerEmail = ".$email;
        $code = scalar($query); // photographer's schedule
        if(!$code) {
            return serverResponse("Photographer didn't set his schedule on this day", false);
        }
        $code = $code->code;
        $arr = $request->all();
        $order = json_decode($arr['order']);
        $orderCode = 0;
        foreach($order as $n) {
            $orderCode += pow(2, 23 - $n);
        }
        if($orderCode & $code) {
            return serverResponse("Sorry, photographer is busy!", false);
        } else {
            $query = "update schedule set code=".($orderCode | $code)." where photographerEmail=".$email."";
            if(insert($query) > 0) {
                return serverResponse("Reserved successfully", true);
            } else {
                return serverResponse("Something went wrong", false);
            }
        }
    }

    public function show($email)
    {
        $query="select avgPrice,bio,qualifications,rate,birthDate,gender,profilePicture,username,userPhone,userAddress 
        from users,photographer 
        Where userEmail=photographerEmail 
        AND photographerEmail=".st($email);
        $result = ($query);
        if($result) {
            return result($result, 201);
        } else {
            return error();
        }
    }
}
