const update_btns = document.getElementsByClassName('update-btn');
const add_btn = document.getElementById('add-btn');
const ndt_update_btns = document.getElementsByClassName('control-btn');

const modal_update = document.getElementById('modal-update');
const modal_add = document.getElementById('modal-add');
const modal_ndt_add = document.getElementById('modal-ndt-add');

const closeBtnUpdate = document.getElementById('closeBtnUpdate');
const closeBtnAdd = document.getElementById('closeBtnAdd');
const closeBtnNDTAdd = document.getElementById('closeBtnNDTAdd');

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

/*Noi dung truyen Button*/
for(let i = 0; i < ndt_update_btns.length; i++){
    ndt_update_btns[i].addEventListener('click', function(){
        modal_ndt_add.classList.add('enable');
    });
}

closeBtnNDTAdd.addEventListener('click', function(){
    modal_ndt_add.classList.remove('enable');
});
/**/