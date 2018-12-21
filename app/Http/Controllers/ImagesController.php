<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImagesController extends Controller
{
    // User reviews image
    public function review($email, $path, Request $request) {
        if(!checkEmail($email)) {
            return error();
        }
        $email = st($email);
        $path = st($path);
        $arr = $request->all();
        $rate = intval($arr['rate']);
        $comment = st($arr['comment']);
        $query = "insert into reviewimage(userEmail, path, comment, rate) values(".$email.", ".$path.", ".$comment.", ".$rate.")";
        if(insert($query) > 0) {
            return result(['status' => 'rated successfully'], 201);
        }
        return error();
    }
    // User update image's review
    public function updateReview($email, $path, Request $request) {
        if(!checkEmail($email)) {
            return error();
        }
        $email = st($email);
        $path = st($path);
        $arr = $request->all();
        $rate = intval($arr['rate']);
        $comment = st($arr['comment']);
        $query = "update reviewimage set rate=".$rate.", comment=".$comment." where  userEmail=".$email." and path=".$path.""; 
        if(insert($query) > 0) {
            return result(['status' => 'rated successfully'], 201);
        }
        return error();
    }
    // get the review of the user for a particular image
    public function getReview($email, $path) {
        if(!checkEmail($email)) {
            return error();
        }
        $email = st($email);
        $path = st($path);
        $query = "select comment, rate from reviewimage where userEmail=".$email." and path=".$path."";
        $result = scalar($query);
        return result($result, 201);
    }
    // User is in photographer's profile, show the user this photographer's images and the (user's rate) besides the average rate
    public function show($photographerEmail, $userEmail, $orderby, $page)
    {
        $page = intval($page) - 1;
        if (!checkEmail($photographerEmail) || !checkEmail($userEmail) || $page < 0) {
            return error();
        }
        $photographerEmail = st($photographerEmail);
        $userEmail = st($userEmail);
        if($orderby == 'time') {
            $orderby = 'date desc';
        } elseif($orderby == 'mostPopular'){
            $orderby = 'rate desc';
        } else {
            return error();
        }
        $query = "select photographer.username as photographerName, image.*, review.rate as userRate from
        (image join users as photographer on photographerEmail = photographer.userEmail)
        left outer join reviewimage as review on image.path = review.path and review.userEmail = ".$userEmail."
        where
        photographerEmail=".$photographerEmail."
        order by ".$orderby." limit 15 offset ".($page*15);
        $images = DB::select($query);
        return response()->json($images, 201);
    }
    // Show the user images of photographer's that he followed
    public function followedImages($userEmail, $orderby, $page) {
        $page = intval($page) - 1;
        if (!checkEmail($userEmail) || $page < 0) {
            return serverResponse("Check user email", false);
        }
        $userEmail = st($userEmail);
        if($orderby == 'time') {
            $orderby = 'date desc';
        } elseif($orderby == 'mostPopular'){
            $orderby = 'rate desc';
        } else {
            return error();
        }
        $query = "select photographer.username as photographerName, image.*, review.rate as userRate from
        (image join users as photographer on photographerEmail = photographer.userEmail)
        left outer join reviewimage as review on image.path = review.path and review.userEmail = ".$userEmail."
        where
        photographerEmail in (select photographerEmail from follow where userEmail = ".$userEmail.")
        order by ".$orderby." limit 30 offset ".($page*30);
        $images = DB::select($query);
        return response()->json($images, 201);
    }
    // get all images in a certain location
    public function getAllIamges($location)
    {
        return DB::select("SELECT * FROM image  WHERE imageLocation='$location'");
    }
    
}
