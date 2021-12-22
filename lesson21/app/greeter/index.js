define(['jquery', '../messages/index'], function($, messages) {
    return {
        greetMe: function () {
            $('#main')[0].innerText = messages.getHello();
        },
    }
});