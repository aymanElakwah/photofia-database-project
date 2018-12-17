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
        $query=DB::select("select privilege from users Where userEmail='".$id."'");
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
        $query=DB::select("select userEmail from follow Where photographerEmail='".$photographer."'AND userEmail='".$user."'");
        if(sizeof($query)<1)
        {
            return 0;
        }
        return 1;
    }
    
    public function follow($photographer,$user)
    {

       $query="insert into follow(photographerEmail,userEmail)values('".$photographer."', '".$user."')";
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
       $query='DELETE  FROM follow WHERE photographerEmail="'.$photographer.'" AND userEmail="'.$user.'"';
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
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
