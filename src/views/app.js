var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    // this.$el.find('.list').children().detach();
    var videoList = new VideoListView({collection: this.videos, el: this.$('.list')}).render();
    // this.$el.find('.list').append(videoList.el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
