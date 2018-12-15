<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //{"firstname":"aa","lastname":"a","email":"a","phone":12,"pass":"a",
        //"gender":"gender","city":"maadi","bd":"2016-12-31T22:00:00.000Z","customer":null}
    public function store(Request $request)
    {
        $arr = $request->all();
        $name = st($arr['firstname'] . ' ' . $arr['lastname']);
        $email = st($arr['email']);
        $phone = st('0'.intval($arr['phone']));
        $pass = st($arr['pass']);
        $gender = ($arr['gender'] == 'male' ? 0 : 1);
        $city = st($arr['city']);
        $birth = st(substr($arr['bd'], 0, 10));
        $privilege = ($arr['customer'] == 'photographer' ? 1 : 0);
        $query = "insert into users(userEmail, username, userPhone, password, userAddress, gender, birthDate, privilege) values(".$email.", ".$name.", ".$phone.", ".$pass.", ".$city.", ".$gender.", ".$birth.", ".$privilege.")";
        try {
            if(DB::insert($query) > 0) {
                if($privilege == 1) {
                    $query = "insert into photographer(photographerEmail) values(".$email.")";
                } else if($privilege == 0) {
                    $query = "insert into customer(customerEmail) values(".$email.")";
                }
                DB::insert($query);
                return response()->json([
                    'status' => 'signed up successfully'
                ], 201);
            } else {
                return error();
            }
        } catch (QueryException $e) {
            return error();
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($email)
    {
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
