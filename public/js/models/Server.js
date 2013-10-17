$(document).ready(function(){

    browserver.models.Server = Backbone.Model.extend({
        idAttribute : "_id",
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

        model: browserver.models.Server,

        url:"http://localhost:3000/api/servers"
    //    url:"/browserver-rest-php/employees"

    });
});