var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {

    this.$el.html(this.template());
    this.$el.children().detach();
    console.log('this.collection.models.length: ', this.collection.models.length);
    // for (var i = 0; i < this.collection.models.length; i++) {
    //   var videoListEntry = new VideoListEntryView({model: this.collection.models[i]});
    //   console.log(videoListEntry);
    //   this.$el.append(videoListEntry.el);
    // }'
    this.collection.each(function(model) {
      this.$el.append(new VideoListEntryView({model: model}).render().el);
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
