import $ from 'jquery';

// const h1Elm = document.querySelector('h1');
// const jqueryH1 = $(h1Elm);

// const jqueryH1Elm = $('h1');

const firstEventListener = ()=> {
    alert("I am the first event listener");
}

$('h1').on('click', firstEventListener);

$('#btn-attach').on('click', ()=> {
    $('h1').on('click', ()=> {
        alert("I am a new event listener");
    });
});

$('#btn-detach-first').on('click', ()=> {
    $("h1").off('click', firstEventListener);
});

$("#btn-detach-all").on('click', ()=> {
    $("h1").off('click');
});

$("#btn-focus").on('click', ()=>{
    $("#txt").trigger('focus');
});

$('#txt').on('mouseenter', ()=>{
    console.log("Mouse Enter");
});

$("#btn-mouse-enter").on('click', ()=>{
    $("#txt").trigger('mouseenter');
});

/* Deletegated Event Handler */
$("ul").on('click', 'li > button', (e)=>{
    $(e.target).parent().remove();
});

$("#traverse-1").on('click', ()=>{
    $("ul").children().eq(0).remove();
});

$("#traverse-2").on('click', ()=>{
    $("ul").find("button").remove();
});