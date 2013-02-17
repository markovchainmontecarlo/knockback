var AppRouter = Backbone.Router.extend({

    routes: {
        "": "PeopleListView",

    },
    PeopleListView: function () {
        var currentView = app.loadView(PeopleView);
       // $('#main-content').html(currentView.el);
    },
    initialize: function () {
        // this.headerView = new HeaderView();
        // $('.header').html(this.headerView.el);
    },

    loadView : function(view)
    {
        var currentView = new view();
        $('#main-content').html(currentView.el);

        if(currentView.postRender)
            currentView.postRender();

        return currentView;
    }
});

utils.loadTemplate(['PeopleView'], function() {
    window.app = new AppRouter();
    Backbone.history.start();
});

