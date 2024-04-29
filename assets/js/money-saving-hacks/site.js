jQuery(document).ready(function($) {

	$('.saving .cover').hover(function() {
		$(this).addClass('slide');
		$(this).parent().children('.pound-sign').fadeOut('slow');
		$(this).parent().children('.vm-face').fadeIn('slow');
	});

	$('.saving .cover').on('touchstart',function(){ 
		$(this).addClass('slide');
		$(this).parent().children('.pound-sign').fadeOut('slow');
		$(this).parent().children('.vm-face').fadeIn('slow');
	 });

	$('.one .slide1 .saving .cover').hover(function() {
		$(".total-saving-one .amount").text('£22');
	});
	$('.one .slide1 .saving .cover').on('touchstart',function(){
		$(".total-saving-one .amount").text('£22');
	});
	$('.one .slide2 .saving .cover').hover(function() {
		$(".total-saving-one .amount").text('£31.60');
		$(".one .slide1 .saving .cover").hide();
	});
	$('.one .slide2 .saving .cover').on('touchstart',function(){
		$(".total-saving-one .amount").text('£31.60');
		$(".one .slide1 .saving .cover").hide();
	});
	$('.one .slide3 .saving .cover').hover(function() {
		$(".total-saving-one .amount").text('£38.80');
		$(".one .slide1 .saving .cover, .one .slide2 .saving .cover").hide();
	});
	$('.one .slide3 .saving .cover').on('touchstart',function(){
		$(".total-saving-one .amount").text('£38.80');
		$(".one .slide1 .saving .cover, .one .slide2 .saving .cover").hide();
	});
	$('.one .slide4 .saving .cover').hover(function() {
		$(".total-saving-one .amount").text('£48.40');
		$(".one .slide1 .saving .cover, .one .slide2 .saving .cover, .one .slide3 .saving .cover").hide();
	});
	$('.one .slide4 .saving .cover').on('touchstart',function(){
		$(".total-saving-one .amount").text('£48.40');
		$(".one .slide1 .saving .cover, .one .slide2 .saving .cover, .one .slide3 .saving .cover").hide();
	});


	$('.two .slide1 .saving .cover').hover(function() {
		$(".total-saving-two .amount").text('£3');
	});
	$('.two .slide1 .saving .cover').on('touchstart',function(){
		$(".total-saving-two .amount").text('£3');
	});
	$('.two .slide2 .saving .cover').hover(function() {
		$(".total-saving-two .amount").text('£22.50');
		$(".two .slide1 .saving .cover").hide();
	});
	$('.two .slide2 .saving .cover').on('touchstart',function(){
		$(".total-saving-two .amount").text('£22.50');
		$(".two .slide1 .saving .cover").hide();
	});
	$('.two .slide3 .saving .cover').hover(function() {
		$(".total-saving-two .amount").text('£32.50');
		$(".two .slide1 .saving .cover, .two .slide2 .saving .cover").hide();
	});
	$('.two .slide3 .saving .cover').on('touchstart',function(){
		$(".total-saving-two .amount").text('£32.50');
		$(".two .slide1 .saving .cover, .two .slide2 .saving .cover").hide();
	});


	$('.one .saving .cover').hover(function() { $(".total-saving-one").addClass('wobble'); });
	$('.two .saving .cover').hover(function() { $(".total-saving-two").addClass('wobble'); });
	$('.next').hover(function() { $(".total-saving-one, .total-saving-two").removeClass('wobble'); });
	$('.one .saving .cover').on('touchstart',function(){ $(".total-saving-one").addClass('wobble'); });
	$('.two .saving .cover').on('touchstart',function(){ $(".total-saving-two").addClass('wobble'); });
	$('.next').on('touchstart',function(){ $(".total-saving-one, .total-saving-two").removeClass('wobble'); });


	$('.one .next-sect').click(function() {
		$('.two').ScrollTo({
		    duration: 1200
		});
	})

	$('.two .next-sect, .three .next').click(function() {
		$('.three').ScrollTo({
		    duration: 1200
		});
	})

	$('.three .see-more').click(function() {
		$('.four').ScrollTo({
		    duration: 1200
		});
	})

	$('.four .see-more').click(function() {
		$('.five').ScrollTo({
		    duration: 1200
		});
	})

	$('.five .see-more').click(function() {
		$('.six').ScrollTo({
		    duration: 1200
		});
	})


	$(".brand, .item, .news").hover(function() { $(this).next().stop(true, true).fadeToggle('fast'); });
	$(".brand, .item, .news").on('touchstart',function(){ $(this).next().stop(true, true).fadeToggle('fast'); });
	
	$(".five .txt").hover(function() {
	$(this).stop(true, true).show(); },
	function() {
	$(this).stop(true,true).fadeOut('fast');
	});
	$(".five .txt").on('touchstart',function(){
	$(this).stop(true, true).show(); },
	function() {
	$(this).stop(true,true).fadeOut('fast');
	});


	$(".amount").hover(function() { $(this).next().stop(true, true).fadeToggle('fast'); });
	$(".amount").on('touchstart',function(){ $(this).next().stop(true, true).fadeToggle('fast'); });
	
	$(".info").hover(function() {
	$(this).stop(true, true).show(); },
	function() {
	$(this).stop(true,true).fadeOut('fast');
	});
	$(".info").on('touchstart',function(){
	$(this).stop(true, true).show(); },
	function() {
	$(this).stop(true,true).fadeOut('fast');
	});

});

$(function(){
	     $('#slider-1, #slider-2, #slider-3').liquidSlider({
	    //hashLinking:true,
	    crossLinks:true,
	    firstPanelToLoad:1
	  });
	  var api2 = $.data( $('#slider-1, #slider-2, #slider-3')[0], 'liquidSlider');
	  $('.enable-hash').on('click', function(e){
	    e.preventDefault();
	    api2.options.hashLinking = true;
	    api2.updateHashTags();
	    $(this).fadeOut();
	  });
});