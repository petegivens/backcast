var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // this.$el.html(this.template());
    console.log('videolistentry.js this: ', this.el);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
