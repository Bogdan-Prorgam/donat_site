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

// Открытие модальных окон
$(".pay_but").click(function () {
	if ($(window).width() <= 768) {
		$(".menu__btn").click();
	}
	$("#pay_card").fadeIn(500);
});
$("#next_pay_1").click(function () {
	$(".modal").fadeOut(500);
	$("#pay_card_2").fadeIn(500);
	$(".loader").css("display", "none");
	$("#next_pay_2").removeClass("load_anim");
	$(".message").css("display", "none");
});
$("#next_pay_2").click(function () {
	$(".loader").css("display", "block");
	$("#next_pay_2").addClass("load_anim");
	setTimeout(() => {
		$(".modal").fadeOut(500);
		$("#pay_card_3").fadeIn(500);
	}, 2000);
});
$("#next_pay_3").click(function () {
	$(".modal").fadeOut(500);
});
$("#copy_pay").click(function () {
	$(".message").html("Кошелек успешно скопирован в буфер обмена!");
	$(".message").fadeIn(500);
	navigator.clipboard.writeText($("#pay_val").val());
	if(typeof $("#pay_val").val() == 'undefined'){
		navigator.clipboard.writeText($("#pay_val_2").val());
	}
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
