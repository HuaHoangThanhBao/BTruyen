const update_btns = document.getElementsByClassName('update-btn');
const add_btn = document.getElementById('add-btn');

const modal_update = document.getElementById('modal-update');
const modal_add = document.getElementById('modal-add');

const closeBtnUpdate = document.getElementById('closeBtnUpdate');
const closeBtnAdd = document.getElementById('closeBtnAdd');

/*Update Btns*/
for(let i = 0; i < update_btns.length; i++){
    update_btns[i].addEventListener('click', function(){
        modal_update.classList.add('enable');
    });
}

closeBtnUpdate.addEventListener('click', function(){
    modal_update.classList.remove('enable');
});
/**/

/*Add Button*/
add_btn.addEventListener('click', function(){
    modal_add.classList.add('enable');
});

closeBtnAdd.addEventListener('click', function(){
    modal_add.classList.remove('enable');
});
/**/