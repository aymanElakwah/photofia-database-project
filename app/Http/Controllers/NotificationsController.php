<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotificationsController extends Controller
{
    function toString ($arr){
        if (count($arr) == 0) return "()"; 
        $str='(';
        $str = $str.($arr[0]->id);
        for ($i = 1; $i < count($arr); $i++){
            $str = $str.',';
            $str = $str.($arr[$i]->id);
        }
        $str = $str.')';
        return $str;
    }
    public function eventsApplications($userEmail){
        $id = DB::select("SELECT id 
                          FROM events 
                          WHERE userEmail = '$userEmail'"
                          );
        $id = $this->toString($id);
        $data = DB::select("SELECT userEmail, username, id
                            FROM enroll, users 
                            WHERE photographerEmail = userEmail 
                            AND accepted IS NULL 
                            AND id IN $id"
                            );
        return response()->json($data, 201);
    }

    public function customersReserves($photographerEmail){
        $data = DB::select("SELECT userEmail, username 
                            FROM orders, users 
                            WHERE photographerEmail = '$photographerEmail' 
                            AND customerEmail = userEmail 
                            AND accepted IS NULL"
                            );
        return response()->json($data, 201);
    }

    public function customersFollows($photographerEmail){
        $data = DB::select("SELECT userEmail, username 
                            FROM follow NATURAL JOIN users 
                            WHERE photographerEmail = '$photographerEmail'");
        return response()->json($data, 201);
    }
}
