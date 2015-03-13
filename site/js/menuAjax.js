$(document).ready(function(){
	//add event listeners
	$("button").click(function(){
		//empty out value
		$('#menu').html('');
		//assign value to a variable
		var menuType = $(this).val();
		//use AJAX to communicate with the server
		$.ajax({
			dataType: "json",
			url: "ajax/"+menuType+".json",
			success: function(data){
				if(menuType == 'Desserts' || menuType == 'Breakfast' || menuType == 'Starters' || menuType == 'Mains' || menuType == 'Drinks' ){
					$('#menu').append('<h2>'+menuType+'</h2>');
					$(data).each(function(i){
						$('#menu').append('<h3>'+data[i].name+'</h3><p>'+data[i].description+'</p><p><em>'+data[i].price+'</em></p>');
					})
					$('#menu').append('<button value="x" id="exit">x</button>');
				} else {
					if(){

					} else if(menuType!='x'){
						$('#menu').html('');
					}
				}
			
			}
		});








	});
});
