const gulp = require('gulp');
const ultil = require('gulp-util')
// const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default', () => {
    if (ultil.env.production) {
        // sequence('deps', 'app');
        gulp.start('deps', 'app');
    } else {
        // sequence('deps', 'app', 'server');
        gulp.start('deps', 'app', 'server');
    }
})

//Sequence not required anymore since the new version of gulp that will build in order like sequence do