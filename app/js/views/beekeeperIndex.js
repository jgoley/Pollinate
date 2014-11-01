Bees.Views.BeekeeperIndex = BaseView.extend({
    className: 'beekeeper',
    template: Bees.templates.beekeeperIndex,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
        console.log('BeekeeperIndex');
    },
    render: function(){
        var that = this;
        this.$el.append(this.template({user: Parse.User.current().toJSON()}));
        var query = new Parse.Query(Bees.Models.HiveGroup).equalTo('user', Parse.User.current());
        var collection = query.collection();
        collection.fetch().then(function(hiveGroups){
            console.log("Hive groups",hiveGroups);
            new Bees.Views.HiveGroupList({
                $container: $('.hive-groups'),
                collection: collection
            })
        })
    }

});


