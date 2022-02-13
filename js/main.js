$('document').ready(function () {
    let hamburger = $('#hamburger'),
        isClosed = false;

    hamburger.click(function () {
        burgerTime();
    });

    function burgerTime() {
        if (isClosed === true) {
            hamburger.removeClass('is-open');
            hamburger.addClass('is-closed');
            isClosed = false;
        } else {
            hamburger.removeClass('is-closed');
            hamburger.addClass('is-open');
            isClosed = true;
        }
    }
});