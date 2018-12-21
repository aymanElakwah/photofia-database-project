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
Route::get('/eventsApplications/{userEmail}', 'NotificationsController@eventsApplications');//**DONE**
Route::get('/customersReserves/{photographerEmail}', 'NotificationsController@customersReserves');//**DONE**
Route::get('/customersFollows/{photographerEmail}', 'NotificationsController@customersFollows');// NOW

//-----------------------Update User---------------------------
Route::post('/updateUser', 'UpdatingController@updateUser');//**DONE**
Route::post('/updateEventNotification', 'UpdatingController@updateEventNotification');//**DONE**

//-----------------------Event--------------------------- ***********DONE**************
Route::post('/createEvent/{userEmail}', 'EventsController@createEvent');
Route::get('/appliableEvents/{photographerEmail}', 'EventsController@appliableEvents');
Route::get('/applyEvent/{id}/{photographerEmail}', 'EventsController@applyEvent');      //omar

//-----------------------Devices---------------------------
Route::get('/getAllCameras/', 'DevicesController@getAllCameras');
Route::get('/getPhotographerCameras/{photographerEmail}', 'DevicesController@getPhotographerCameras');//**DONE**
Route::get('/getAllLenses/', 'DevicesController@getAllLenses');
Route::get('/getPhotographerLenses/{photographerEmail}', 'DevicesController@getPhotographerLenses');//**DONE**

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
Route::post('/photographer/{photographerEmail}/{customerEmail}/{date}/', 'PhotographerController@order');



//------------------Omar-------------------***********DONE**************
Route::get('/user/{photographer}/{user}','user@isFollow');
Route::get('/customer/{id}','customer@getcustomer');
Route::get('/user/{id}','user@getprevil');
Route::get('/follow/{photographer}/{user}','user@follow');
Route::get('/unfollow/{photographer}/{user}','user@unfollow');
Route::get('/getplaces/', 'PlacesController@getPlaces')->middleware('checkLogging');
Route::get('/getAllPlaces/', 'PlacesController@getAllPlaces');

//----------------------GIFT-----------------***********DONE**************
Route::get('/getCustomerPoints/{email}', 'giftController@getCustomerPoints');
Route::get('/getAllGifts/','giftController@getAllGifts');
Route::post('/addGift/','giftController@insertGift');    //except this
Route::post('/redeemGift/{email}','giftController@redeemGift');

//----------------------Statistics-----------------
Route::get('/statistics/eventsPlaces', 'StatisticsController@eventsPlaces');
Route::get('/statistics/imagesPlaces', 'StatisticsController@imagesPlaces');
Route::get('/statistics/photographersFollowers', 'StatisticsController@photographersFollowers');
Route::get('/statistics/photographersReservations', 'StatisticsController@photographersReservations');
Route::get('/statistics/eventsCreations', 'StatisticsController@eventsCreations');
Route::get('/statistics/points', 'StatisticsController@points');





Route::get('/getCustomerPoints/{email}','customer@getCustomerPoints');


///-----------------------Omar----------------------
Route::get('/getAllIamges/{location}','ImagesController@getAllIamges');
Route::post('/addPlaces/','PlacesController@addPlaces');
Route::get('/deletePlace/{placeName}','PlacesController@deletePlace');
Route::get('/deleteGift/{placeName}','giftController@deleteGift');


