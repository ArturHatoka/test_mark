function slider(event) {
    $f = document.forms.myform;
    $x = parseFloat($f.x.value);
    this.querySelectorAll('.slider__box').forEach(slider__box =>{
        let speed = slider__box.getAttribute('data-speed');
        slider__box.style.transform = `translateX(${-($x-250)*speed}px)`;
        slider__box.style.transition = `${0.025*speed}s`;
    });
}

document.addEventListener('mousemove', slider);

$(document).ready(function () {
    this.querySelectorAll('.slider__box').forEach(slider__box =>{
        let position = slider__box.getAttribute('data-position');
        slider__box.style.left = `${position*10}%`;
    });
});

$(document).ready(function () {
    $('.video').hover(
        function () {
            $(this).children('video').css("display", "flex").css("top", "-15px").css("width", "120%");
            $(this).addClass('active');
            $(this).find('.slider__box__body-desc').addClass('active');
            $(this).find('.slider__box-details').addClass('active');
        },
        function () {
            $(this).children('video').css("top", "-250px").css("width", "100%");
            $(this).removeClass('active');
            $(this).find('.slider__box__body-desc').removeClass('active');
            $(this).find('.slider__box-details').removeClass('active');
        }
    );
});