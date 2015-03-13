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
					$('#exit').toggleClass('hidden');
				} else {
					if(menuType == 'Christchurch' || menuType == 'Wellington'){
						$('#cityInfo').html('');
						$(data).each(function(i){
							$('#cityInfo').append('<h2>'+data[i].name+'</h2><ul>'+data[i].description+'</ul>');
						})
					} else if(menuType == 'x'){
						$('#menu').html('');
					}
				}
			},
			error: function(){
				if(menuType == 'x'){
					$('#menu').html('');
					$('#exit').toggleClass('hidden');
				}
			}
		});
	});
});
