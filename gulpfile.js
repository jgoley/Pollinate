'use strict';
// generated on 2014-10-23 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');


// Compile Handlebar templates
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

var mainBowerFiles = require('main-bower-files');

gulp.task('templates', function() {
  gulp.src('app/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Bees.templates',
      noRedeclare: true, // Avoid duplicate declarations
      processName: function(filePath) {
        return declare.processNameByPath(filePath.replace('app/templates/', ''));
      }
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('app/'));
});

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

gulp.task('scripts', function () {
    return gulp.src('app/js/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return gulp.src(['app/fonts/**.ttf'])
      .pipe(gulp.dest('dist/fonts'));
    // return gulp.src(mainBowerFiles())
    //     .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    //     .pipe($.flatten())
    //     .pipe(gulp.dest('dist/fonts'))
    //     .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    $.cache.clearAll();
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

var options = {};
gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(deploy(options));
});

gulp.task('build', ['html', 'templates', 'images', 'fonts', 'scripts'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'templates', 'styles'], function () {
  require('opn')('http://localhost:9000');
});

// inject bower components
// gulp.task('wiredep', function () {
//     var wiredep = require('wiredep').stream;

//     gulp.src('app/styles/*.scss')
//         .pipe(wiredep({
//             directory: 'app/bower_components'
//         }))
//         .pipe(gulp.dest('app/styles'));

//     gulp.src('app/*.html')
//         .pipe(wiredep({
//             directory: 'app/bower_components'
//         }))
//         .pipe(gulp.dest('app'));
// });

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/js/**/*.js',
        'app/images/**/*',
        'app/templates/**/*.hbs'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('app/templates/**/*.hbs', ['templates']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
