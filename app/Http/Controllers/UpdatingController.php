<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UpdatingController extends Controller
{
    function st($s) {
        return "'".addslashes($s)."'";
    }
    public function updateUser(Request $request){
        $arr = $request->all();
        $email = $this->st($arr['userEmail']);
        $name = $this->st($arr['username']);
        $phone = $this->st('0'.intval($arr['phone']));
        $address = $this->st($arr['userAddress']);
        $gender = $this->st($arr['gender']);
        $privilege = $this->st($arr['privilege']);
        DB::update("   UPDATE users
                        SET username = $username, userPhone = $phone,
                        userAddress = $address, gender = $gender
                        WHERE userEmail = $email"
                    );
        if ($privilege == 0){   //customer
            $points = $this->st($arr['points']);
            DB::update("   UPDATE customer
                            SET points = $points
                            WHERE customerEmail = $email"
                        );
        }
        else{                   //photographer
            $bio = $this->st($arr['bio']);
            $price = $this->st($arr['avgPrice']);
            $qualifications = $this->st($arr['qualifications']);
            DB::update("   UPDATE photographer
                            SET bio = $bio, avgPrice = $price,
                            qualifications = $qualifications
                            WHERE photographerEmail = $email"
                        );
        }
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
