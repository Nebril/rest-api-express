$(document).ready(function(){
  browserver.views.List = Backbone.View.extend({

    initialize: function(options){ 
      $.extend(this,options);
      var that = this;
      _.bindAll(that,'renderList');
      that.collection.bind('reset',that.renderList);
      that.render();
      that.loadData();
    },

    render: function() {
      var that = this;
      $(that.el).html(that.template());
      return that;
    },

    renderList: function(){
      var that = this; 
      _.each(that.collection.toJSON(),function(item){
        $(that.el).append(that.list_item_template(item));
      });

    },

    loadData : function(){
      var that = this;
      that.collection.fetch({reset:true});
    }
                 
  });
});