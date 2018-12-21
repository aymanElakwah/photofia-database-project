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
    }
}
