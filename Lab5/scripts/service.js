
dates=[];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ dates.indexOf(string) === -1 ]
}
function blackoutdays() {
    var expert = document.getElementById("docselect").value
    console.log(expert);
    if (expert == "Amy Santiago") {
        dates = ["06/30/2021", "07/02/2021", "07/15/2021"];
    }
    else if (expert == "Jake Peralta") {
        dates = ["06/28/2021", "07/03/2021", "07/16/2021"];
    }
    else if (expert == "Rosa Diaz") {
        dates = ["06/29/2021", "07/10/2021", "07/18/2021"];
    }
    else{
		dates = [""];
	}
    return;
}
function submit() {
    var expert = document.getElementById("docselect").value;
	var time = document.getElementById("timesel").value;
	
	var jsDate = $('#datepicker').datepicker('getDate');
	if (jsDate !== null) { 
		jsDate instanceof Date; 
		var day=jsDate.getDate();
		var month=jsDate.getMonth()+1;
		var year=jsDate.getFullYear();
	}
	
	var service = document.getElementById("servselect").value;
	console.log("Thank you for your service, your appointment has been booked for "+service+" with "+ expert + " at " + time + " on "+month+"/"+day+"/"+year);
    
	alert("Thank you for your service, your appointment has been booked for "+service+" with "+ expert + " at " + time + " on "+month+"/"+day+"/"+year);
}
$(document).ready(function () {

    $('#contactform').validate({
        rules: {
            creditcard: {
                required: true,
                maxlength: 16,
                minlength: 16
            },
            phonenum: {
                phoneUS: true,
                required: true
            }
        },
        messages: {
            creditcard: {
                required: 'Please enter a credit card number',
                maxlength: 'Please enter a 16 digit credit card number',
                minlength: 'Please enter a 16 digit credit card number'
            },
            phonenum: {
                required: 'please enter a phone number',
                phoneUS: 'please enter a (real!) valid phone number'
            }
        }
    });




    $( "#datepicker" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );
    $( "#contactform" ).submit(function( event ) {
        event.preventDefault();
        var expert = document.getElementById("docselect").value;
        var time = document.getElementById("formTime").value;
        
        var jsDate = $('#datepicker').datepicker('getDate');
        if (jsDate !== null) { 
            jsDate instanceof Date; 
            var day=jsDate.getDate();
            var month=jsDate.getMonth()+1;
            var year=jsDate.getFullYear();
        }
        
        var service = document.getElementById("servselect").value;
        console.log("Thank you for your service, your appointment has been booked for "+service+" with "+ expert + " at " + time + " on "+month+"/"+day+"/"+year);
        
        alert("Thank you for your service, your appointment has been booked for "+service+" with "+ expert + " at " + time + " on "+month+"/"+day+"/"+year);
      });

});