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
            $(this).css('border', 'solid #008000 2px');
            if($(this).hasClass('reserved')){
                $(this).css('cursor', 'not-allowed');
            }
        },   
        function(){
            $(this).css('border', 'none');
        }
    );  // for UX

// console.log($('.circle').hasClass('reserved')) // returns boolean true/false

    $(".circle").on('click', ()=>{
        if($('.circle').hasClass('available')===true){
            $(this).removeClass('available');
            $(this).addClass('reserved');
            $('#form').removeClass('hidden');
            $('#form').addClass('revealed');
            return;
        }
        else {alert("something aint working here!")};
    });

    $('#x').hover(
        function(){
            $(this).css("cursor", "pointer");
            $(this).css("color", "black");
        },  
        function(){
            $(this).css("cursor", 'default');
            $(this).css("color", "#ADAAAA");
        });

    $('#save-button').hover(
        function(){
            $(this).css("cursor", "pointer");
            $(this).css("color", "black");
            $(this).css('border', "solid black 2px");
        },  
        function(){
            $(this).css("cursor", 'default');
            $(this).css("color", "white");
            $(this).css("border", "none");
        });

    $("#x").on('click', ()=>{
            $('#form').removeClass('revealed');
            $('#form').addClass('hidden');
        });

    $("#save-button").on('click', ()=>{
        $('#form').removeClass('revealed');
        $('#form').addClass('hidden');
    });
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