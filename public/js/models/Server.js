$(document).ready(function(){

    browserver.models.Server = Backbone.Model.extend({
        idAttribute : "_id",
        urlRoot:"http://localhost:3000/api/servers",


        defaults: {
            _id: '',
            name: '',
            gameType: '',
        }

    });

    browserver.models.ServerCollection = browserver.models.Collection.extend({

        model: browserver.models.Server,

        url:"http://localhost:3000/api/servers"
    });
});