Bees.Views.BidsIndex = BaseView.extend({
    className: 'bids-container',
    template: Bees.templates.bids.index,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        this.$el.append(this.template());
        new Bees.Views.BidsList({
            $container: this.$el,
            collection: this.collection
        })
    }

});


Bees.Views.BidsList = BaseView.extend({
    tagName: 'ul',
    className: 'bids',
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(bid){
        new Bees.Views.BidsListItem({
            model: bid,
            $container: this.$el
        })
    }

});


Bees.Views.BidsListItem = BaseView.extend({
    tagName: 'li',
    className: 'bid',
    template: Bees.templates.bids.listItem,
    events:{
        'click .revoke': 'revoke'
    },

    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.append(this.el);
        var that = this;
        new Parse.Query("Hive_Group").get(this.model.get('hiveGroup').id)
            .then(function(hiveGroup){
                console.log("Hive Group",hiveGroup)
                that.hiveGroup = hiveGroup;
                that.render();
            })
        this.listenTo(this.model, 'destroy', this.remove)
    },
    render: function(){
        var that = this;
        new Parse.Query(Bees.Models.User).get(this.model.get('beekeeper').id)
            .then(function(beekeeper){
                that.model.set('formatedDate',moment(that.model.createdAt).format('MMMM Do YYYY, h:mm:ss a'));
                that.$el.append(that.template({bid: that.model.toJSON(), beekeeper: beekeeper.toJSON(), hiveGroup: that.hiveGroup.toJSON() }))
            })
    },

    revoke: function(){
        console.log(this.hiveGroup);
        this.hiveGroup.unset('bid');
        this.hiveGroup.save();
        // this.model.destroy();
    }

});

