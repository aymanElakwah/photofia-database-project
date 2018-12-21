<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class EventsController extends Controller
{
    function st($s) {
        return "'".addslashes($s)."'";
    }

    public function createEvent($email, Request $request)
    {
        $arr = $request->all();
        $name = $this->st($arr['eventName']);
        $date = $this->st($arr['date']);
        $desc = $this->st($arr['description']);
        $loc = $this->st($arr['eventLocation']);
        $email = $this->st($email);
        $query = "INSERT INTO `events` (`eventName`, `userEmail`, `date`, `description`, `eventLocation`)
                            VALUES ($name, $email, $date, $desc, $loc)";
        try {
            if(DB::insert($query) == 1) {
                return response()->json([
                    'status' => 'event created successfully'
                ], 201);
            } else {
                return response()->json([
                    'status' => 'Error1'
                ], 404);
            }
        } catch (QueryException $e) {
            return response()->json([[
                'status' => 'Error2'
            ]], 404);
        }
    }

    public function appliableEvents($id)
    {
        return DB::select("SELECT ev.id, eventName, description, eventLocation, date
                            FROM enroll as en RIGHT OUTER JOIN events as ev 
                            ON en.id = ev.id AND en.photographerEmail = '$id'
                            WHERE en.photographerEmail IS NULL AND  NOT ev.userEmail = '$id'"
                            );
    }

    //--------------Omar--------------
    public function applyEvent($id,$photographer)
    {   

        $query=DB::select('SELECT userEmail from events Where id='.$id.' AND userEmail="'.$photographer.'"');
        if(sizeof($query)>0)            // means that photographer made that event so he can't apply for that event
        {
            return response()->json([
                'status' => 'Error'
            ], 404);
        }

        // checking if he can apply for event or not
        $query="insert into enroll(id,photographerEmail)values(".$id.", '".$photographer."')";
        try{
            if(DB::insert($query) > 0) {
                return response()->json([
                    'status' => 'Inserted Successfully'
                ],201);
            }
       }
       catch(QueryException $e){
            return response()->json([
                'status' => 'Error'
            ], 404);
       }
    }
}
