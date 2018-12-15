<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PhotographerController extends Controller
{
    public function getHours($email, $day)
    {
        $query=DB::select("select code from schedule where day=".intval($day)." and photographerEmail = ".st($email)."");
        $code = scalar($query);
        if($code) {
            $code = $code->code;
            $code = decbin($code);
            $code = array_map('intval', str_split($code));
            $arr = array_fill(0, 24 - count($code), 0);
            return result(array_merge($arr, $code), 201);
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
