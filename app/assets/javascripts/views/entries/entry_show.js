NewsReader.Views.Entry = Backbone.View.extend({
  template: JST["entries/show"],

  initialize: function() {

  },

  render: function() {
    var that = this;
    var renderedContent = this.template({
      entry: that.model
    });

    this.$el.html(renderedContent);

    return this;
  }


});