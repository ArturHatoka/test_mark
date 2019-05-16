function slider(event) {
    $f = document.forms.myform;
    $x = parseFloat($f.x.value);
    this.querySelectorAll('.slider__box').forEach(slider__box =>{
        let speed = slider__box.getAttribute('data-speed');
        slider__box.style.transform = `translateX(${-(($x-75)*speed)}px)`;
        console.log(slider__box.style.transition = `${0.025*speed}s`);
    });
}

document.addEventListener('mousemove', slider);

$(document).ready(function () {
    $('#video').hover(
        function () {
            $(this).children('video').fadeIn(200).css("display", "flex").css("top", "-10px").css("width", "100%");
        },
        function () {
            $(this).children('video').css("top", "-200px").css("width", "80%").fadeOut(500);
        }
    );
});