var browserver = {

    views: {},

    models: {},
};

browserver.Router = Backbone.Router.extend({


});

$(document).on("ready", function () {
    browserver.router = new browserver.Router();
    Backbone.history.start();
});