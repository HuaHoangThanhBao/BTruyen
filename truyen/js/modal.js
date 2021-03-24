const detail_btns = document.getElementsByClassName('info-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

for(let i = 0; i < detail_btns.length; i++){
    detail_btns[i].addEventListener('click', function(){
        modal.classList.add('enable');
    });
}

closeBtn.addEventListener('click', function(){
    modal.classList.remove('enable');
})