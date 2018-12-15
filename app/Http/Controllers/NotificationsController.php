<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class NotificationsController extends Controller
{
    public function eventsApplications($userEmail){
        $id = DB::select("SELECT id 
                          FROM events 
                          WHERE userEmail = '$userEmail'"
                          );
        //return $id;
        if (count($id) == 0) return response()->json([
            'error' => 'Resource not found'
        ], 404); 
        $arr='(';
        $arr = $arr.($id[0]->id);
        for ($i = 1; $i <= count($id) - 1; $i++){
            $arr = $arr.',';
            $arr = $arr.($id[$i]->id);
        }
        $arr = $arr.')';
        $data = DB::select("SELECT userEmail, username 
                            FROM enroll, users 
                            WHERE photographerEmail = userEmail 
                            AND accepted IS NULL 
                            AND id IN $arr"
                            );
        return response()->json($data, 201);
    }

    public function customersReserves($photographerEmail){
        $data = DB::select("SELECT userEmail, userName 
                            FROM orders, users 
                            WHERE photographerEmail = '$photographerEmail' 
                            AND customerEmail = userEmail 
                            AND accepted IS NULL"
                            );
        return response()->json($data, 201);
    }

    public function customersFollows($userEmail, $photographerEmail){
        $data = DB::select("SELECT userEmail, userName 
                            FROM follow, users 
                            WHERE photographerEmail = '$photographerEmail' 
                            AND userEmail = $userEmail");
        return response()->json($data, 201);
    }
}
