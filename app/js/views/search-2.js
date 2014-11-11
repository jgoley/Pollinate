(function() {

    'use strict';

    Bees.Views.Search = BaseView.extend({
        subViews: [],
        tagName: 'section',
        className: 'search-container',
        template: Bees.templates.search.index,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                queryText: opts.queryText
            });
            options.$container.html(this.el);
            this.queryText = options.queryText;
            this.userType = Parse.User.current().get('userType');
            if (this.userType == 'beekeeper') this.searchType = 'farmer';
            else this.searchType = 'beekeeper';
            this.render();
        },

        render: function() {
            var that = this;
            this.$el.append(this.template());

            new Bees.Views.NameSearch({
                $container: $('.search-form-container'),
                searchType: this.searchType,
                userType: this.userType
            });

            new Bees.Views.DistanceSearch({
                $container: $('.search-form-container'),
                searchType: this.searchType,
                userType: this.userType
            });

            if (this.userType === 'farmer') {
                queryBeekeepers(0).then(function(beekeepers) {
                    var beekeepers = new Parse.Collection(beekeepers);
                    if (beekeepers.length > 0) {
                        that.subViews.push(new Bees.Views.SearchResultsList({
                            $container: $('.search-list-container'),
                            collection: beekeepers
                        }));
                        $('.search-params').html(firstCap(that.searchType) + 's whose ranges include you:');
                    } else {
                        var defaultRange = 500;
                        that.searchGeo(defaultRange);
                    }

                    that.subViews.push(
                        new Bees.Views.Map({
                            $container: $('.map-container'),
                            collection: beekeepers,
                            radius: 200
                        })
                    );
                });
            } else {
                var defaultRange = 200;
                $('.search-params').html(firstCap(this.searchType) + 's within ' + defaultRange + ' miles:');
                this.searchGeo(defaultRange);
            }


        },

        searchByText: function() {
            var that = this;
            var searchResults = new Bees.Collections.NameSearch({
                userType: this.searchType,
                business: this.queryText.toLowerCase()
            });
            searchResults.fetch().then(function() {
                if (searchResults.length > 0) {
                    that.subViews.push(
                        new Bees.Views.SearchResults({
                            collection: searchResults,
                            $container: $('.search-results-container')
                        }));
                } else {
                    $('.search-results-container').html('<h2>No ' + that.searchType + 's found</h2>')
                }
            });
        },

        searchGeo: function(distance) {
            var that = this;
            new Bees.Collections.UserSearchGeo({
                userType: this.searchType,
                distance: distance,
                limit: 5,
            }).fetch().then(
                function(users) {
                    if (users.length === 0) {
                        that.searchGeo(distance + 500);
                    } else {
                        that.subViews.push(new Bees.Views.SearchResultsList({
                            $container: $('.search-list-container'),
                            collection: users
                        }));

                        that.subViews.push(
                            new Bees.Views.Map({
                                $container: $('.map-container'),
                                collection: users,
                                radius: that.radius
                            })
                        );
                        if (users.length > 1) {
                            var pluralize = 's';
                        } else {
                            var pluralize = '';
                        }
                        if (that.searchType == "beekeeper") {
                            $('.search-params').html("<span class='noneFound'>No " + firstCap(that.searchType) + pluralize + " found in your area.</span> Found " + users.length + ' ' + firstCap(that.searchType) + pluralize + ' within ' + distance + ' miles:');
                        }
                    }
                });
        }

    });
    Bees.Views.NameSearch = BaseView.extend({
        tagName: 'form',
        className: 'name-search',
        template: Bees.templates.search.nameSearch,
        subViews: [],
        events: {
            'submit': 'search'
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                userType: opts.userType,
                searchType: opts.searchType
            });
            options.$container.append(this.el);
            this.model = this.user;
            this.userType = options.userType;
            this.searchType = options.searchType;
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
            new Bees.Collections.NameSearch({
                userType: this.searchType,
                business: data.businessName.toLowerCase()
            }).fetch().then(function(users) {
                if (users.length > 0) {
                    that.subViews.push(
                        new Bees.Views.SearchResults({
                            collection: users,
                            $container: $('.search-list-container')
                        }));
                    that.subViews.push(
                        new Bees.Views.Map({
                            $container: $('.map-container'),
                            collection: users,
                        })
                    );
                    $('.search-params').html('Found ' + users.length + ' ' + firstCap(that.searchType) + 's matching "' + data.businessName + '":');
                } else {
                    $('.search-list-container').html('<h2>No ' + that.searchType + 's found</h2>');
                    $('.search-params').html('Found ' + users.length + ' ' + firstCap(that.searchType) + 's matching "' + data.businessName + '":');
                }
            });

        }

    });

    Bees.Views.DistanceSearch = BaseView.extend({
        tagName: 'form',
        className: 'distance-search',
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
            this.searchType = options.searchType;
            this.render();
        },

        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.prepend(this.template());
        },

        search: function(e) {
            e.preventDefault();
            var that = this;
            var data = this.$el.serializeObject();
            var query = new Parse.Query(Bees.Models.User);
            query.equalTo('userType', this.searchType).withinMiles('geoCenter', Parse.User.current().get('geoCenter'), data.distance);
            query.collection().fetch().then(function(users) {
                if (users.length > 0) {
                    that.subViews.push(new Bees.Views.SearchResults({
                        collection: users,
                        radius: data.distance,
                        $container: $('.search-list-container')
                    }));
                    that.subViews.push(
                        new Bees.Views.Map({
                            $container: $('.map-container'),
                            collection: users,
                            radius: data.distance
                        })
                    );
                    $('.search-params').html('Found ' + users.length + ' ' + firstCap(that.searchType) + 's within ' + data.distance + ' miles:');
                } else {
                    $('.search-list-container').html('<h2>No ' + that.searchType + 's found</h2>')
                    $('.search-params').html('Found ' + users.length + ' ' + firstCap(that.searchType) + 's within ' + data.distance + ' miles:');
                }
            });
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
        },


        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.subViews = [];

            this.subViews.push(
                new Bees.Views.SearchResultsList({
                    $container: this.$el,
                    collection: this.collection
                }));
        }

    })

    Bees.Views.SearchResultsList = BaseView.extend({
        tagName: 'ul',
        className: 'search-results-users',

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container
            });
            options.$container.html(this.el);
            this.render();
        },

        render: function() {
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
        className: 'search-results-user',
        template: Bees.templates.search.resultItem,

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
    });

})();