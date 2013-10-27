var browserver = {

    views: {},

    models: {},
};

browserver.Router = Backbone.Router.extend({


});

$(document).ready(function () {    
    Backbone.emulateHTTP = true;

    
    var usersView = new browserver.views.List({
        el : $("#userList"),
        collection : new browserver.models.UserCollection(),
        template : _.template('<ul></ul><button class="prev">prev</button><button class="next">next</button>'),
        list_item_template : _.template("<li><%= name %></li>")
    });

    var serversView = new browserver.views.List({
        el : $("#serverList"),
        collection : new browserver.models.ServerCollection(),
        template : _.template('<ul></ul><button class="prev">prev</button><button class="next">next</button>'),
        list_item_template : _.template("<li><%= name %></li>")
    });

    var loginView = new browserver.views.Login({
        model: new browserver.models.User(),
        el : $("#login")
    });

    browserver.router = new browserver.Router();
    Backbone.history.start();
});

