//global


//variables
const loader = document.querySelector('.preloader');
const toggle_btn = document.querySelector('.navBtn');
const nav = document.querySelector('.nav');
const video_switch = document.querySelector('.video_switch');
let video_switch_off = document.querySelector('.video_switch_btn');
const video_on_off = document.querySelector('.video_item');
const form_sub = document.querySelector('.drink_form');
const person_list = document.querySelector('.drink_card_list');
const work_icon = document.querySelectorAll('.work_item_icon')

//eventlistener
evenlistener()

function evenlistener(){
    window.addEventListener('load', loadMe);
    video_switch.addEventListener('click', video_controls);
    toggle();
    form_sub.addEventListener('submit', submit_form);
    work_icons();
    close_modal();

};


//*********functions*********\\

function work_icons(){work_icon.forEach((items)=> {
    items.addEventListener('click', get_work_icon_id);
})};

function get_work_icon_id(e){
    e.preventDefault();
    
    if (e.target.parentElement.classList.contains('work_item_icon')){
        let pointer = e.target.parentElement.dataset.id
        const work_modal = document.querySelector('.work_modal');
        const work_item = document.querySelector('.work_modal_item');
        work_modal.classList.add('work_modal_show')
        work_item.style.background = `url('../img/work/work${pointer}.jpeg')center/cover`;
        console.log(pointer)
    }
};
function close_modal(){
    const work_modal = document.querySelector('.work_modal');
    const work_modal_close = document.querySelector('.work_modal_close');
    work_modal_close.addEventListener('click', function(){
        work_modal.classList.remove('work_modal_show')
        
    })
    
};
function loadMe(){
    loader.style.display = "none";
};
function toggle(){
    toggle_btn.addEventListener('click', togglers);
};
function togglers(){
    nav.classList.toggle('nav_show');
};
function video_controls(){
    if (!video_switch_off.classList.contains('video_switch_btn_off')){
        video_switch_off.classList.add('video_switch_btn_off');
        video_on_off.pause();
    }else{
        video_switch_off.classList.remove('video_switch_btn_off');
        video_on_off.play();
    };
};

function submit_form(e){
    e.preventDefault();
    const name = document.querySelector('.input_name').value
    const last_name = document.querySelector('.input_last_name').value
    const email = document.querySelector('.input_email').value
    if (check_form(name, last_name, email)){
        input_person(name, last_name);
        display_message('success', 'custumer added to list')
    }else{
        display_message('error', 'Please fill the form properly')
    }
};

function check_form(name, last_name, email){
    let result;
    if(name === '' || last_name === ''|| email === ''){
        result = false;
    }else{
        result = true;
    }
    return result
};

function display_message(type, text){
    const message_field = document.querySelector('.drink_form_feedBack');
    if(type === 'error'){
        message_field.classList.add(type)
        message_field.innerText = text 
    }else if(type === 'success'){
        clear_field();
        message_field.classList.add(type);
        message_field.innerText = text 
    };
    setTimeout(() => {
        message_field.classList.remove(type)
    }, 3000);
}

function input_person(name, last_name){
    const images = [1, 2, 3, 4, 5]
    let random = Math.floor(Math.random() * images.length);
    console.log(name, last_name);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `
                    <img src="img/persons/person${random}.jpg" alt="person${name}" class="person_thumb_nail">
                    <h4 class="person_name">${name}</h4>
                    <h4 class="person_last_name">${last_name}</h4>
                    
    `
    person_list.append(div)
};
function clear_field(){
     document.querySelector('.input_name').value = ''
     document.querySelector('.input_last_name').value = ''
     document.querySelector('.input_email').value = ''
}
