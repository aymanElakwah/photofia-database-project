<?php
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

function scalar($result) {
    if(sizeof($result) < 1) {
        return NULL;
    }
    return $result[0];
}
?>