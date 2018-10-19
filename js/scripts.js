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
    $(".error-border").removeClass();
    $(".error").removeClass();
    $(".help-block").hide();

    if (!name || !experience || !preference || !environment || !adjective) {
      $("#helpBlock1").show();
      if (!name) {
        $("input#name").addClass("error-border");
        $("#helpBlock2").show();
      }
      if (!preference) {
        $("#preference").addClass("error");
        $("#helpBlock3").show();
      }
      if (!environment) {
        $("#environment").addClass("error");
        $("#helpBlock4").show();
      }
      if (!adjective) {
        $("#adjective").addClass("error");
        $("#helpBlock5").show();
      }
    } else if (environment !== "small" && preference === "backend") {
    $(".c").slideDown();
    } else if (environment !== "small" &&preference === "variety") {
      $(".php").slideDown();
    } else {
      $(".ruby").slideDown();
    }
  });
});
