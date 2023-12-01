import $ from 'jquery';

$("#btn-get").on('click', () => {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users'
    }).done((res)=>{
        console.log(res);
    }).fail(()=>{
        alert("Failed to fetch data");
    });

});

$("#btn-post").on('click', ()=>{

    $.ajax({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/todos',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            userId: 1,
            title: "Hello",
            completed: true
        })
    }).done((res, textStatus, xhr)=>{
        console.log(res);
    }).fail((xhr, textStatus, error)=>{
        console.log("Failed", xhr.status);
    });

});