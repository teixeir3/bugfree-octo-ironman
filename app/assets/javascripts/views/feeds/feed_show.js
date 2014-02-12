NewsReader.Views.Feed = Backbone.View.extend({
  template: JST["feeds/show"],

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  events: {
    'click .refresh': 'refresh'
  },

  render: function() {
    var that = this;

    var renderedContent = this.template({
      feed: that.model
    });

    this.$el.html(renderedContent);

    return this;
  },

  refresh: function(event) {
    var that = this;
    var id = $(event.currentTarget).attr("data-id");

    this.model.fetch();

  },

  setModel: function(parsedResp) {
    this.model = new NewsReader.Models.Feed(parsedResp);
  }


});