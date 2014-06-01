/// <reference path="../../cordova.js" />
/// <reference path="../zepto.min.js" />
(function (window) {

    function ListContacts() {

        var fields;
        var options;

        function onSuccess(contacts) {

            var htmlContats = '';

            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].phoneNumbers != null) {
                    htmlContats += '<li><a href="tel:' + contacts[i].phoneNumbers[0].value + '">' + contacts[i].displayName + '</a></li>';
                }
            };

            $("#contact-list").html(htmlContats);

        };

        function onError(contactError) {
            //caso der erro
        };

        options = new ContactFindOptions();
        options.filter = $('#txtSearchContacts').val();
        options.multiple = true;

        fields = ["displayName", "name", "phoneNumbers"];

        navigator.contacts.find(fields, onSuccess, onError, options);
    }

    $('#btnSearchContacts').on('click', ListContacts);

})(window);