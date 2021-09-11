'use strict';
const modal = document.querySelector('.modal');
const btnclose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModel = document.querySelectorAll('.show-modal');

/*refactor the code*/

let openModal = function(){
    modal.classList.toggle('hidden');
    overlay.classList.remove('hidden');
} 
let closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
overlay.addEventListener('click',closeModal);

openModel.forEach(function(elem){
    elem.addEventListener('click',openModal);
    btnclose.addEventListener('click',closeModal);
    overlay.addEventListener('click',closeModal);
});

document.addEventListener('keydown',function(e){
    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
})


/*first code*/ 

// for (let i = 0; i<openModel.length; i++){
//     openModel[i].addEventListener('click',function(){
//             modal.classList.toggle('hidden');
//             overlay.classList.remove('hidden');
//         btnclose.addEventListener('click',function(){
//             modal.classList.add('hidden');
//             overlay.classList.add('hidden');
//         })
//         document.addEventListener('keydown',function(e){
//             if (e.key === "Escape") {
//                 modal.classList.add('hidden');
//                 overlay.classList.add('hidden');
//             }
//         })
//     })
// }