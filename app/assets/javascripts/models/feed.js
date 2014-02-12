NewsReader.Models.Feed = Backbone.Model.extend({
  url: function() {
    return "/feed/" + this.get("id") + "/refresh";
  },
  parse: function(resp) {
    var entriesArr = resp.entries;
    var entriesColl = new NewsReader.Collections.Entries(entriesArr);
    resp.entries = entriesColl;
    return resp;
  }

});