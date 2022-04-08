"use strict"

const isMobile = {
	Android: function(){
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function(){
		return navigator.userAgent.match(/IEMobile/i);
	},
	any:function(){
		return(
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if(isMobile.any()){
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++){
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

//Меню бургер
const iconMenu = document.querySelector('.header-menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerMenu = document.querySelector('.header-menu');
if (iconMenu) {
	iconMenu.addEventListener('click',function(e){
		iconMenu.classList.toggle('header-menu__icon_active');
		document.body.classList.toggle('_lock');
		headerMenu.classList.toggle('header-menu_active');
		menuBody.classList.toggle('_active');

	});
}

//Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click',onMenuLinkClick);
		});

	function onMenuLinkClick(e){
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if(iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				top:gotoBlockValue,
				behavior:"smooth"
			});
			e.preventDefault();
		}
	}
	
}
//________________________________________________________________
window.addEventListener('resize',adaptive_function);

function adaptive_header(w,h){
	let headerMenu = document.querySelector('.header-menu');
	let headerLang = document.querySelector('.header-top-lang');
	let headerTop = document.querySelector('.header-top');
	let headerBottoms = document.querySelectorAll('.header-bottom-menu');
	let headerTopLink = document.querySelector('.header-top__link');
		const headerBottomColumn1 = document.querySelector('#header-bottom__column1');
		const headerBottomColumn2 = document.querySelector('#header-bottom__column2');
		const headerBottomMenu1 = headerMenu.querySelector('#header-bottom-menu1');
		const headerBottomMenu2 = headerMenu.querySelector('#header-bottom-menu2');

	if(w<769){
		if(!headerLang.classList.contains('done')){
			headerLang.classList.add('done');
			headerMenu.append(headerLang);
		}else{
			if(headerLang.classList.contains('done')){
			headerLang.classList.remove('done');
			}

		}
	}
	for(let headerBottom of headerBottoms){
		if(w<769){
		if(!headerBottom.classList.contains('done')){
			headerBottom.classList.add('done');
			headerMenu.append(headerBottom);
		}else{
			if(headerBottom.classList.contains('done')){
			headerBottom.classList.remove('done');
			}
		}
	}
	}

	if(w>769){
		if(headerLang.parentElement == headerMenu){

			headerTop.append(headerLang);
			headerTop.append(headerTopLink);

				headerBottomColumn1.append(headerBottomMenu1);
				headerBottomColumn2.append(headerBottomMenu2);
			}
		}

	}


function adaptive_function(){
	var w = window.outerWidth;
	var h = window.outerHeight;
	adaptive_header(w,h);
}
adaptive_function();
//________________________________________________________________

//__________________Картинки______________________________________________

function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}

ibg();


//_______________Картинки___________________________________________


//_______________google maps___________________________________________

function initMap() {
let marker
let element = document.querySelector('#map');
let options = {
			zoom: 15,
			panControl:false,
			mapTypeControl:false,
			center: {lat:40.742930682044445, lng: -73.92623067682835}, 
			scrollwheel:false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
}

let myMap = new google.maps.Map(element, options);

addMarker ({lat:40.742930682044445, lng: -73.92623067682835});
// let InfoWindow = new google.maps.InfoWindow({
// 	content: '<h1>Hey there!</h1>'
// });

// marker.addEventListener('click',function(){
// 	InfoWindow.open(myMap, marker);
// });
function addMarker(coordinates){
		marker = new google.maps.Marker({
		position: coordinates,
		map: myMap,
		//icon: 'http...'
	})

}


};

//_______________/google maps___________________________________________