var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    //// Experiments ////
    this.search = new SearchView();

    //// This works, don't touch this ////
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    //// Experiments ////
    this.search.render();

    //// Originally here ////
    return this;
  },

  template: templateURL('src/templates/app.html')

});
