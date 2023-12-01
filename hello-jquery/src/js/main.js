import $ from 'jquery';

// jQuery is all about $ = jQuery
console.log($);

// document.querySelector
// document.querySelectorAll
const h1Elm = $('h1');
const liElm = $('ul li:nth-child(2)');
const liElms = $('ul li');

// const elm = document.createElement('li')
// elm.innerHtml = '';
const newLiElm = $('<li>Fifth</li>');
$("ul").append(newLiElm);
$("ul").prepend($("<li>Zero</li>"));

const btnElm = $("<button>Click Me</button>");
$("ul").after(btnElm);

btnElm.on('click', ()=> {
    alert("Hello jQuery");
});

const btnElm2 = btnElm.clone();
btnElm2.text('Remove');
$("ul").after(btnElm2);

btnElm2.on('click', ()=> {
    $("ul li:nth-child(3)").remove();
});

$("h1").css('color', 'red')
    .css('background-color', 'yellow')
    .css('border', '5px solid red')
    .css('padding', '10px');

$("#btn-save").on('click', ()=> {
    const id = $("#txt-id").val().trim();
    const name = $("#txt-name").val().trim();
    const address = $("#txt-address").val().trim();

    if (!id) {
        $("#txt-id").trigger('focus');
        return;
    }else if (!name){
        $("#txt-name").trigger('focus');
        return;
    }else if (!address){
        $("#txt-address").trigger('focus');
        return;
    }

    $("table tbody").on('click', 'tr button.delete',
        (e)=>{
            $(e.target).parents("tr").remove();
    });

    $("table tbody").append(`<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${address}</td>
        <td><button class="delete">Delete</button></td>
    </tr>`);

    $("#txt-id, #txt-name, #txt-address").val("");
    $("#txt-id").trigger('focus');
});