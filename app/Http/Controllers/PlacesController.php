<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlacesController extends Controller
{
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
}
