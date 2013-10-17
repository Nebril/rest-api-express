$(document).ready(function(){
  browserver.views.List = Backbone.View.extend({

    pageNumber : 1,
    events: {
      "click .prev" : "loadPrevPage",
      "click .next" : "loadNextPage",
    },

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

      that.el.find("ul").html("");
      _.each(that.collection.toJSON(),function(item){
        $(that.el.find("ul")).append(that.list_item_template(item));
      });

    },

    loadData : function(){
      var that = this;
      that.collection.fetch({reset:true, page: that.pageNumber});
    },

    loadPrevPage : function() {
      console.log("prev")
      if (this.pageNumber > 1) {
        this.pageNumber--;
        this.loadData();
      }
    },

    loadNextPage : function() {
      console.log("next")
      this.pageNumber++;
      this.loadData();
    },
                 
  });
});