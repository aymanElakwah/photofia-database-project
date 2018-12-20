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
Route::middleware('cors')->get('/eventsApplications/{userEmail}', 'NotificationsController@eventsApplications');
Route::middleware('cors')->get('/customersReserves/{photographerEmail}', 'NotificationsController@customersReserves');
Route::middleware('cors')->get('/customersFollows/{userEmail}/{photographerEmail}', 'NotificationsController@customersFollows');

//-----------------------Update User---------------------------
Route::middleware('cors')->post('/updateUser', 'UpdatingController@updateUser');
Route::middleware('cors')->post('/updateEventNotification', 'UpdatingController@updateEventNotification');

//-----------------------Event---------------------------
Route::middleware('cors')->post('/createEvent', 'EventsController@createEvent');
Route::middleware('cors')->get('/appliableEvents/{photographerEmail}', 'EventsController@appliableEvents');
Route::middleware('cors')->get('/applyEvent/{id}/{photographerEmail}', 'EventsController@applyEvent');      //omar

//-----------------------Ayman---------------------------
Route::middleware('cors')->get('/images/follow/{userEmail}/{orderby}/{page}', 'ImagesController@followedImages'); //done
Route::middleware('cors')->post('/images/review/{email}/{path}', 'ImagesController@review');
Route::middleware('cors')->put('/images/review/{email}/{path}', 'ImagesController@updateReview');
Route::middleware('cors')->get('/images/review/{email}/{path}', 'ImagesController@getReview');
Route::middleware('cors')->get('/images/{photographerEmail}/{userEmail}/{orderby}/{page}', 'ImagesController@show'); //done
Route::middleware('cors')->post('/profile', 'ProfileController@store'); // done
//Route::post('/profile', 'ProfileController@storeAndroid');
Route::middleware('cors')->get('/photographer/reviews/{photographerEmail}', 'PhotographerController@getAllReviews');
Route::middleware('cors')->get('/photographer/review/{photographerEmail}/{userEmail}', 'PhotographerController@getReview'); // done
Route::middleware('cors')->post('/photographer/reviewPost/{photographerEmail}/{userEmail}', 'PhotographerController@review');
Route::middleware('cors')->post('/photographer/updateReview/{photographerEmail}/{userEmail}', 'PhotographerController@updateReview');
Route::middleware('cors')->get('/photographer/{email}', 'PhotographerController@show'); // done
Route::middleware('cors')->get('/photographer/{email}/{date}', 'PhotographerController@getHoursByDate');
Route::middleware('cors')->post('/photographer/{photographerEmail}/{customerEmail}/{date}/', 'PhotographerController@order');
//Route::middleware('isLoggedIn')->
Route::middleware('cors')->get('/photographer/{email}', 'PhotographerController@show');




//------------------Omar-------------------

Route::get('/user/{photographer}/{user}','user@isFollow');
Route::get('/customer/{id}','customer@getcustomer');
Route::get('/user/{id}','user@getprevil');
Route::get('/follow/{photographer}/{user}','user@follow');
Route::get('/unfollow/{photographer}/{user}','user@unfollow');
Route::get('/getplaces/', 'PlacesController@getPlaces');
