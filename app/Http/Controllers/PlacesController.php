<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class PlacesController extends Controller
{

    function st($s) {
        return "'".addslashes($s)."'";
    }
    public function getPlaces()
    {
        
        $query=DB::select("SELECT placeName FROM place ");        
        if(sizeof($query)<1)
        {
            return response()->json([
                'status' => 'Error'
            ], 404);
        }
        $array=[];
        foreach($query as $value)
        {
            array_push($array,$value->placeName);
        }
        return response()->json($array, 201);
    }

<<<<<<< HEAD
    public function getAllPlaces()
    {
        $query=DB::select("SELECT * FROM place ");        
        if(sizeof($query)<1)
        {
            return response()->json([
                'status' => 'Error'
            ], 404);
        }
        return response()->json($query, 201);
    }
    public function addPlaces(Request $request)
    {
        $arr = $request->all();
        
        $placeName = $this->st($arr['placeName']);
        $description = $this->st($arr['description']);
        $placePhone = $this->st($arr['placePhone']);    
        $query="INSERT into place (`placeName`,`description`,`placePhone`) 
                           VALUES ($placeName,$description,$placePhone)";
        try{
            if(DB::insert($query)==1)
            return response()->json([
                'status' => 'Inserted succesfully'
            ], 201);
        }
        catch(QueryException $e){
            return response()->json([
            'status' => 'Error'
            ], 404);
        }
    }
    public function deletePlace($placeName)
    {
        $query= "DELETE FROM place WHERE placeName='$placeName'";
         try{
            if(DB::delete($query)==1)
            {
                return response()->json([
                    'status' => 'Deleted succesfully'
                ], 201);
            }
            else
            {
                return response()->json([
                    'status' => 'Error'
                    ], 404);
            }
        }
        catch(QueryException $e){
            return response()->json([
            'status' => 'Error'
            ], 404);
        }
=======
    // User reviews place
    public function review($userEmail, $placeName, Request $request) {
        if(!checkEmail($userEmail)) {
            return serverResponse("please enter a valid email address", false);
        }
        $placeName = st($placeName);
        $comment = st($request->comment);
        $rate = intval($request->rate);
        $query = "insert into reviewplace(userEmail, placeName, comment, rate) values(".$userEmail.", ".$placeName.", ".$comment.", ".$rate.")";
        if(insert($query) > 0) {
            return serverResponse("Rated successfully", true);
        }
        return serverResponse("Something went wrong", false);
    }
    // User update place's review
    public function updateReview($userEmail, $placeName, Request $request) {
        if(!checkEmail($userEmail)) {
            return serverResponse("please enter a valid email address", false);
        }
        $placeName = st($placeName);
        $comment = st($request->comment);
        $rate = intval($request->rate);
        $query = "update reviewplace set rate=".$rate.", comment=".$comment." where  userEmail=".$userEmail." and placeName=".$placeName; 
        if(DB::update($query) > 0) {
            return serverResponse("Rated successfully", true);
        }
        return serverResponse("Something went wrong", false);
    }

    public function getReview($userEmail, $placeName) {
        if(!checkEmail($userEmail)) {
            return serverResponse("please enter a valid email address", false);
        }
        $placeName = st($placeName);
        $comment = st($request->comment);
        $rate = intval($request->rate);
        $query = "select comment, rate from reviewplace where userEmail=".$userEmail." and placeName=".$placeName."";
        $result = scalar($query);
        return result($result, 201);
>>>>>>> 7fee2e4b13e5850f23d0ed217f8adfde1b110661
    }
}
