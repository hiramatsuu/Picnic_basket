const grid = document.querySelector('.grid');
const observer2 = new IntersectionObserver((entries) => { 
    const e =entries[0];
    if (e.isIntersecting) {
        grid.classList.add('anime2');
    }else{
        grid.classList.remove('anime2');
    }
});
observer2.observe(grid);