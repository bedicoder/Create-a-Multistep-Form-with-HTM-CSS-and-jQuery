/** @format */

$(document).ready(function () {
	let current_fieldset, next_fieldset, previous_fieldset;
	let opacity;
	let current = 1;
	let steps = $("fieldset").length;
	setProgressBar(current);

	$(".next").click(function () {
		current_fieldset = $(this).parent();
		next_fieldset = $(this).parent().next();

		//Add Class Active
		$("#progressBar li")
			.eq($("fieldset").index(next_fieldset))
			.addClass("active");

		//show the next fieldset
		next_fieldset.show();
		//hide the current fieldset with style
		current_fieldset.animate(
			{ opacity: 0 },
			{
				step: function (now) {
					// for making fieldset appear animation
					opacity = 1 - now;

					current_fieldset.css({
						display: "none",
						position: "relative",
					});
					next_fieldset.css({ opacity: opacity });
				},
				duration: 500,
			}
		);
		setProgressBar(++current);
	});

	$(".prev").click(function () {
		current_fieldset = $(this).parent();
		previous_fieldset = $(this).parent().prev();

		//Remove class active
		$("#progressBar li")
			.eq($("fieldset").index(current_fieldset))
			.removeClass("active");

		//show the previous fieldset
		previous_fieldset.show();

		//hide the current fieldset with style
		current_fieldset.animate(
			{ opacity: 0 },
			{
				step: function (now) {
					// for making fieldset appear animation
					opacity = 1 - now;

					current_fieldset.css({
						display: "none",
						position: "relative",
					});
					previous_fieldset.css({ opacity: opacity });
				},
				duration: 500,
			}
		);
		setProgressBar(--current);
	});

	function setProgressBar(currentStep) {
		var percent = parseFloat(100 / steps) * currentStep;
		percent = percent.toFixed();
		$(".progress-bar").css("width", percent + "%");
	}

	// $(".submit").click(function () {
	// 	return false;
	// });
	$("form").submit(function (event) {
		event.preventDefault();
	});
});
