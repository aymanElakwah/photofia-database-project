<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImagesController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($email, $orderby, $page)
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || intval($page) < 1) {
            return $this->error();
        }
        if($orderby == 'time') {
            $orderby = 'date desc';
        } elseif($orderby == 'mostPopular'){
            $orderby = 'rate desc';
        } else {
            return $this->error();
        }
        $images = DB::select('select * from image where photographerEmail="'.$email.'" order by '.$orderby.' limit 15 offset '.(($page - 1)*15));
         return response()->json($images, 201);
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

    public function error() {
        return response()->json([
            'error' => 'Resource not found'
        ], 404);
    }
}
