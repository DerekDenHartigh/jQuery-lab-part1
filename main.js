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

$(()=>{ // which do I use?
$(document).ready(function() { // which do I use?
    let mostRecentlyClickedCircleNumber;
    let tableNumber1, tableNumber2, tableNumber3; // initializing these to store table reservation data
    let tableNumber4, tableNumber5, tableNumber6;
    let tableNumber7, tableNumber8, tableNumber9;
    $(".circle").hover(
        function(){
            if($(this).hasClass('available')){
                $(this).css('border', 'solid #008000 2px');
                $(this).css("cursor", "pointer");
            }
            if($(this).hasClass('reserved')){
                $(this).css('cursor', 'not-allowed');
                $(this).css('border', 'solid red 2px');
            }
        },   
        function(){
            $(this).css('border', 'none');
        }
    );

    $(".circle").on('click', function(event) { // don't use arrow functions in conjunction with "this"
        let tableNumber = $(event)["0"].currentTarget.childNodes["0"].data;
        if ($(this).hasClass("reserved")===true){
            alert("That table is reserved, sorry!");
            return;
        }
        else if($('.circle').hasClass('available')===true){ 
            $(this).removeClass('available');
            $(this).addClass('reserved');
            $('#form').removeClass('hidden');
            $('#form').addClass('revealed');
            $("#form-sub-header").html("Table Number: "+tableNumber);
            mostRecentlyClickedCircleNumber = tableNumber;
            return mostRecentlyClickedCircleNumber;
        }
        else {alert("something aint right here!");
        console.error("Err...Rrr..0000RRR...");
        }
    });

    $('#x').hover(
        function(){
            $(this).css("cursor", "pointer");
            $(this).css("color", "black");
            $(this).css("background-color", ' #EEE')
        },  
        function(){
            $(this).css("cursor", 'default');
            $(this).css("color", "#ADAAAA");
            $(this).css("background-color", 'white')
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

    $("#x").on('click', function(){
            $("#form")[0].reset("#form");
            $('#form').removeClass('revealed');
            $('#form').addClass('hidden');
            $("#"+mostRecentlyClickedCircleNumber).removeClass('reserved');
            $("#"+mostRecentlyClickedCircleNumber).addClass('available');
        });

    // $("#save-button").on('click', ()=>{ // trying below to make conditional for if form isn't filled out
    //     if($(".input").value==="" || $("#guest-number-input").value === 0){  // an input wasn't filled out, or guest # not specified
    //         alert("The form was not filled out correctly.\nYour reservation has not been saved.")
    //         console.log(`unfilled form: ${$("#form").value}`);
    //         return; // returns undefined
    //     } // trying below to write conditional for if the form is filled out.
    //     else if($(".input").value!=="" && $(".input").value!==undefined && $(".input").value!==null){
    //         alert("Your table has been reserved!")
    //         $('#form').removeClass('revealed');
    //         $('#form').addClass('hidden');
    //     }

    $("#save-button").on('click', ()=>{
        let nameValue = $("#name-input")[0].value; // these are the field values, will use them for conditionals
        let phoneNumberValue = $("#phone-number-input")[0].value;
        let guestNumberValue = $("#guest-number-input")[0].value;
        let formObj = {
            "name": nameValue,
            "phoneNumber": phoneNumberValue,
            "numberOfGuests": guestNumberValue
        };

        if(nameValue==="" || phoneNumberValue==="" || guestNumberValue===0 || $("#form")[0].checkValidity()===false){ // could probably just use check validity.
            console.error("ERROR! either a field is empty or you've not specified your guest #")
            alert("Please complete the form")
            return;
        }
        else if(nameValue!=="" && phoneNumberValue!=="" && guestNumberValue!==0 && $("#form")[0].checkValidity()===true) {
            alert("Your table has been reserved!")
            $("#form")[0].reset("#form");
            $('#form').removeClass('revealed');
            $('#form').addClass('hidden');
            switch(mostRecentlyClickedCircleNumber){
                case "1": tableNumber1 = formObj; return tableNumber1;
                case "2": tableNumber2 = formObj; return tableNumber2;
                case "3": tableNumber3 = formObj; return tableNumber3;
                case "4": tableNumber4 = formObj; return tableNumber4;
                case "5": tableNumber5 = formObj; return tableNumber5;
                case "6": tableNumber6 = formObj; return tableNumber6;
                case "7": tableNumber7 = formObj; return tableNumber7;
                case "8": tableNumber8 = formObj; return tableNumber8;
                case "9": tableNumber9 = formObj; return tableNumber9;
                default: console.error("What did you click?"); return;
            };
        }
        });
        /*
        I'm getting "An invalid form control with name='' or name='phone' is not focusable." 
        because the form hides upon submission, due to the code below
        */

        /* 
        the code below prevents form from submitting - otherwise the form wouldn't let you submit without filling it 
        out but... I can't allow the submission to go through without refreshing the page and undoing my jQuery styling
        which is a requirement of this assignment so..
        */
        
        // $(document).on('submit', '#form', function(event) {
        //     event.preventDefault();
        //     alert('page did not refresh');
        // });
    });
});