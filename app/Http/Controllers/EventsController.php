<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Exception;

class EventsController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $arr = $request->all();
        $email = $this->st($arr['userEmail']);
        $date = $this->st($arr['date']);
        $desc = $this->st($arr['description']);
        $loc = $this->st($arr['eventLocation']);
        $id = DB::select("SELECT count(*) FROM events") + 1;
        $query = DB::raw(   "INSERT INTO events (id, userEmail, date, description, eventLocation)
                            VALUES ($id, $email, $date, $desc, $loc)"
                        );
        try {
            if(DB::insert($query) > 0) {
                return response()->json([
                    'status' => 'event created successfully'
                ], 201);
            } else {
                return response()->json([
                    'status' => 'Error'
                ], 404);
            }
        } catch (QueryException $e) {
            return response()->json([[
                'status' => 'Error'
            ]], 404);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
