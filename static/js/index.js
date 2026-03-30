window.HELP_IMPROVE_VIDEOJS = false;
console.log("JS loaded");

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 2,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

	// ✅ 添加这个：点击切换图片
    const images = [
        "static/images/compare1.png",
        "static/images/compare2.png"
    ];

    let current = 0;

    $("#compareImg").click(function () {
        current = (current + 1) % images.length;
        $(this).attr("src", images[current]);
    });


})


