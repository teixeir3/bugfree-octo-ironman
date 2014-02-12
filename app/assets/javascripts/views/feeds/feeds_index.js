NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],

  initialize: function(options) {

  },

  render: function() {
    var that = this;

    var renderedContent = this.template({
      feeds: that.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});