(() => {
	document.addEventListener('DOMContentLoaded', () => {
		const btnToolTip = document.querySelector('.header__sandwich');
		const toolTipBtnClose = document.querySelector('.icon-close');
		const navDropDown = document.querySelector('.navigation');
		const overlay = document.querySelector('.overlay');
		const html = document.querySelector('html');
		const delay = 250;

		btnToolTip.addEventListener('click', e => {
			btnToolTip.classList.toggle('close');
			navDropDown.classList.toggle('_open');
			overlay.classList.toggle('_open');
			html.classList.toggle('open');
		});
		toolTipBtnClose.addEventListener('click', e => {
			setTimeout(function() {
				btnToolTip.classList.remove('close');
			}, delay);
			navDropDown.classList.remove('_open');
			overlay.classList.remove('_open');
			html.classList.remove('open');
		});
	});
})();

$(document).ready(function() {
	$(".sidebar__link").click(function() {
		$this = $(this);
		$this.next().slideToggle("fast");
		$this.toggleClass('close');
	});
	$(".sidebar__sublist-link").click(function() {
		$this = $(this);
		$this.next().slideToggle("fast");
		$this.toggleClass('close');
	});
});
$(window).on("load", function() {
	$('.sidebar__thirdlist-item').each(function() {
		if ($(this).hasClass('_active')) {
			$(this).parent().parent().parent().addClass('open') &&
			$(this).parent().addClass('open') &&
			$(this).parent().prev().addClass('close') &&
			$(this).parent().parent().parent().prev().addClass('close');
		}
	});
	$('.sidebar__sublist-item').each(function() {
		if ($(this).hasClass('_active')) {
			$(this).parent().parent().parent().addClass('open') &&
			$(this).parent().addClass('open') &&
			$(this).parent().prev().addClass('close') &&
			$(this).parent().parent().parent().prev().addClass('close');
		}
	});
});
$(document).ready(function() {
	$(".slider-wrapper").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});
$(document).ready(function() {
	$(".sidebar-mobile-button").click(function() {
		$(this).toggleClass('active');
		$(".sidebar").slideToggle('fast');
		$('html').toggleClass('open');
	});
});
