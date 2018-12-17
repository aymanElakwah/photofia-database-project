<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
    
    public function getHours($email, $day)
    {
        $query=DB::select("select code from schedule where day=".intval($day)." and photographerEmail = ".st($email)."");
        $code = scalar($query);
        if($code) {
            $code = $code->code;
            $arr = array_fill(0, 24, 0);
        } else {
            return error();
        }
        
    }

    public function show($email)
    {
        $query=DB::select("select avgPrice,bio,qualifications,rate,birthDate,gender,profilePicture,username,userPhone,userAddress 
        from users,photographer 
        Where userEmail=photographerEmail 
        AND photographerEmail=".st($email)."");
        $result = scalar($query);
        if($result) {
            return result($result, 201);
        } else {
            return error();
        }
    }
}
