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
        colors = ['red', 'green', 'blue', 'orange'];
        var that = this;
        var points;
        var curUser = Parse.User.current();
        var map = new GMaps({
            div: '#map',
            lat: curUser.get('geoCenter').latitude,
            lng: curUser.get('geoCenter').longitude,
        });
        var i = 0;

        // Add marker for current user
        map.addMarker({
            lat: curUser.get('geoCenter').latitude,
            lng: curUser.get('geoCenter').longitude,
            icon: 'https://maps.google.com/mapfiles/kml/paddle/U.png',
        });

        if (curUser.get('userType') == 'beekeeper') {
            map.drawCircle({
                lat: curUser.get('geoCenter').latitude,
                lng: curUser.get('geoCenter').longitude,
                radius: this.searchRadius / 0.00062137, // convert miles to meters
                fillColor: 'black',
                fillOpacity: .3,
                strokeColor: '#999',
                strokeWeight: 1,
                strokeOpacity: .8,
                clickable: true

            });
        }

        // Add markers for the collection of users
        this.collection.each(function(user) {
            if (user.get('userType') === 'beekeeper') {
                var icon = 'https://maps.google.com/mapfiles/kml/paddle/B.png';
            } else {
                var icon = 'https://maps.google.com/mapfiles/kml/paddle/F.png';
            }
            map.addMarker({
                lat: user.get('geoCenter').latitude,
                lng: user.get('geoCenter').longitude,
                title: user.get('firstName'),
                icon: icon,
                click: function(e) {
                    BeesApp.navigate('user/' + user.id, {
                        trigger: true
                    });
                    that.dispose();
                },
                infoWindow: {
                    content: user.get('userType'),
                }
            });
            if (user.get('userType') == 'beekeeper') {
                map.drawCircle({
                    lat: user.get('geoCenter').latitude,
                    lng: user.get('geoCenter').longitude,
                    radius: user.get('geoRangeRadius') / 0.00062137, // convert miles to meters
                    fillColor: colors[i],
                    fillOpacity: .1,
                    strokeColor: '#999',
                    strokeWeight: 1,
                    strokeOpacity: .8,
                    clickable: true
                })
            }
            i++;
        })
        map.fitZoom();
    },

});