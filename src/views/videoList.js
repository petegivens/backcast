var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();

    for (var i = 0; i < this.collection.models.length; i++) {
      var videoListEntry = new VideoListEntryView({model: this.collection.models[i]});
      console.log(videoListEntry);
      this.$el.append(videoListEntry.el);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
