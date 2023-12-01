import $ from 'jquery';

$("#btn-set-color").on('click', ()=> {
    $("h1").css('color', 'blue');
});

$("#btn-get-color").on('click', ()=> {
    const color = $("h1").css('color');
    alert(color);
});

$("#btn-add-class").on('click', ()=> {
    // $('h1').addClass('bg border');
    $('h1').addClass(['bg', 'border']);
});

$("#btn-has-class").on('click', ()=> {
    // $('h1').addClass('bg border');
    const result = $('h1').hasClass('border');
    alert(result);
});

$("#btn-remove-class").on('click', ()=> {
    // $('h1').removeClass('bg');
    $('h1').removeClass(['bg', 'border']);
});

$("#btn-fade-in").on('click', ()=> {
    $("h1").fadeIn({duration: 5000});
});

$("#btn-fade-out").on('click', ()=> {
    $("h1").fadeOut({duration: 5000});
});

$("#btn-toggle").on('click', ()=> {
    $("h1").toggleClass(['bg', 'border']);
});

//
/* 
    append
    prepend
    insert
    before
    clone
    remove
    empty
    replaceWith
    text         innerText
    html         innerHtml
*/

const clonedElm = $('h1').clone();
$('body').append(clonedElm);
clonedElm.text("Hello jQuery");
$('body').prepend(clonedElm.clone());

$("ul").before(clonedElm.clone());
$("ul").after(clonedElm.clone());

$("h1").css('color', 'green');
$("h1").last().css('color', 'red');
$("h1").first().css('color', 'red');
$("h1").eq(3).replaceWith('<input>');

// $("li").replaceWith('<input>');
// $("ul").empty();
// $("ul li").remove();