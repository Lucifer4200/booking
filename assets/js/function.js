(function ($) {
    'use strict';
    });


    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY) {
        this.width = (width <= height) ? height : width;
        this.height = (width <= height) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $('.btn').on('mousedown', function (e) {
        //appending an element with a class name "btn-ripple"
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

        //getting the button's offset position
        var pos = $(this).offset();

        //get the button's width and height
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        //get the cursor's x and y position within the button
        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        //adding a css style to the ripple effect
        var rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
        $(this).remove();
    });

    // date picker active
    $(function () {
        $("#datepicker").datepicker();
    });

    // timepicker avtive
    $('.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '10',
        maxTime: '6:00pm',
        defaultTime: '11',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });


    // select appendTo anuther div
    $('#select1').on('change', function () {
        let service_text = $("option:selected", this).text();
        let service_val = $("option:selected", this).val();
        let service_html = `<span class="remove-service d-block fa fa-times" service-val="` + service_val + `">` + service_text + `</span>`;
        jQuery(service_html).appendTo('#select2');
    });
    jQuery(document).on('click', '.remove-service', function () {
        jQuery(this).remove();
    })

    // add staff
    $('#addStaff').on('change', function () {
        let service_text = $("option:selected", this).text();
        let service_val = $("option:selected", this).val();
        let start = $("option:selected", this).attr('start');
        let end = $("option:selected", this).attr('end');
        let service_html = `<p class="remove-staff d-block fa fa-times" service-val="` + service_val + `">` + service_text + `</p>
        <span class="add-time">`+ start + ` - ` + end + `</span>
        `;
        jQuery(service_html).appendTo('#selectStaff');
    });
    jQuery(document).on('click', '.remove-staff', function () {
        jQuery(this).remove();
    })

    $('#selectBooking').on('change', function () {
        let service_text = $("option:selected", this).text();
        let service_val = $("option:selected", this).val();
        let service_html = `<span class="remove-service d-block fa fa-times" service-val="` + service_val + `">` + service_text + `</span>`;
        jQuery(service_html).appendTo('#select2Booking');
    });
    jQuery(document).on('click', '.remove-service', function () {
        jQuery(this).remove();
    })

    // table search
    $("#itemSearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // event item remove
    $(".item-remove").on('click', function () {
        let serial = jQuery(this).attr('serial');
        jQuery('.event-item-' + serial).remove();
    });


})(jQuery);
