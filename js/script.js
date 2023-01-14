// isMobile. Проверяет зашел ли текущий пользователь с мобильного утсройства (планшет, телефон)
// Checks if the current user is logged in from a mobile device (tablet, phone)

let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

// Показывает или прячет выпладающее меню (Каталог, Информация) для мобильных устройств
// Shows or hides the dropdown menu (Catalog, Information) for mobile devices

let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let navItemClick = document.querySelectorAll('.nav__item-click');
    for (i = 0; i < navItemClick.length; i++) {
        navItemClick[i].addEventListener('click', function (event) {
			event.stopImmediatePropagation();
            this.querySelector('.sub-nav__list').classList.toggle('open');
			navItemClick.forEach(element => {
				if (element !== this) {
					element.querySelector('.sub-nav__list').classList.remove('open');
				}
			});
        });
    }
	body.addEventListener('click', function() {
		navItemClick.forEach(element => {
			element.querySelector('.sub-nav__list').classList.remove('open');
		});
	})
} else {
    body.classList.add('mouse');
}
