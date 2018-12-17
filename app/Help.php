<?php
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
function checkEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function st($s) {
    return "'".addslashes($s)."'";
}

function error() {
    return response()->json([
        'error' => 'Resource not found'
    ], 404);
}

function result($result, $status) {
    return response()->json($result, intval($status));
}

function serverResponse($message, $status) {
    return response()->json(["message" => $message, "status" => $status], 201);
}

function scalar($query) {
    $result = DB::select($query);
    if(sizeof($result) < 1) {
        return NULL;
    }
    return $result[0];
}

function insert($query) {
    try {
        return DB::insert($query);
    } catch (QueryException $e) {
        return -1;
    }
}
?>