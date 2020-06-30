$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();
});

    if(email == "") {
        $("#erroreMess").text("Email not correct");
        return false;
    } else if(name == "") {
        $("#erroreMess").text("Write youre name");
        return false;
    } else if(phone == "") {
        $("#erroreMess").text("Write youre number");
        return false;
    } else if(message.length < 5) {
        $("#erroreMess").text("Youre message must be biggest of 5 simbol");
       return false;
    }

    $("#erroreMess").text("");

    $.ajax ({
        url:'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message
        },
        dataType: 'html',
        beforeSend: function () {
            $("#sendMail").prop("disabled", true);
        },
        success: function (data) {
            if(!data)
                alert('Something wrong mail not send');
                else{
                $("#mailform").trigger("reset");
                }
            $("#sendMail").prop("disabled", false);
        }
    });