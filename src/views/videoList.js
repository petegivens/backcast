var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {

    this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.each(function(model) {
      this.$el.append(new VideoListEntryView({model: model}).render().el);
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
