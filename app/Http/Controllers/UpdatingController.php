<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdatingController extends Controller
{
    public function updateUser(Request $request){
        $arr = $request->all();
        $email = $this->st($arr['userEmail']);
        $pass = $this->st($arr['password']);
        $name = $this->st($arr['username']);
        $phone = $this->st('0'.intval($arr['userPhone']));
        $address = $this->st($arr['userAddress']);
        $gender = $this->st($arr['gender']);
        $gender = intval($gender) ? 1 : 0;
        $privilege = DB::select("select privilege from users Where userEmail=$email");
        DB::update("   UPDATE users
                        SET username = $name, password = $pass, userPhone = $phone,
                        userAddress = $address, gender = $gender
                        WHERE userEmail = $email"
                    );
        if (intval($privilege) == 1){                   //photographer
            $bio = $this->st($arr['bio']);
            $price = $this->st($arr['avgPrice']);
            $qualifications = $this->st($arr['qualifications']);
            DB::update("   UPDATE photographer
                            SET bio = $bio, avgPrice = $price,
                            qualifications = $qualifications
                            WHERE photographerEmail = $email"
                        );
        }
        return response()->json([
            'Updated Successfully'
        ],201);
    }
    
    public function updateEventNotification(Request $request){
        $arr = $request->all();
        $id = $this->st($arr['id']);
        $photographerEmail = $this->st($arr['photographerEmail']);
        $accepted = $this->st($arr['accepted']);
        DB::update("   UPDATE enroll
                        SET accepted = $accepted
                        WHERE id = $id AND photographerEmail = $photographerEmail"
                    );
                    return response()->json([
                        'status' => 'event enrolled successfully'
                    ], 201);
    }

    
}
