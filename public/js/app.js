var browserver = {

    views: {},

    models: {},
};

browserver.Router = Backbone.Router.extend({


});

$(document).ready(function () {    
    var usersView = new browserver.views.List({
        el : $("#userList"),
        collection : new browserver.models.UserCollection(),
        template : _.template("<ul></ul>"),
        list_item_template : _.template("<li><%= name %></li>")
    });

    var serversView = new browserver.views.List({
        el : $("#serverList"),
        collection : new browserver.models.ServerCollection(),
        template : _.template("<ul></ul>"),
        list_item_template : _.template("<li><%= name %></li>")
    });

    browserver.router = new browserver.Router();
    Backbone.history.start();
});