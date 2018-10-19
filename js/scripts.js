$(document).ready(function(){
  // $("#name-group").addClass(".has-error");

  $("#interests").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var experience = $("#experience").val();
    var preference = $("input:radio[name=preference]:checked").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var adjective = $("input:radio[name=adjective]:checked").val();

    $(".result").hide();
    $(".name").empty().append(name);

    if (!name || !experience || !preference || !environment || !adjective) {
      $("#helpBlock1").show();
      if (!name) {
        alert("enter name");
        // $("#input#name").addClass(".error");
      }
    } else if (environment !== "small" && preference === "backend") {
    $(".c").show();
    } else if (environment !== "small" &&preference === "variety") {
      $(".php").show();
    } else {
      $(".ruby").show();
    }
  });
});
