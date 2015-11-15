var main = setInterval(carousel, 10000);

function carousel() {

        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next('.slide');
        
        if(nextSlide.length == 0) {
            nextSlide= $('.slide').first();
        }
        
        currentSlide.fadeOut(2000).removeClass('active-slide');
        nextSlide.fadeIn(2000).addClass('active-slide');
        
        var currentDot = $('.active-dot');
        var nextDot= currentDot.next();
        
        if (nextDot.length == 0) {
            nextDot= $('.dot').first();
        }
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    
};

var main2 = function () {
    $('.dropdown-toggle').click( function () {
        $('.dropdown-menu').toggle();
    });
	$('.arrow-next').click( function () {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next('.slide');
        
        if(nextSlide.length == 0) {
            nextSlide= $('.slide').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        var currentDot = $('.active-dot');
        var nextDot= currentDot.next();
        
        if (nextDot.length == 0) {
            nextDot= $('.dot').first();
        }
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
        
    $('.arrow-prev').click( function () {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.prev('.slide');
        
        if(nextSlide.length == 0) {
            nextSlide= $('.slide').last();
        }
        
    currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        var currentDot = $('.active-dot');
        var nextDot= currentDot.prev();
        
        if (nextDot.length == 0) {
            nextDot= $('.dot').last();
        }
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        
    });
	
};

$(document).ready(main).ready(main2);