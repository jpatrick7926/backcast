var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'handleClick'
  },

  initialize: function() {
    this.render();

    //// This also works as well ////
    //// make note of the 'this' binding
    // this.$el.find('.video-list-entry-title').on('click', this.handleClick.bind(this));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  handleClick: function(e) {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
