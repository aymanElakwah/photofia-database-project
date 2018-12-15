<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//-----------------------Notifications---------------------------
Route::get('/eventsApplications/{userEmail}', 'NotificationsController@eventsApplications');
Route::get('/customersReserves/{photographerEmail}', 'NotificationsController@customersReserves');
Route::get('/customersFollows/{userEmail}/{photographerEmail}', 'NotificationsController@customersFollows');

//-----------------------Update User---------------------------
Route::post('/updateUser', 'UpdatingController@updateUser');

//-----------------------Create Event---------------------------
Route::post('/createEvent', 'EventsController@store');