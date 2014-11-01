
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
