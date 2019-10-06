$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyD_H9bFN10DoS4at7gDnbB1FV53S1IFCPI",
        authDomain: "train-scheduler-496fe.firebaseapp.com",
        databaseURL: "https://train-scheduler-496fe.firebaseio.com",
        projectId: "train-scheduler-496fe",
        storageBucket: "train-scheduler-496fe.appspot.com",
        messagingSenderId: "975963282752",
        appId: "1:975963282752:web:ab2ed3272a60b0c8fa6ea5",
        measurementId: "G-GD7G5CML2X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



    $("#addNewTrain").on("click", function (event) {
        event.preventDefault();

        train = $("#train-name").val().trim();
        dest = $("#destination").val().trim();
        firstTrain = $("#first-train").val().trim();
        freq = $("#frequency").val().trim();



    });
























});