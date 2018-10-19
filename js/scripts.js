$(document).ready(function(){
  $("#interests").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var experience = $("#experience").val();
    var preference = $("input:radio[name=preference]:checked").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var adjective = $("input:radio[name=adjective]:checked").val();

    $(".result").hide();
    $(".name").empty().append(name);

    if (name === "") {
      alert("Please enter your name.");
    } else if (environment !== "small" && preference === "backend") {
      $(".c").show();
    } else if (environment !== "small" &&preference === "variety") {
      $(".php").show();
    } else {
      $(".ruby").show();
    }
  });
});
