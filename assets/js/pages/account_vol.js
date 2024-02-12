$(".but_vol").click(function () {
	$("#pay_card_vol").fadeIn(500);
});

$("#next_pay_card_vol").click(function () {
	$(".modal").fadeOut(500);
	$("#edit_pass").fadeIn(500);
});

$("#close_modal").click(function () {
	$(".modal").fadeOut(500);
})

$("#copy_pay_2").click(function () {
	navigator.clipboard.writeText($("#pay_val").val());
});

$(".cat button").on("click", function () {
	for (let i = 0; i < $(".cat button").length; i++){
		$($(".cat button")[i]).removeClass("list_fond_active");
	}
	$(this).addClass("list_fond_active");
});