// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// adding event listener to saveBtn that listens for click and then adds to local storage 

$(document).ready(function () {


    $('.saveBtn').on('click', function () {

        var hourSave = $(this).parent().attr('id');

        var textInput = $(this).siblings('.description').val();


        localStorage.setItem(hourSave, textInput);


    });
// comparing time-block Id to dayjs to display past,present, and future
    function hourCheck() {

        $('.time-block').each(function () {

            var hourId = parseInt($(this).attr('id').split('hour-').join(''));

            var currentHour = dayjs().format('H');

            if (currentHour > hourId) {
                $(this).addClass('past')

                $(this).removeClass('present')

                $(this).removeClass('future')



            } else if (currentHour < hourId) {

                $(this).addClass('future')
                $(this).removeClass('past')
                $(this).removeClass('present')

            } else {
                $(this).addClass('present')
                $(this).removeClass('past')
                $(this).removeClass('future')
            }



        })



    };














    $(function saveTextDisplay () {
       
    });























    $('#currentDay').text(dayjs().format('dddd, MMMM D'))

    hourCheck();
})

