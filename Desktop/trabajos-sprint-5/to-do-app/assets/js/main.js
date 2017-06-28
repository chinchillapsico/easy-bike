$(document).ready(function() {
	  $("#btn").click(function() { 
        var add = $("input[name=listItem]").val();
        $("input[name=listItem]").append("#list");
    });
  
});