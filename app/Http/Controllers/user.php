<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class user extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getprevil($id)
    {
        $id = st($id);
        $query=DB::select("select privilege from users Where userEmail=".$id."");
        if(sizeof($query)<1)
        {
            return response()->json([
                'status' => 'Error'
            ], 404);
        }
        return response()->json($query[0]->privilege, 201);
    }

    public function isFollow($photographer,$user)
    {
        $photographer = st($photographer);
        $user = st($user);
        $query=DB::select("select userEmail from follow Where photographerEmail=".$photographer." AND userEmail=".$user);
        if(sizeof($query)<1)
        {
            return 0;
        }
        return 1;
    }
    
    public function follow($photographer,$user)
    {
        $photographer = st($photographer);
        $user = st($user);
        $query="insert into follow(photographerEmail,userEmail)values(".$photographer.", ".$user.")";
        try{
                if(DB::insert($query) > 0) {
                    return response()->json([
                        'status' => 'Inserted Successfully'
                    ],201);
                }
        }
        catch(QueryException $e){
                return response()->json([
                    'status' => 'Error'
                ], 404);
        }
    }
    public function unfollow($photographer,$user)
    {
        $photographer = st($photographer);
        $user = st($user);
        $query='DELETE  FROM follow WHERE photographerEmail='.$photographer.' AND userEmail='.$user;
        try{
            if(DB::delete($query) > 0) {
                return response()->json([
                    'status' => 'Deleted Successfully'
                ],201);
            }
            else
            {
                return response()->json([
                    'status' => 'Error'
                ],404);
            }
        }
        catch(QueryException $e){
                return response()->json([
                    'status' => 'Error'
                ], 404);
        }
    }

    public function login(Request $request) {
        $userEmail = $request->userEmail;
        if(!checkEmail($userEmail)) {
            return NULL;
        }
        $userEmail = st($userEmail);
        $password = st($request->password);
        $query = "select token from users where userEmail=".$userEmail." and password=".$password;
        $token = scalar($query);
        if($token) {
            $token = "\"".$token->token."\"";
        }
        return $token;
    }
}
