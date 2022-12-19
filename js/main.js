function onScroll() {
    const top = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const diff = documentHeight - windowHeight;
    const per = top * 100 / diff;

    // minify / unminify header
    const header = document.querySelector('.header');

    header.classList.toggle('header--min', top > 50);

     // show / hide scroll to top link
     const scrollToTop = document.querySelector('.back-to-top');
     scrollToTop.classList.toggle('back-to-top--show', per > 75);
}

// minify header on scroll
document.addEventListener('scroll', onScroll); // anonymous functions