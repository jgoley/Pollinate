Bees.Views.Search = BaseView.extend({
    className: 'search-container',

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
        this.$el.append('<div class="form-container"></div><div class="search-results-container"></div>');

        new Bees.Views.NameSearch({
            userType: this.userType,
            $container: $('.form-container')
        })
        new Bees.Views.DistanceSearch({
            userType: this.userType,
            $container:  $('.form-container')
        })
    },

});

Bees.Views.NameSearch = BaseView.extend({
    tagName: 'form',
    className: 'search',
    template: Bees.templates.search.nameSearch,

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

    search: function(e){
        var that = this;
        e.preventDefault();
        var data = this.$el.serializeObject();
        console.log(data);
        var query = new Parse.Query(Bees.Models.User);
        query.equalTo('userType', this.userType);
        query.contains('businessName', data.businessName.toLowerCase());
        var collection = query.collection();
        collection.fetch().then(function(){
            console.log("The search results",collection);
            if(collection.length > 0){
                new Bees.Views.SearchResults({
                    collection: collection,
                    radius: data.distance,
                    $container: $('.search-results-container')
                });
            }
            else{
                $('.search-results-container').html('<h2>No '+that.userType+'s found</h2>')
            }
        });

    }

});

Bees.Views.DistanceSearch = BaseView.extend({
    tagName: 'form',
    className: 'search',
    template: Bees.templates.search.distance,

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

    search: function(e){
        e.preventDefault();
        var that = this;
        var data = this.$el.serializeObject();
        if (this.userType == 'beekeeper'){
            console.log(this.userType);

            Parse.Cloud.run('getLocation', {}, {
                success: function(result) {
                    console.log(result);
                },
                error: function(error) {
                    console.log(error)
                }
            });
            queryBeekeepers().then(function(inRange){
                var collection = new Parse.Collection(inRange);
                if(inRange.length > 0){
                    new Bees.Views.SearchResults({
                        collection: collection,
                        radius: data.distance,
                        $container: $('.search-results-container')
                    });
                }
                else{
                    $('.search-results-container').html('<h2>No '+that.userType+'s found</h2>')
                }          
            })
        }
        else {
            var query = new Parse.Query(Bees.Models.User);
            query.equalTo('userType', this.userType);
            query.withinMiles('geoCenter', Parse.User.current().get('geoCenter'), data.distance);
            var collection = query.collection();
            collection.fetch().then(function(){
                console.log("The search results",collection.length);
                if(collection.length > 0){
                    new Bees.Views.SearchResults({
                        collection: collection,
                        radius: data.distance,
                        $container: $('.search-results-container')
                    })
                }
                else{
                    $('.search-results-container').html('<h2>No '+that.userType+'s found</h2>')
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

    events:{
        'click a': 'removeView'
    },


    render: function() {
        console.log('Search results rendering')
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
    },

    removeView: function(){
        console.log("Removing");
        console.log(this.subViews);
        _.invoke(this.subViews, 'dispose');
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
});

