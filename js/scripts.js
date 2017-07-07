$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var devType = $("#platform").val();
    event.preventDefault();

    if (devType === "game") {
      $("#cnet").show();
      $("#java").hide();
      $("#css").hide();
    } else if (devType === "mobile") {
      $("#java").show();
      $("#cnet").hide();
      $("#css").hide();
    } else {
      alert("Complete all fields before submitting");
    }
  });
});
