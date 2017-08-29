var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.handleSelect, this);
  },

  handleSelect: function(video) {
    this.model = video;
    this.render(this.model);
  },

  render: function(video) {
    this.$el.html(this.template(video.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
