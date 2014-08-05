App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return [
            { id: 'bob',  anchor: '#bob',  firstName: 'Bob',  lastName: 'Jones', headshot: 'http://placehold.it/200x200&name=Bob' },
            { id: 'bill', anchor: '#bill', firstName: 'Bill', lastName: 'James', headshot: 'http://placehold.it/200x200&name=Bill' },
        ];
    }
});
