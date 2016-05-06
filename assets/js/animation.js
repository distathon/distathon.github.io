$(document).ready(function() {
	
		function updateAmount() {
			$.getJSON('https://donate.childsplaycharity.org/api/event/eff5e9ca13c95ce285babe5f60355d21/json', function(data) {
				$('#donation-total').numerator({
					duration: 2000,
					delimiter: ',',
					rounding: 2,
					toValue: data.total
				});
				$('#contributions').numerator({
					duration: 2000,
					delimiter: ',',
					toValue: data.contributions
				});
			});
				setTimeout(updateAmount, 5000);
			}
			updateAmount();
	
		
		/*function updateAmount() {
			$.ajax({
	                type: "GET",
					//url: "https://donate.childsplaycharity.org/api/event/8a1ee3ee3bbe5acfa0d295af5d257bcb/json",
	                url: "https://donate.childsplaycharity.org/api/event/eff5e9ca13c95ce285babe5f60355d21/json",
	                success: function (data) {
						// how many decimal places allows
						var decimal_places = 2;
						var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
						var cs = $.animateNumber.numberStepFactories.separator(',');

						$('#donation-total')
						.animateNumber(
							{
							number: data.total * decimal_factor,

							numberStep: function(now, tween) {
								var floored_number = Math.floor(now) / decimal_factor,
									target = $(tween.elem);

								/*if (decimal_places > 0) {
								// force decimal places even if they are 0
								floored_number = floored_number.toFixed(decimal_places);

								/* replace '.' separator with ','
								floored_number = floored_number.toString().replace('.', ',');
								}

								target.text('$' + floored_number);
							}
							},
							3000
						);
	                	/*var cs = $.animateNumber.numberStepFactories.separator(',');

	                	$("#donation-total").animateNumber(
							{
							number: data.total,
							numberStep: cs
							}
						);

						$("#contributions").animateNumber(
							{
							number: data.contributions,
							numberStep: cs
							}
						);
	      
        }
	    });

			setTimeout(updateAmount, 60000);
		}

		updateAmount();*/


});