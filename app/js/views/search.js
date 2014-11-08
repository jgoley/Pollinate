Bees.Views.Search = BaseView.extend({
    subViews: [],
    className: 'search-container',
    template: Bees.templates.search.index,
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
        var that = this;
        this.$el.append(this.template());

        if (Parse.User.current().get('userType') == 'farmer') {

            queryBeekeepers().then(function(beekeepers) {
                beekeepers = new Parse.Collection(beekeepers);
                that.subViews.push(new Bees.Views.SearchResultsList({
                    $container: $('.search-results-container'),
                    collection: beekeepers
                }));

                that.subViews.push(new Bees.Views.NameSearch({
                    userType: that.userType,
                    $container: $('.form-container')
                }));
            })
        } else {

            new Bees.Collections.UserSearchGeo({
                userType: 'farmer',
                distance: 200,
                limit: 5,
            }).fetch().then(function(beekeepers) {
                that.subViews.push(new Bees.Views.SearchResultsList({
                    $container: $('.search-results-container'),
                    collection: beekeepers
                }));
            });

            that.subViews.push(new Bees.Views.NameSearch({
                userType: that.userType,
                $container: $('.form-container')
            }));

            that.subViews.push(new Bees.Views.DistanceSearch({
                userType: that.userType,
                $container: $('.form-container')
            }));

        }
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
        _.invoke(this.subViews, 'dispose');
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
        _.invoke(this.subViews, 'dispose');
        this.$el.html(this.template({
            user: this.model.toJSON()
        }))
    },

    getUser: function(e) {
        e.preventDefault();
        BeesApp.navigate('user/' + this.model.id, {
            trigger: true
        });
    }
});