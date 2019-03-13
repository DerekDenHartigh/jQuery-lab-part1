"use strict";
/* To Do:
What does the application do?
    1. Displays the restaurant’s floor plan.
2. Visually notifies the user that seats are available or not.
3. Displays a form when an open table is clicked on.
4. Hides the form when the user submits the form.
Build Specifications:
1. Each table must have either an “available” or a “reserved” class.
2. The form must remain hidden until a user clicks on a table with the class “available”.
3. There should be a way for the user to exit the form without submitting.
4. When the user submits the form, the form is hidden, and the class of the selected seat
is changed from “available” to “reserved”.
5. Change the cursor property to “not-allowed” if the table has a “reserved” class.
6. Changes the appearance of an open table when the mouse moves over the table, as
well as changes the cursor.
*/

$(document).ready(function() {

    $(".circle").hover(
        function(){
            $(this).css('background-color', ' #ADAAAA');
            $(this).css('color', '#CCC');  // styles on hover
    },   function(){
        $(this).css('background-color', '#CCC');
        $(this).css('color', '#ADAAAA'); // styles after hover
    });

    $(".circle").on('click', ()=>{
        
    })
});

/*
Functions to piece to reference:

    $('#hover').on('mouseover', ()=>{
        purplify($('#hover'));

    $('#submit').on('click', ()=>{
    if ($('#name').val().length>0){ // checks to see if anything is typed into field
        console.warn($('#name').val());
        $('div').replaceWith(`<h1>Hello, ${$('#name').val()}!</h1>`);

    function blackAsNight(element){
        $(element).css('background-color', 'black')

    $( document ).ready(function() {
    $("#action").on("click", main);
    function main() {
        $("#grow-me").addClass("big");
        $("#shrink-me").removeClass("big");
        console.log($("li").text());
        $(".link").attr("href", "https://www.example.com");
        $(".link").html("somewhere");
        $("#hide-me").css("display", "none");
        $('#show-me').css("display", "block");
        if ($('#name').val().length>0) {
            $('h1').replaceWith(`<h1>Hello, ${$('#name').val()}!</h1>`);
        };
    };
});

    $(".circle").hover(
             function(){
        $(this).css('opacity', '.3');  // styles on hover
        },   function(){
        $(this).css('opacity', '1'); // styles after hover
        });

    $('#make-me-black').addClass("bg-black");
*/