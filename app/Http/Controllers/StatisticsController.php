<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    public function eventsPlaces(){
        return result(DB::select("SELECT placeName, count(eventLocation) AS eventsNumber
                            FROM events RIGHT OUTER JOIN place ON placeName = eventLocation
                            GROUP BY placeName
                            ORDER BY eventsNumber DESC
                            LIMIT 5"), 201);
    }

    public function imagesPlaces(){
        return DB::select("SELECT placeName, count(imageLocation) AS imagesNumber
                            FROM image RIGHT OUTER JOIN place ON placeName = imageLocation
                            GROUP BY placeName
                            ORDER BY imagesNumber DESC
                            LIMIT 5");
    }

    public function photographersFollowers(){
        return DB::select("SELECT u.username, count(f.userEmail) AS followersNumber
                            FROM (photographer AS ph LEFT OUTER JOIN follow AS f 
                            ON ph.photographerEmail = f.photographerEmail) JOIN users AS u 
                            ON ph.photographerEmail = u.userEmail
                            GROUP BY u.username
                            ORDER BY followersNumber DESC
                            LIMIT 5");
    }

    public function photographersReservations(){
        return DB::select("SELECT u.username, count(o.customerEmail) AS reservationsNumber
                            FROM (photographer AS ph LEFT OUTER JOIN orders AS o
                            ON ph.photographerEmail = o.photographerEmail) JOIN users AS u 
                            ON ph.photographerEmail = u.userEmail
                            GROUP BY u.username
                            ORDER BY reservationsNumber DESC
                            LIMIT 5");
    }

    public function eventsCreations(){
        return DB::select("SELECT u.username, count(e.id) AS eventsNumber
                            FROM events AS e RIGHT OUTER JOIN users AS u ON e.userEmail = u.userEmail
                            GROUP BY u.username, u.userEmail
                            ORDER BY eventsNumber DESC
                            LIMIT 5");
    }

    public function points(){
        return DB::select("SELECT min(points) AS minimumPoints, max(points) AS maximumPoints, avg(points) AS averagePoints
                            FROM customer");
    }
}
