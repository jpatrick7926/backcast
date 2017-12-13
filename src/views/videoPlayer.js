var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'select', this.setModel);
  },

  setModel: function(selection) {
    this.model = selection;
    console.log(selection);
    this.render();
  },
    
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log('here in the player', this.model.attributes.snippet.title);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
