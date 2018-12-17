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
Route::post('/updateEventNotification', 'UpdatingController@updateEventNotification');

//-----------------------Event---------------------------
Route::post('/createEvent', 'EventsController@createEvent');
Route::get('/appliableEvents/{photographerEmail}', 'EventsController@appliableEvents');
Route::get('/applyEvent/{id}/{photographerEmail}', 'EventsController@applyEvent');      //omar

//-----------------------Ayman---------------------------
Route::get('/images/{email}/{orderby}/{page}', 'ImagesController@show');
Route::post('/profile', 'ProfileController@store');
Route::get('/images/follow/{userEmail}/{orderby}/{page}', 'ImagesController@followedImages');
Route::post('/images/review/{email}/{path}', 'ImagesController@review');
Route::put('/images/review/{email}/{path}', 'ImagesController@updateReview');
Route::get('/images/review/{email}/{path}', 'ImagesController@getReview');
Route::get('/images/{photographerEmail}/{userEmail}/{orderby}/{page}', 'ImagesController@show');
Route::post('/profile', 'ProfileController@storeAndroid');
Route::get('/photographer/{email}', 'PhotographerController@show');
Route::get('/photographer/{email}/{date}', 'PhotographerController@getHoursByDate');
Route::post('/photographer/{email}/{date}/', 'PhotographerController@order');



//------------------Omar-------------------

Route::get('/user/{photographer}/{user}','user@isFollow');
Route::get('/customer/{id}','customer@getcustomer');
Route::get('/user/{id}','user@getprevil');
Route::get('/follow/{photographer}/{user}','user@follow');
Route::get('/unfollow/{photographer}/{user}','user@unfollow');
Route::get('/getplaces/', 'PlacesController@getPlaces');
