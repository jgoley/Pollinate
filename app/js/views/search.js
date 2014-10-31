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
        this.$el.prepend();
        new Bees.Views.NameSearch({
            userType: this.userType,
            $container: this.$el
        })
        new Bees.Views.DistanceSearch({
            userType: this.userType,
            $container:  this.$el
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
        e.preventDefault();
        var data = this.$el.serializeObject();
        var query = new Parse.Query(Bees.Models.User);
        query.equalTo('userType', this.userType);
        query.equalTo('businessName', this.userType);
        var collection = query.collection();
        collection.fetch().then(function(){
            console.log("The search results",collection);
            new Bees.Views.Map({
                $container: $('.main-container'),
                collection: collection
            })
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
        var data = this.$el.serializeObject();
        var query = new Parse.Query(Bees.Models.User);
        query.equalTo('userType', this.userType);
        query.withinMiles('geoCenter', Parse.User.current().get('geoCenter'), data.distance);
        var collection = query.collection();
        collection.fetch().then(function(){
            console.log("The search results",collection);
            new Bees.Views.Map({
                $container: $('.main-container'),
                collection: collection
            })
        });

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