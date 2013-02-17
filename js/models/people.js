window.Person = Backbone.Model.extend({

    urlRoot: "/rest/api/person",

    initialize: function () {
    },


    defaults: {
        id: null,
        firstName: "",
        lastName: ""
    }
});

window.People = Backbone.Collection.extend({

    model: Person,

    url: "/rest/api/people"

});