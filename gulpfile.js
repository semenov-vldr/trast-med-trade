const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');

gulp.task('build', gulp.series(
  'clean:dev',
  gulp.parallel('pug:dev', 'images:dev', 'fonts:dev', 'files:dev', "style:libs:dev", 'sass:dev', 'scripts:libs:dev', 'scripts:dev'),
));

gulp.task("default",
  gulp.series(gulp.parallel('browser-sync:dev','watch:dev')));
