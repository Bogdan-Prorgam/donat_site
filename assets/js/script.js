var x, i, j, l, ll, selElmnt, a, b, c, d, v;
/* стилизация "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected select-selected-bottom-rounded");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* для каждого элемента создает новый DIV, который будет содержать список выбора:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	if (x[i].getAttribute("id") == "select_regions") {
		d = document.createElement("div");
		d.setAttribute("class", "search-selected-box");
		v = document.createElement("input");
		v.setAttribute("class", "search-selected");
		v.setAttribute("type", "text");
		v.setAttribute("placeholder", "Поиск");
		b.appendChild(d);
		d.appendChild(v);
	}
	for (j = 0; j < ll; j++) {
		c = document.createElement("DIV");
		if (j == 0) {
			c.setAttribute("class", "same-as-selected");
		}
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/* при клике на элемент обновляет select на выбранный элемент: */
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*при нажатии на поле выбора закрывает все другие поля выбора,
		и открывает/закрывает текущее поле выбора:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
		this.classList.toggle("select-selected-bottom-square");
	});
}
function closeAllSelect(elmnt) {
	/*функция, которая закроет все поля выбора,
	кроме выбранного поля выбора:*/
	var x,
		y,
		i,
		xl,
		yl,
		arrNo = [];
	if ($(elmnt["srcElement"]).attr("class") == "search-selected") {
		return false;
	}
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove("select-arrow-active");
			y[i].classList.remove("select-selected-bottom-square");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/* Если пользователь Ккликает в любом месте за пределами поля выбора, закрывает все поля выбора:*/
document.addEventListener("click", closeAllSelect);

$("#select_regions").on("keyup", ".search-selected", function () {
	let search_text = $(this).val();
	let search_list = $("#select_regions .select-items > div");
	for (let i = 0; i < search_list.length; i++) {
		if (
			$(search_list[i])
				.text()
				.toLowerCase()
				.indexOf(search_text.toLowerCase()) > -1
		) {
			let scroll_pos =
				$(search_list[i]).offset().top -
				$("#select_regions .select-items").offset().top +
				$("#select_regions .select-items").scrollTop() -
				37;
			$(".select-items").scrollTop(scroll_pos);
			break;
		}
	}
});

// Переключение языка на сайте
$(window).click(function () {
	$(".header__language_view").fadeOut(200);
});
$(".header__language").click(function (event) {
	if ($(".header__language_view").css("display") == "none") {
		$(".header__language_view").fadeIn(200);
		if ($(window).width() <= 767) {
			$(".header__language_view").css("display", "flex");
		}
		$(".header__language").addClass("header__language header__language_open");
	} else {
		$(".header__language_view").fadeOut(200);
		$(".header__language").removeClass("header__language_open");
	}
	event.stopPropagation();
});
$(".header__language_view").click(function (event) {
	event.stopPropagation();
});
$("#ru_lang_mob").click(function (event) {
	$(".hamburger-menu .header__language_view").css("flex-direction", "column");
	$("#en_lang_mob").css("opacity", "0.6");
	$("#ru_lang_mob").css("opacity", "1");
	event.stopPropagation();
});
$("#en_lang_mob").click(function (event) {
	$(".hamburger-menu .header__language_view").css(
		"flex-direction",
		"column-reverse"
	);
	$("#ru_lang_mob").css("opacity", "0.6");
	$("#en_lang_mob").css("opacity", "1");
	event.stopPropagation();
});
$("#ru_lang").click(function (event) {
	$(".header__language").html("Ru");
	$(".header__language_view").fadeOut(200);
	$(".header__language").removeClass("header__language_open");
	event.stopPropagation();
});
$("#en_lang").click(function (event) {
	$(".header__language").html("En");
	$(".header__language_view").fadeOut(200);
	$(".header__language").removeClass("header__language_open");
	event.stopPropagation();
});

// Открытие модальных окон
$("#registration_head").click(function () {
	$("#registration_modal").fadeIn(500);
});
$("#login_head").click(function () {
	$("#login_modal").fadeIn(500);
});
$("#registration_head_desk").click(function () {
	$("#registration_modal").fadeIn(500);
});
$("#login_head_desk").click(function () {
	$("#login_modal").fadeIn(500);
});
$("#modal_window").on("click", "#registration_head_modal", function () {
	$(".modal").fadeOut(300);
	$("#registration_modal").fadeIn(300);
});
$("#modal_window").on("click", "#login_head_modal", function () {
	$(".modal").fadeOut(300);
	$("#login_modal").fadeIn(300);
});
$("#modal_window").on("click", "#reset_head_modal", function () {
	$(".modal").fadeOut(300);
	$("#reset_modal").fadeIn(300);
});
$("#modal_window").on("click", "#next_succes_reset", function () {
	$(".modal").fadeOut(300);
	$("#succes_reset_modal").fadeIn(300);
});

// Закрытие модального окна
$(window).mousedown(function () {
	$(".modal").fadeOut(500);
});
$("#modal_window").on("mousedown", ".modal_box", function (event) {
	event.stopPropagation();
});
$("#modal_window").on("mousedown", ".close", function () {
	$(".modal").fadeOut(500);
});
$("#modal_window").on("mousedown", "#close_succes_reset", function () {
	$(".modal").fadeOut(500);
});

// Закрытие бургер меню при клике на ссылку
$(".menu__item").click(function () {
	$(".menu__btn").click();
});

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
$("#modal_window").on("click", ".password_in .hide_eye", function () {
	eye_pass(".password_in");
});
$("#modal_window").on("click", ".password_in_repit .hide_eye", function () {
	eye_pass(".password_in_repit");
});

// Плавный скролл
const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("href");
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
