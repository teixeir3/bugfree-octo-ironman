NewsReader.Models.Feed = Backbone.Model.extend({

  parse: function(resp) {
    var entriesArr = resp.entries;
    var entriesColl = new NewsReader.Collections.Entries(entriesArr);
    resp.entries = entriesColl;
    return resp;
  }
});