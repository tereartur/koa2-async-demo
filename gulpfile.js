/**
 * Created by chenchunyong on 4/19/16.
 */

const gulp = require('gulp'),
  nodemon = require('gulp-nodemon');


gulp.task('nodemon', ()=> {
  nodemon({
    restartable: 'rs',
    script: './index.js',
    ignore: [
      '.git',
      'node_modules/'
    ],
    verbose: true,
    watch: ['src'],
    env: {
      NODE_ENV: 'development'
    },
    ext: 'js json'
  });
});

gulp.task('default', ['nodemon']);
