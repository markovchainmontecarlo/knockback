window.PeopleView = Backbone.View.extend({

    initialize: function () {

        this.render();
    },

    render: function () {

        $(this.el).html(this.template());
        return this.el;
    },

    postRender: function () {

        var p = new Person();
        p.set('firstName', 'mark');
        p.set('lastName', 'smith');

        var view_model = kb.viewModel(p, { requires: ['firstName', 'lastName'] });
        ko.applyBindings(view_model);
    
    }
});

