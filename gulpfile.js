var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('server', function(){
    nodemon({
        script: 'server/server.js',
        ext: 'js'
    });
});

gulp.task('default', ['server']);