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
Route::get('/images/follow/{userEmail}/{orderby}/{page}', 'ImagesController@followedImages'); //done
Route::post('/images/review/{email}/{path}', 'ImagesController@review');
Route::put('/images/review/{email}/{path}', 'ImagesController@updateReview');
Route::get('/images/review/{email}/{path}', 'ImagesController@getReview');
Route::get('/images/{photographerEmail}/{userEmail}/{orderby}/{page}', 'ImagesController@show'); //done
Route::post('/profile', 'ProfileController@store'); // done
//Route::post('/profile', 'ProfileController@storeAndroid');
Route::post('/profile/profilePicture/{photographerEmail}', 'ProfileController@changeProfilePicture');
Route::get('/photographer/reviews/{photographerEmail}', 'PhotographerController@getAllReviews');
Route::get('/photographer/review/{photographerEmail}/{userEmail}', 'PhotographerController@getReview'); // done
Route::post('/photographer/reviewPost/{photographerEmail}/{userEmail}', 'PhotographerController@review');
Route::post('/photographer/updateReview/{photographerEmail}/{userEmail}', 'PhotographerController@updateReview');
Route::get('/photographer/{email}', 'PhotographerController@show'); // done
Route::get('/photographer/{email}/{date}', 'PhotographerController@getHoursByDate'); // done
Route::post('/photographer/{photographerEmail}/{customerEmail}/{date}/', 'PhotographerController@order'); // done
//Route::middleware('isLoggedIn')->
Route::get('/photographer/{email}', 'PhotographerController@show');




//------------------Omar-------------------

Route::get('/user/{photographer}/{user}','user@isFollow');
Route::get('/customer/{id}','customer@getcustomer');
Route::get('/user/{id}','user@getprevil');
Route::get('/follow/{photographer}/{user}','user@follow');
Route::get('/unfollow/{photographer}/{user}','user@unfollow');
Route::get('/getplaces/', 'PlacesController@getPlaces');
