(function () {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
        const span = this.querySelector('span');
        const {
            offsetX: x,
            offsetY: y
        } = e, {
            offsetWidth: width,
            offsetHeight: height
        } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
        const {
            clientX: x,
            clientY: y
        } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
})();

//eye cursor

// const cursor = document.querySelector(".cursor-inner");
// const cursor2 = document.querySelector(".cursor-outer");
// document.addEventListener("mousemove", e => {
//     cursor.style.top = e.pageY + "px";
//     cursor.style.left = e.pageX + "px";

//     cursor2.style.top = e.pageY + "px";
//     cursor2.style.left = e.pageX + "px";


// })

