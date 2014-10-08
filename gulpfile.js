var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('server', function(){
    nodemon({
        script: 'api/api.js',
        ext: 'js'
    });
});

gulp.task('default', ['server']);