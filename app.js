const btnToggel = document.querySelector('.menu');

// funct
document.querySelector('#list').onclick = () =>{
    btnToggel.classList.toggle('active');
}

// icons
let changeIcon = function(icon){
    icon.classList.toggle('fa-xmark')
}

// const menuToggle = document.querySelector('.menu-toggle input');

// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function() {
//     nav.classList.toggle('slide');
// });

