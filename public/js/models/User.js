browserver.models.User = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/api/users",

    initialize:function () {

    },

    defaults: {
        _id: '',
        name: ''
    }

});

browserver.models.UserCollection = Backbone.Collection.extend({

    model: browserver.User,

    url:"http://localhost:3000/api/users"

});

/*var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
    if (method === "read") {
        options.dataType = "jsonp";
        return originalSync.apply(Backbone, arguments);
    }

};*/