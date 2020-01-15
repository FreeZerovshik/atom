var host = "localhost";
    var port = 8080;

    function getUserOnline() {

        var settings = {
            "method": "GET",
            "crossDomain": true,
            "url": "http://" + host + ":" + port + "/chat/online",
            "data": name + "&" + msg
        };

        $.ajax(settings).done(function (response) {
               $("#user-online").html(response.replace(/\n/g, "<br />"))
               $("#user-online").scrollTop($("#user-online")[0].scrollHeight);
        }).fail(function (jqXHR, textStatus) {
               console.log(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
        });
    }

    function loadHistory() {
        var settings = {
            "crossDomain": true,
            "url": "http://" + host + ":" + port + "/chat/chat",
            "method": "GET",
        }

        $.ajax(settings).done(function (response) {
            $("#history").html(response.replace(/\n/g, "<br />"))
            $("#history").scrollTop($("#history")[0].scrollHeight);
        }).fail(function (jqXHR, textStatus) {
            console.log(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
        });
    }

    function say() {
        var msg = $('#msgform').serialize();
        var name = $('#nameform').serialize();

        var settings = {
            "method": "POST",
            "crossDomain": true,
            "url": "http://" + host + ":" + port + "/chat/say",
            "data": name + "&" + msg
        };

        $.ajax(settings).done(function (response) {
            $('#msgform').trigger("reset");
            loadHistory();
            getUserOnline();
        }).fail(function (jqXHR, textStatus) {
            alert(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
            console.log(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
        });
    }

    function logout() {
        var name = $('#nameform').serialize();

        var settings = {
            "method": "POST",
            "crossDomain": true,
            "url": "http://" + host + ":" + port + "/chat/logout",
            "data": name
        };

        $.ajax(settings).done(function (response) {
            loadHistory();
            getUserOnline();
        }).fail(function (jqXHR, textStatus) {
            alert(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
            console.log(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
        });
    }

    function login() {
        var name = $('#nameform').serialize();

        var settings = {
            "method": "POST",
            "crossDomain": true,
            "url": "http://" + host + ":" + port + "/chat/login",
            "data": name
        };

        $.ajax(settings).done(function (response) {
            loadHistory();
            getUserOnline();
        }).fail(function (jqXHR, textStatus) {
            alert(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
            console.log(jqXHR.status + " " + jqXHR.statusText + ". " + jqXHR.responseText);
        });
    }