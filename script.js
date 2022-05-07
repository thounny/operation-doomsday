const cursor = document.querySelector(".cursor-inner");
const cursor2 = document.querySelector(".cursor-outer");
document.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";

    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";


})