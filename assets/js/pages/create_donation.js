$(".search_help input").on("focus", function () {
	$(".search_help").addClass("search_help_active");
});

$("#search_button").on("click", function () {
	$(".search_help").addClass("search_searching");
	$(".search_help").addClass("search_help_active");
});

$(".search_help input").on("focusout", function () {
	setTimeout(() => {
		if (!$(".search_help").hasClass("search_searching"))
			$(".search_help").removeClass("search_help_active");
	}, 100);
});

$(".list_fonds button").on("click", function () {
	for (let i = 0; i < $(".list_fonds button").length; i++){
		$($(".list_fonds button")[i]).removeClass("list_fond_active");
	}
	$(this).addClass("list_fond_active");
});