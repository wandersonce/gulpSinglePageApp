const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

gulp.task('changeMonitor', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('server', ['changeMonitor'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }))

})


//npm build will just refresh without start server
//npm start will start the server