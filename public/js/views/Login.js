$(document).ready(function(){
  browserver.views.Login = Backbone.View.extend({
    
    events: {
      "click .login_button" : "login"
    },

    initialize : function(options){
      var that = this;

      $.extend(that,options);
      //_.bindAll(that,'render','login');

      that.modelBinder = new Backbone.ModelBinder();

      that.render();

      var bindings = {
        name : '[name=name]'
      };

      that.modelBinder.bind(that.model, that.el,bindings);
    },

    login : function() {
      var that = this;

      if(that.model.fetch(
        {
          success : function(){
            docCookies.setItem("userId", that.model.get("_id"));
          },
          error : function() {
            that.register();
          }
        }
      ) == null ){
        that.register();
      }


      
      //  that.model.save();
      
    },

    register : function() {
      var that = this;
      that.model.save({
        success : function() {
          docCookies.setItem("userId", that.model.get("_id"));
          console.log(that.model);
        }
      });

    },



    render : function(){
      var that = this;


      return that;
    },


  });
});