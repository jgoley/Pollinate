Bees.Views.HiveGroupList = BaseView.extend({
    tagName: 'ul',
    className: 'hive-groups',


    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            page: opts.page
        });
        options.$container.html(this.el);
        this.page = options.page;
        if(options.page === 'user'){
            this.template = Bees.templates.hiveGroups.listUser;
        }
        else{
            this.template = Bees.templates.hiveGroups.list;
            this.events = {'click .addGroup': 'addGroup'};   
        }      
        this.render();
        // this.collection.on('change', _.bind(this.render, this))
    },

    render: function() {
        //this.$el.html(this.template({user: this.model.toJSON()}));
        this.collection.each(_.bind(this.renderChildren, this));
    },

    renderChildren: function(hiveGroup) {
        new Bees.Views.HiveGroupListItem({
            $container: this.$el,
            model: hiveGroup,
            page: this.page,
            beekeeper: this.model
        });
    },

    addGroup: function(){
        BeesApp.navigate('hivegroup/add', {trigger: true});
        this.remove();
    }
});

Bees.Views.HiveGroupListItem = BaseView.extend({
    tagName: 'li',
    className: 'hive-group',


    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            page: opts.page,
            beekeeper: opts.beekeeper
        });
        options.$container.append(this.el);
        this.beekeeper = options.beekeeper;
        if(options.page === 'user'){
            this.template = Bees.templates.hiveGroups.UserListItem;
            this.events =  {
                'click .bid': 'bid'
            }
        }
        else {
            this.template = Bees.templates.hiveGroups.listItem;
            this.events =  {
                'click .delete': 'deleteGroup',
                'click .edit': 'editGroup',
                'click .view': 'viewGroup',
            };
        }
        this.render();
        this.listenTo(this.model, 'change', this.render)
    },

    render: function() {
        this.$el.html(this.template({
            group: this.model.toJSON()
        }))
    },

    deleteGroup: function() {
        var user = Parse.User.current();
        user.remove('hiveGroups', this.model);
        user.save();
        this.model.destroy();
        this.undelegateEvents();
        this.remove();
    },

    editGroup: function() {
        BeesApp.navigate('hivegroup/'+this.model.id+'/edit', {
            trigger: true
        });

    },

    viewGroup: function() {
        BeesApp.navigate('hivegroup/'+this.model.id+'/view', {
            trigger: true
        });
    },

    bid: function(){
        var farmer = Parse.User.current();
        console.log("bidding", this.model);
        var newBid = new Bees.Models.Bid();
        newBid.set('hiveGroup', this.model);
        newBid.set('beekeeper', this.beekeeper);
        newBid.set('farmer', farmer);
        newBid.set('accepted', false);
        var that = this;
        newBid.save().then(function(){
            that.model.set('bid', newBid);
            that.model.save();
            var message = "Hi, "+farmer.get('username')+" just put a bid on "+that.model.get('Name')+"!"
            sendMail(farmer.get('email'), that.beekeeper.get('email'), 'New bid on a hive group', message)
        }, function(bid, err){
            console.log(err);
        });
    }
});