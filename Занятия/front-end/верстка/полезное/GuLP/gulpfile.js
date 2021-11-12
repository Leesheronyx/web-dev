const gulp = require('gulp'); // Подключаем Gulp
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

// Таск для компиляции sass в CSS
gulp.task('sass', function (callback) {
	return gulp.src('./src/sass/**/*.+(scss|sass)')
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Styles',
					sound: true,
					message: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./src/css/'))
	callback();
});

// Слежение за HTML и CSS и обновление браузера
gulp.task('watch', function () {
	// Слежение за HTML и CSS и обновление браузера
	watch(['./src/*.html', './src/css/**/*.css'], gulp.parallel(browserSync.reload));

	// Слежение за sass и компиляция в CSS - обычный способ
	// watch('./src/sass/**/*.sass', gulp.parallel('sass'));

	// Запуск слежения и компиляции sass с задержкой, для жесктих дисков HDD
	watch('./src/sass/**/*.+(scss|sass)', function () {
		setTimeout(gulp.parallel('sass'), 500)
	})

});

// Задача для старта сервера из папки src
gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: "./src/"
		}
	})
});

// Дефолтный таск (задача по умолчанию)
// Запускаем одновременно задачи server и watch
gulp.task('default', gulp.parallel('server', 'watch', 'sass'));
