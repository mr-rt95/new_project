// function openModal() {
//     alert("İletişim bilgileri açıldı.");
// }

// let scrollSpeed = 0;
// let isScrolling = false;

// window.addEventListener("wheel", function (e) {
//     e.preventDefault();
//     scrollSpeed += e.deltaY;

//     if (!isScrolling) smoothScroll();
// }, { passive: false });

// function smoothScroll() {
//     isScrolling = true;
//     scrollSpeed *= 0.9;

//     window.scrollBy(0, scrollSpeed);

//     if (Math.abs(scrollSpeed) > 0.5) {
//         requestAnimationFrame(smoothScroll);
//     } else {
//         scrollSpeed = 0;
//         isScrolling = false;
//     }
// }


Scrollbar.init(document.body);