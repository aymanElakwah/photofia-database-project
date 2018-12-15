<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UpdatingController extends Controller
{
    public function st($s) {
        return "'".$s."'";
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
}
