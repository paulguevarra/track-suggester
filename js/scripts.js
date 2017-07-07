$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var devType = ("input:radio[name=platform]:checked").val();
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
      $("#css").show();
      $("#cnet").hide();
      $("#java").hide();
    }
  });
});
