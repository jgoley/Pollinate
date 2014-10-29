/*
    ___        ________   ________     
   |\  \      |\   ____\ |\   __  \    
   \ \  \     \ \  \___| \ \  \|\  \   
 __ \ \  \     \ \  \  ___\ \  \\\  \  
|\  \\_\  \  ___\ \  \|\  \\ \  \\\  \ 
\ \________\|\__\\ \_______\\ \_______\
 \|________|\|__| \|_______| \|_______|

 */

/* globals Pix, $, Parse, _ , PixApp */
/* jshint quotmark: false */

(function() {

    'use strict';

    window.Bees = {};
    Bees.Views = {};
    Bees.Models = {};
    Bees.Collections = {};

    Bees.Views.ApplicationView = Parse.View.extend({

        template: Handlebars.compile($('#application').html()),
        initialize: function(opts){
            var options = _.defaults({}, opts,{
                $container: opts.$container
            });
            options.$container.html(this.el);
            this.render();
        },
        render: function(){
            this.$el.html(this.template())
        }

    });

    Bees.Router = Parse.Router.extend({

        routes: {
            '': 'index',
            'login': 'login',
            'newuser': 'newuser',

            'find': 'find',

            '/:user_id': 'user'
            'reviews/:user_id': 'reviews',

            'bids': 'bidsIndex',
            'bids/:bid_id', 'showBid'
        },

        initialize: function() {
            this.currentUser = Parse.User.current();
            new Bees.Views.ApplicationView({
                $container: $('body')
            });
        },

        
    });

})();


$(function() {
    Parse.initialize("NXnx3AGGgXuHTuhH9b9CH8FtnpZ1rw2Nb5NZ2tEc", "egrsd4QPqFZas2YDxzlVvXg36LErxeVSumMv8kRx");
    window.BeesApp = new Bees.Router();
    Parse.history.start();
});