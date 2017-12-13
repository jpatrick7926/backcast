var VideoListView = Backbone.View.extend({
  // el: this.$('.list')
  // collection: videos

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var entryView = new VideoListEntryView({model: video});


    //// Experiements ////
    this.$el.append(entryView.$el);

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});


// this.$el.empty();
// this.collection.forEach(this.renderMovie, this);