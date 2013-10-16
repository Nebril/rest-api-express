browserver.models.Server = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/api/servers",
//    urlRoot:"/browserver-rest-php/employees",

    initialize:function () {

    },

    defaults: {
        _id: '',
        name: '',
        gameType: '',
    }

});

browserver.models.ServerCollection = Backbone.Collection.extend({

    model: browserver.Server,

    url:"http://localhost:3000/api/servers"
//    url:"/browserver-rest-php/employees"

});

/*var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
    if (method === "read") {
        options.dataType = "jsonp";
        return originalSync.apply(Backbone, arguments);
    }

};*/