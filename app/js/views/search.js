Bees.Views.Search = BaseView.extend({
    className: 'search-container',
    subViews: [],
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            userType: opts.userType
        });
        options.$container.html(this.el);
        this.userType = options.userType;
        this.render();
    },

    render: function() {
        _.invoke(this.subViews, 'dispose');
        this.$el.append('<div class="form-container"></div><div class="search-results-container"></div>');
        this.subViews.push(new Bees.Views.NameSearch({
            userType: this.userType,
            $container: $('.form-container')
        }));
        this.subViews.push(new Bees.Views.DistanceSearch({
            userType: this.userType,
            $container: $('.form-container')
        }));
    },

});

Bees.Views.NameSearch = BaseView.extend({
    tagName: 'form',
    className: 'search',
    template: Bees.templates.search.nameSearch,
    subViews: [],
    events: {
        'submit': 'search'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            userType: opts.userType
        });
        options.$container.append(this.el);
        this.model = this.user;
        this.userType = options.userType;
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template());
    },

    search: function(e) {
        _.invoke(this.subViews, 'dispose');
        e.preventDefault();
        var that = this;
        var data = this.$el.serializeObject();
        var searchResults = new Bees.Collections.NameSearch({
            userType: this.userType,
            business: data.businessName.toLowerCase()
        });
        searchResults.fetch().then(function() {
            console.log("The search results", searchResults);
            if (searchResults.length > 0) {
                that.subViews.push(new Bees.Views.SearchResults({
                    collection: searchResults,
                    radius: data.distance,
                    $container: $('.search-results-container')
                }));
            } else {
                $('.search-results-container').html('<h2>No ' + that.userType + 's found</h2>')
            }
        });

    }

});

Bees.Views.DistanceSearch = BaseView.extend({
    tagName: 'form',
    className: 'search',
    template: Bees.templates.search.distance,
    subViews: [],
    events: {
        'submit': 'search'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            userType: opts.userType
        });
        options.$container.append(this.el);
        this.model = this.user;
        this.userType = options.userType;
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template());
    },

    search: function(e) {
        _.invoke(this.subViews, 'dispose');
        e.preventDefault();
        var that = this;
        var data = this.$el.serializeObject();
        if (this.userType === 'beekeeper') {
            console.log(this.userType);
            queryBeekeepers().then(function(inRange) {
                var collection = new Parse.Collection(inRange);
                if (inRange.length > 0) {
                    that.subViews.push(new Bees.Views.SearchResults({
                        collection: collection,
                        radius: data.distance,
                        $container: $('.search-results-container')
                    }));
                } else {
                    $('.search-results-container').html('<h2>No ' + that.userType + 's found</h2>')
                }
            })
        } else {
            var query = new Parse.Query(Bees.Models.User);
            query.equalTo('userType', this.userType);
            query.withinMiles('geoCenter', Parse.User.current().get('geoCenter'), data.distance);
            var collection = query.collection();
            collection.fetch().then(function() {
                console.log("The search results", collection.length);
                if (collection.length > 0) {
                    that.subViews.push(new Bees.Views.SearchResults({
                        collection: collection,
                        radius: data.distance,
                        $container: $('.search-results-container')
                    }));
                } else {
                    $('.search-results-container').html('<h2>No ' + that.userType + 's found</h2>')
                }
            });
        }
    }

});

Bees.Views.SearchResults = BaseView.extend({
    className: 'search-results',
    subViews: [],
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            radius: opts.radius
        });
        options.$container.html(this.el);
        this.radius = options.radius;
        this.render();
        //this.listenTo(this.collection, 'change', this.render);
    },


    render: function() {
        _.invoke(this.subViews, 'dispose');
        this.subViews = [];

        this.subViews.push(
            new Bees.Views.SearchResultsList({
                $container: this.$el,
                collection: this.collection
            }));

        this.subViews.push(
            new Bees.Views.Map({
                $container: this.$el,
                collection: this.collection,
                radius: this.radius
            })
        );
    }

})

Bees.Views.SearchResultsList = BaseView.extend({
    tagName: 'ul',
    className: 'users',

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        console.log('Search results List rendering', this.collection)
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(user) {
        console.log(user);
        new Bees.Views.SearchResultsListItem({
            $container: this.$el,
            model: user
        })
    },
});

Bees.Views.SearchResultsListItem = BaseView.extend({
    tagName: 'li',
    className: 'user',
    template: Bees.templates.search.resultItem,

    events: {
        'click .user': 'getUser',
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.append(this.el);
        this.render();
    },

    render: function() {
        this.$el.html(this.template({
            user: this.model.toJSON()
        }))
    },

    getUser: function(e){
        e.preventDefault();
        BeesApp.navigate('user/'+this.model.id, {trigger: true});
    }
});