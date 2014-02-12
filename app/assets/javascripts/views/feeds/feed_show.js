NewsReader.Views.Feed = Backbone.View.extend({
  template: JST["feeds/show"],

  initialize: function() {

  },

  render: function() {
    var that = this;

    var renderedContent = this.template({
      feed: that.model
    });

    this.$el.html(renderedContent);

    return this;
  }


});