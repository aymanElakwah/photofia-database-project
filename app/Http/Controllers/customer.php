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

class customer extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function getcustomer($email)
    {
        $query=DB::select("select points,birthDate,gender,profilePicture,username,userPhone,userAddress 
        from users,customer
         Where userEmail=customerEmail
          AND customerEmail=".st($email)."");
        $result = scalar($query);
        if($result) {
            return result($result, 201);
        } else {
            return error();
        }
    }
    public function getCustomerPoints($email)
    {
         $query= DB::select("SELECT points FROM customer Where customerEmail='$email'");
         if(sizeof($query)==0)
            return "error";
         return $query[0]->points;
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
