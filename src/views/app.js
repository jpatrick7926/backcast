var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    //// This works, don't touch this ////
    this.render();
    // this.videos.on('select', renderPlayer.bind(this,));
    this.videos.on('select', this.renderPlayer);
  },


  render: function() {
    this.$el.html(this.template());

    //// VideoListView ////
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    //// SearchView ////
    new SearchView({
      el: this.$('.search')
    }).render();

    //// PlayerView ////
    new VideoPlayerView({ el: this.$('.player'), collection: this.videos, model: this.videos.at(0)}).render();

    //// Originally here ////
    return this;
  },

  template: templateURL('src/templates/app.html')

});
