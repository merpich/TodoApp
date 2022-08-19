/**
 * Requeire plugins
 */
const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require("gulp-rename")
const groupCssMedia = require('gulp-group-css-media-queries')


/**
 * Projcet paths
 */
const paths = {
	source: './',
	html: './index.html',
	css: './assets/css/',
	scss: './assets/scss/**/*.scss'
}


/**
 * Convert sass to css
 */
const convertSass = () => {
	return gulp.src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(groupCssMedia())
		.pipe(csso())
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.css))
		.pipe(browserSync.reload({ stream: true }))
}

const watchHtml = () => {
	return gulp.src(paths.html)
		.pipe(browserSync.reload({ stream: true }))
}

/**
 * Watch changes
 */
 const watch = () => {
	gulp.watch(paths.scss, convertSass)
	gulp.watch(paths.html, watchHtml)
}

/**
 * Serve
 */
const serve = () => {
	browserSync.init({
		open: true,
		server: paths.source
	})
}

exports.default = gulp.series(
	gulp.parallel(convertSass, watchHtml),
	gulp.parallel(serve, watch)
)
