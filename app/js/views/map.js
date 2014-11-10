(function() {
    'use strict';

    Bees.Views.Map = BaseView.extend({
        id: "map",
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                radius: opts.radius
            });
            this.searchRadius = options.radius;
            options.$container.append(this.el);
            this.render();
        },

        render: function() {
            var colors = ['red', 'green', 'blue', 'orange'];
            var that = this;
            var points;
            var curUser = Parse.User.current();
            this.map = new GMaps({
                div: '#map',
                lat: curUser.get('geoCenter').latitude,
                lng: curUser.get('geoCenter').longitude,
            });
            var i = 0;

            // Add marker for current user
            this.map.addMarker({
                lat: curUser.get('geoCenter').latitude,
                lng: curUser.get('geoCenter').longitude,
                icon: 'https://maps.google.com/mapfiles/kml/paddle/U.png',
            });

            if (curUser.get('userType') == 'beekeeper') {
                this.drawCircle(curUser, '#000', this.searchRadius);
            }

            // Add markers for the collection of users
            this.collection.each(function(user) {
                if (user.get('userType') === 'beekeeper') {
                    var icon = 'https://maps.google.com/mapfiles/kml/paddle/B.png';
                } else {
                    var icon = 'https://maps.google.com/mapfiles/kml/paddle/F.png';
                }
                that.drawCircle(user, '#000', user.get('geoRangeRadius'));
                that.map.addMarker({
                    lat: user.get('geoCenter').latitude,
                    lng: user.get('geoCenter').longitude,
                    title: user.get('businessName'),
                    icon: icon,
                    click: function(e) {
                        // BeesApp.navigate('user/' + user.id, {
                        //     trigger: true
                        // });
                        // that.dispose();
                    },
                    infoWindow: {
                        content: '<h1>'+user.get('businessName')+'</h1><p><a href="#user/'+user.id+'">Go to profile</a></p>',
                    }
                });
            })
            this.map.fitZoom();
        },
        drawCircle: function(user, color, radius) {
            return this.map.drawCircle({
                lat: user.get('geoCenter').latitude,
                lng: user.get('geoCenter').longitude,
                radius: radius / 0.00062137, // convert miles to meters
                fillColor: color,
                fillOpacity: .1,
                strokeColor: '#FFF',
                strokeWeight: 1,
                strokeOpacity: .9,
                clickable: true
            });
        }

    });
})();