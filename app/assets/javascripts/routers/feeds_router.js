NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
    "feeds/:feed_id/entries/:id": "showEntry"
  },

  index: function () {
    var that = this;

    NewsReader.feeds.fetch({

      success: function() {
        var indexView = new NewsReader.Views.FeedsIndex({
          collection: NewsReader.feeds
        });

        that._swapView(indexView);
      }

    });
  },

  show: function(id) {
    var that = this;

    that._getFeed(id, function (feed) {
      var feedView = new NewsReader.Views.Feed({
        model: feed
      });

      that._swapView(feedView);
    });
  },

  showEntry: function(feedId, id) {
    var that = this;
    that._getFeed(feedId, function(feed){
      var entries = feed.get("entries");
      var entry = entries.get(id);
      console.log(entry);

      var entryView = new NewsReader.Views.Entry({
        model: entry
      });
      that._swapView(entryView)
    });
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  _getFeed: function(id, callback) {
    var feed = NewsReader.feeds.get(id);

    if (!feed) {
      feed = new NewsReader.Models.Feed({id: id});
      feed.collection = NewsReader.feeds;

      feed.fetch({
        success: function() {
          NewsReader.feeds.add(feed);
          callback(feed);
        }
      });
    }
    else {
      callback(feed);
    }
  }
});