Bees.Views.Search = BaseView.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.search,

    events: {
        'submit': 'search'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.model = this.user;
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template({user: this.model}));
    },

    search: function(){

    }

});

Bees.Views.SearchResults = BaseView.extend({

    className: 'search-results',
    template: Bees.templates.searchResults,

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.model = this.user;
        this.render();
    },

    render: function() {
        this.$el.append(this.template({user: this.model}));
    },



});