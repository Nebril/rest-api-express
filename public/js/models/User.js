$(document).ready(function(){

    browserver.models.User = Backbone.Model.extend({
        idAttribute: "_id",
        urlRoot:"http://localhost:3000/api/users",

        initialize:function () {

        },

        defaults: {
            _id: '',
            name: ''
        }

    });

    browserver.models.UserCollection = Backbone.Collection.extend({

        model: browserver.models.User,

        url:"http://localhost:3000/api/users"

    });

});