$(document).ready(function(){
  $("#interests").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var experience = $("#experience").val();
    var preference = $("input:radio[name=preference]:checked").val();
    var environment = $("input:radio[name=environment]:checked").val();
    var adjective = $("input:radio[name=adjective]:checked").val();
  });
});
