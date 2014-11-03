Bees.Views.UserReviews = BaseView.extend({
    className: 'user-reviews',
    template: Bees.templates.reviews.index,
    subViews: [],
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
        // this.listenTo(this.collection, 'change', this.render); 
    },

    events:{
        'click .addReview': 'addReview'
    },

    render: function() {
        this.$el.append(this.template());
        var that = this;
        console.log('Search results rendering')
        _.invoke(this.subViews, 'dispose');
        this.subViews = [];
        console.log("Model of slected user", this.model);
        var collection = new Bees.Collections.UserReviews({
            user: this.model
        });
        collection.fetch().then(function() {
            // that.subViews.push(
            //     new Bees.Views.UserReviewsAdd({
            //         $container: that.$el,
            //         model: that.model
            //     }));
            that.subViews.push(
                new Bees.Views.UserReviewsList({
                    $container: that.$el,
                    model: that.model,
                    collection: collection
            }));
        });
    },

    addReview: function(){
        console.log("add Review");
        new Bees.Views.UserReviewsAdd({
            $container: this.$el,
            model: this.model
        })
    }
});


Bees.Views.UserReviewsAdd = BaseView.extend({

    tagName: 'form',
    className: 'review',

    events: {
        'submit': 'submitReview'
    },

    template: Bees.templates.reviews.add,
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.prepend(this.el);
        this.render();
    },

    render: function() {
        this.$el.append(this.template());
    },

    submitReview: function(e) {
        console.log("submitting");
        e.preventDefault();
        var reviewData = this.$el.serializeObject();
        var review = new Bees.Models.Review();
        review.set('reviewer', Parse.User.current());
        review.set('reviewee', this.model);
        review.save(reviewData);
    }
})

Bees.Views.UserReviewsList = BaseView.extend({

    tagName: 'ul',
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
    },

    render: function() {
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(review) {
        console.log("A review",review)
            new Bees.Views.UserReviewsListItem({
                model: review,
                $container: this.$el,
                // reviewer: reviewer
            // }, function(user, error){
            //     console.log(error);
            // })
        });
    }

})

Bees.Views.UserReviewsListItem = BaseView.extend({

    tagName: 'li',
    template: Bees.templates.reviews.listItem,
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
    },

    render: function() {
        var that = this;
        var query = new Parse.Query(Bees.Models.User);
        query.get(this.model.get('reviewer').id).then(function(reviewer){
            that.$el.append(that.template({
            review: that.model.toJSON(),
            reviewer: reviewer.toJSON()
        }));

        })
    },


})