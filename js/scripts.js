var pink = document.querySelector(".pink");
var yellow = document.querySelector(".yellow");
var blue = document.querySelector(".blue");
var red = document.querySelector(".red");
var black = document.querySelector(".black");
var green = document.querySelector(".green");
var phone = document.querySelector(".spec-phone-img");
var description = document.querySelector(".for-color1");
var first_btn = document.querySelector(".first-btn");
var second_btn = document.querySelector(".second-btn");
var nav_btn = document.querySelector(".nav-btn");
var first_bl = document.querySelector(".first-block");
var second_bl = document.querySelector(".second-block");
var specification = document.querySelector(".for-color2");
var open_comm = document.querySelector(".reviews-btn");
var close_comm = document.querySelector(".close-comments");
var comments = document.querySelector(".comments");

open_comm.addEventListener("click", function(def) {
    def.preventDefault();
	comments.classList.remove("none");
	open_comm.classList.add("active");
})

close_comm.addEventListener("click", function(def) {
    def.preventDefault();
	comments.classList.add("none");
	open_comm.classList.remove("active");
})

pink.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "pink");
	description.setAttribute("name", "pink");
	specification.setAttribute("name", "pink");
})

pink.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "pink");
	description.setAttribute("name", "pink");
	specification.setAttribute("name", "pink");
})

yellow.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "yellow");
	description.setAttribute("name", "yellow");
	specification.setAttribute("name", "yellow");
})

black.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "black");
	description.setAttribute("name", "black");
	specification.setAttribute("name", "black");
})

green.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "green");
	description.setAttribute("name", "green");
	specification.setAttribute("name", "green");
})

red.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "red");
	description.setAttribute("name", "red");
	specification.setAttribute("name", "red");
})

blue.addEventListener("change", function(def) {
    def.preventDefault();
    phone.setAttribute("name", "blue");
 	description.setAttribute("name", "blue");	
	specification.setAttribute("name", "blue");	   
})

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 172) {
            $('.doogee-nav').addClass('stickytop');
        }
        else{
            $('.doogee-nav').removeClass('stickytop');
        }
    });
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 600) {
            $('.spec-btn').addClass('active');
			$('.spec-left-block').addClass('to-right');
            $('.spec-right-block').addClass('to-left');
        }
        else{
            $('.spec-btn').removeClass('active');
        }
    });
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 1200) {
            $('.video-btn').addClass('active');
            $('.spec-btn').removeClass('active');
			$('.screen-left-block').addClass('to-right');
            $('.screen-right-block').addClass('to-left');
        }
        else{
            $('.video-btn').removeClass('active');
        }
    });
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 2000) {
            $('.video-btn').removeClass('active');
			$('.core-left-block').addClass('to-right');
            $('.core-right-block').addClass('to-left');
        }
        else{
        }
    });
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 2300) {
			$('.gestures-left-block').addClass('to-right');
            $('.gestures-right-block').addClass('to-left');
        }
        else{
        }
    });
});

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 3000) {
			$('.online-left-block').addClass('to-right');
            $('.online-right-block').addClass('to-left');
        }
        else{
        }
    });
});

first_btn.addEventListener("click", function(def) {
    def.preventDefault();
    first_bl.classList.add("none");
	second_bl.classList.remove("none");
})

second_btn.addEventListener("click", function(def) {
    def.preventDefault();
    second_bl.classList.add("none");
	first_bl.classList.remove("none");
})

nav_btn.addEventListener("click", function(def) {
    first_bl.classList.add("none");
	second_bl.classList.remove("none");
})







