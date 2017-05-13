var gulp = require('gulp');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('app/app.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'))
});

gulp.task('default', [ 'css' ]);
