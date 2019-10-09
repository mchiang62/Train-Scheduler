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
    
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var train;
    var dest;
    var firstTrain;
    var freq = 0;
    

    $("#addNewTrain").on("click", function (event) {
        event.preventDefault();

        train = $("#train-name").val().trim();
        dest = $("#destination").val().trim();
        firstTrain = $("#first-train").val().trim();
        freq = $("#frequency").val().trim();

        database.ref().push ({
            train: train,
            dest: dest,
            firstTrain: firstTrain,
            freq: freq,
            
        });

        $("form")[0]. reset();


    });

// childsnapshot?

    database.ref().on("child_added", function(snapshot) {

        var row = $("<tr>");
        var name = $("<td>");

        name.text(snapshot.val().train);
        row.append(name);
       

        var destination = $("<td>");

        destination.text(snapshot.val().dest);
        row.append(destination);
        

        var frequency = $("<td>");

        frequency.text(snapshot.val().freq);
        row.append(frequency);
        $("#tbody").append(row);

        




  

        console.log(snapshot.val())



    //   // Assumptions
      var tFrequency = 3;

    //   // Time is 3:30 AM
      var firstTime = "03:30";
  
    //   // First Time (pushed back 1 year to make sure it comes before current time)
      var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    //   console.log(firstTimeConverted);
  
  
    //   // Difference between the times
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    //   console.log("DIFFERENCE IN TIME: " + diffTime);
  
    //   // Time apart (remainder)
      var tRemainder = diffTime % tFrequency;
    //   console.log(tRemainder);
  
      // Minute Until Train
      var minUntilNextTrain = tFrequency - tRemainder;
      console.log("MINUTES TILL TRAIN: " + minUntilNextTrain);
    //   $("#min-row").append(tMinutesTillTrain);
  
      // Next Train
      var nextTrain = moment().add(minUntilNextTrain, "minutes");
      console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    //   $("#arrival-row").append(moment(nextTrain).format("hh:mm"));



    });



















});