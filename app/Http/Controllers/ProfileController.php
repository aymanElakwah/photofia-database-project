<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class ProfileController extends Controller
{
    //{"firstname":"aa","lastname":"a","email":"a","phone":12,"pass":"a",
        //"gender":"gender","city":"maadi","bd":"2016-12-31T22:00:00.000Z","customer":null}
    public function store(Request $request)
    {
        $arr = $request->all();
        $email = $arr['email'];
        $pass = $arr['pass'];
        $token = md5($email.$pass);
        $name = st($arr['firstname']);
        $email = st($email);
        $phone = st('0'.intval($arr['phone']));
        $pass = st($pass);
        $gender = ($arr['gender'] == 'male' ? 0 : 1);
        $city = st($arr['city']);
        $birth = st(substr($arr['bd'], 0, 10));
        $privilege = ($arr['customer'] == 'photographer' ? 1 : 0);
        $query = "insert into users(userEmail, username, userPhone, password, userAddress, gender, birthDate, privilege, token) values(".$email.", ".$name.", ".$phone.", ".$pass.", ".$city.", ".$gender.", ".$birth.", ".$privilege.", '".$token."')";
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

    public function storeAndroid(Request $request)
    {
        $arr = $request->all();
        $email = $arr['email'];
        if(!checkEmail($email)) {
            return serverResponse("Please enter a valid email", false);
        }
        $email = st($email);
        $name = st($arr['username']);
        $phone = st('0'.intval($arr['phone']));
        $pass = st($arr['password']);
        $gender = ($arr['gender'] ? 1 : 0);
        $city = st($arr['city']);
        $birth = st(substr($arr['birthdate'], 0, 10));
        $privilege = ($arr['privilege'] ? 1 : 0);
        $query = "insert into users(userEmail, username, userPhone, password, userAddress, gender, birthDate, privilege) values(".$email.", ".$name.", ".$phone.", ".$pass.", ".$city.", ".$gender.", ".$birth.", ".$privilege.")";
        try {
            if(DB::insert($query) > 0) {
                if($privilege == 1) {
                    $query = "insert into photographer(photographerEmail) values(".$email.")";
                } else if($privilege == 0) {
                    $query = "insert into customer(customerEmail) values(".$email.")";
                }
                DB::insert($query);
                return serverResponse("Signed up successfully", true);
            } else {
                return serverResponse("Please check your data", false);
            }
        } catch (QueryException $e) {
            if($e->getCode() == 23000) {
                $error = "Signed up before!";
            } else {
                $error = "Please check your data";
            }
            return serverResponse($error, false);
        }
        
    }

    public function changeProfilePicture($photographerEmail, Request $request) {
        // $this->validate($request, [
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = $photographerEmail.'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
            return serverResponse("uploaded successfully", true);
        }
    }   
}
