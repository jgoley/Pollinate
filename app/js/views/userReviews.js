Bees.Views.UserReviews = BaseView.extend({
    className: 'user-reviews',
    subViews: [],
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
    },

    render: function() {
        _.invoke(this.subViews, 'dispose');
        var that = this;
        var collection = new Bees.Collections.UserReviews({
            user: this.model
        });

        collection.fetch().then(function() {
            var already = collection.find(function(model){
                return model.get('reviewer').id === Parse.User.current().id;
            });
            if(!already){
                that.subViews.push(
                    new Bees.Views.UserReviewsNew({
                        collection: collection,
                        model: that.model,
                        $container: that.$el,
                    })
                );
            }
            if(collection.length > 0){
                that.subViews.push(
                    new Bees.Views.UserReviewsList({
                        $container: that.$el,
                        model: that.model,
                        collection: collection
                    })
                );  
            } else {
                that.$el.append('<p>No user reviews</p>');
            }
        });
    },
});


Bees.Views.UserReviewsList = BaseView.extend({
    tagName: 'ul',
    className: 'review-list',
    subViews: [],
    initialize: function(opts) {
 
        _.invoke(this.subViews, 'dispose');
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
        this.listenTo(this.collection, 'change', this.render); 
    },
    render: function() {
        _.invoke(this.subViews, 'dispose');
        this.$el.empty();
        this.collection.each(_.bind(this.renderChildren, this));
    },
    renderChildren: function(review) {
        this.subViews.push(
            new Bees.Views.UserReviewsListItem({
                model: review,
                $container: this.$el,
            })
        );
    },
})

Bees.Views.UserReviewsListItem = BaseView.extend({

    tagName: 'li',
    className: 'review-list-item',
    template: Bees.templates.reviews.listItem,
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.prepend(this.el);
        this.render();
    },
    render: function() {
        var that = this;
        var query = new Parse.Query(Bees.Models.User);
        query.get(this.model.get('reviewer').id).then(function(reviewer) {
            that.$el.append(that.template({
                review: that.model.toJSON(),
                reviewer: reviewer.toJSON()
            }));
        })
    },
});

Bees.Views.UserReviewsNew = BaseView.extend({
    className: 'new-review',
    subViews: [],
    events: {
        'click .addReview': 'addReview'
    },
    template: Bees.templates.reviews.new,
    initialize: function(opts) {
        _.invoke(this.subViews, 'dispose');
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
    },

    render: function() {
        this.$el.append(this.template());
    },

    addReview: function() {
        this.subViews.push(
            new Bees.Views.UserReviewsAdd({
                $container: this.$el,
                model: this.model,
                collection: this.collection
            })
        );
    }
});

Bees.Views.UserReviewsAdd = BaseView.extend({

    tagName: 'form',
    className: 'review',
    events: {
        'submit': 'submitReview',
        'click .cancel-review': 'cancel'
    },

    template: Bees.templates.reviews.add,
    initialize: function(opts) {
        _.invoke(this.subViews, 'dispose');
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.html(this.el);
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
        this.collection.add(review);
        this.dispose();
        //sendMail({});
    },
    cancel: function(){
        this.dispose();
        new Bees.Views.UserReviewsNew({
            collection: this.collection,
            model: this.model,
            $container: $('.user-reviews')
        })
    }
})