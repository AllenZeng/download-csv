import gulp from 'gulp';
import SSI from 'browsersync-ssi';
import del from 'del';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';

const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: ['./dist'],
      middleware: SSI({
        baseDir: './dist',
        ext: '.shtml',
        version: '2.10.0',
        port: 3000,
      }),
    },
  });

  gulp.watch('lib/*.js', ['js', browserSync.reload]);
});

gulp.task('js', () => gulp.src('lib/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream()));

gulp.task('clean', () => del(['dist']));

gulp.task('build', ['clean'], () => gulp.src('lib/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/')));

gulp.task('default', ['clean', 'js', 'serve']);
