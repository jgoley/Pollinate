Bees.Views.User = Parse.View.extend({
    className: 'user',
    template: Bees.templates.user.index,
    
    initialize: function(opts){
        options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        var that = this;
        console.log(this.model);
        if(this.model.get('userType') === 'beekeeper'){
            var query = new Parse.Query(Bees.Models.HiveGroup).equalTo('user', this.model);
            var collection = query.collection();
            collection.fetch().then(function(hiveGroups){
                console.log("Hive groups",hiveGroups);
                that.$el.append(that.template({user: that.model.toJSON(), hiveGroups: collection}));
                new Bees.Views.HiveGroupList({
                    $container: $('.user'),
                    collection: collection,
                    model: that.model,
                    page: 'user'
                })
            })
        }
        else
            this.$el.append(this.template({user: this.model.toJSON()}));
        }

});


