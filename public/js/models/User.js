$(document).ready(function(){

    browserver.models.User = Backbone.Model.extend({
        idAttribute: "_id",
        urlRoot:"http://localhost:3000/api/users",

        defaults: {
            _id: '',
            name: ''
        }

    });

    browserver.models.UserCollection =  browserver.models.Collection.extend({

        model: browserver.models.User,

        url:"http://localhost:3000/api/users"

    });

});