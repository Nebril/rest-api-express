 $(document).ready(function(){

 	browserver.models.Collection = Backbone.Collection.extend({
 		fetch: function(options) {

            if (typeof(options.page) == "number") {
            	options.url = this.url + "/page/" + options.page;
            }

            //Call Backbone's fetch
            return Backbone.Collection.prototype.fetch.call(this, options);
        }
    });

 });