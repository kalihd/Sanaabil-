// active menu /////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    //menuLi[len].classList.toggle("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar /////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})


// toggle icon navbar /////////////////////////////////////////
let menuIcon = document.getElementById("menu-icon");
let menuiconI = document.getElementById('icon');
let navlist = document.querySelector(".navlist");
console.log(menuIcon)
menuIcon.onclick = ()=>{
    menuiconI.classList.toggle("bx-x");
    // menuIcon.children.classList.toggle('bx-x');
    // menuIcon.innerHTML = `<i id="icon" class='bx bx-x'></i>`;
    navlist.classList.toggle("open");
}
