var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./quiz"
    });

    gulp.watch("quiz/*.scss", ['sass']);
    gulp.watch("quiz/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("quiz/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("quiz/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);