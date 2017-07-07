$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var nameInput = $("input#name").val();
    var devType = $("#platform").val();
    var mySide = $("#side").val();
    var myLike = $("#microsoft").val();
    event.preventDefault();


    if (devType === "game") {
      $("#cnet").show();
      $("#java").hide();
      $("#css").hide();
    } else if (devType === "mobile") {
      $("#java").show();
      $("#cnet").hide();
      $("#css").hide();
    } else if (devType === "web") {
      if (mySide === "front") {
        $("#java").hide();
        $("#cnet").hide();
        $("#css").show();
      } else if (mySide === "back" && myLike === "love") {
          $("#java").hide();
          $("#cnet").show();
          $("#css").hide();
      } else if (mySide === "back" && myLike === "alright") {
          $("#java").show();
          $("#cnet").hide();
          $("#css").hide();
      } else if (mySide === "back" && myLike === "yuck") {
          $("#java").show();
          $("#cnet").hide();
          $("#css").hide();
      } else {
        alert("Complete all fields before submitting");
        }
    } else {
      alert("Complete all fields before submitting");
    }

  });
});
