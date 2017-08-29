var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({collection: this.videos, el: this.$('.list')}).render();
    // this.$el.find('.list').append(videoList.el);

    new VideoPlayerView({ el: this.$('.player'), collection: this.videos, model: this.videos.at(0)}).render(this.videos.at(0));

    new SearchView({el: this.$('.search')}).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
