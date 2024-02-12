// Показать / скрыть пароль в форме
function eye_pass(eye) {
	let path_eye = $(eye + " .hide_eye").attr("src");
	if ($(eye + " input").attr("type") == "text") {
		$(eye + " input").attr("type", "password");
		$(eye + " .hide_eye").removeClass("hide_eye_open");
		$(eye + " .hide_eye").attr("src", path_eye.replace("eye", "eye_close"));
	} else {
		$(eye + " input").attr("type", "text");
		$(eye + " .hide_eye").addClass("hide_eye_open");
		$(eye + " .hide_eye").attr("src", path_eye.replace("eye_close", "eye"));
	}
}
$(".wrap_pass").on("click", ".password_in .hide_eye", function () {
	eye_pass(".password_in");
});
$(".wrap_pass").on("click", ".password_in_repit .hide_eye", function () {
	eye_pass(".password_in_repit");
});

$(".old_pass img").click(function () {
	navigator.clipboard.writeText($(".old_pass input").val());
});

$("#edit_pass_but").click(function () {
	$("#edit_pass").fadeIn(500);
})

$("#edit_pass_exit").click(function () {
	$(".modal").fadeOut(500);
})