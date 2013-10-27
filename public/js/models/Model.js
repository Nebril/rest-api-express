 $(document).ready(function(){

 	browserver.models.Model = Backbone.Model.extend({
 		fetch: function(options) {
        	if (options === undefined) {
        		options = {};
        	}

            if (this.id != "" && this.id !== undefined) {
            	options.url = this.urlRoot + "/" + this.id;
            	return Backbone.Model.prototype.fetch.call(this, options);
            } else {
            	return null;
            }

        },

        save: function(attributes, options) {
        	if (options === undefined) {
        		options = {};
        	}

            if (this.id != "" && this.id !== undefined ) {
            	options.url = this.urlRoot + "/" + this.id;
            	return Backbone.Model.prototype.save.call(this, attributes, options);
            } else {
            	return Backbone.Model.prototype.save.call(this, attributes, options);
            }
        }
    });

 });