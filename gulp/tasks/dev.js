'use strict';

var browserSync = require('browser-sync');
var config = require('../config').dev;
var gulp = require('gulp');
var harp = require('harp');
var reload = browserSync.reload;

// Start the development server
gulp.task('dev', function () {

    return harp.server(config.harp.dir, config.harp.options, function () {

        browserSync(config.browserSync);

        gulp.watch(config.watch.styles, function () {
            reload('main.css', {
                stream: true
            });
        });

        gulp.watch(config.watch.content, function () {
            reload();
        });

    });

});
