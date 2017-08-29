var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    // this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.each(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    this.$el.append(new VideoListEntryView({model: video}).render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
