var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var watchify = require("watchify");
var tsify = require("tsify");
var fancy_log = require("fancy-log");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");

var paths = {
    pages: ["src/*.html"],
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

var watchedBrowserify = watchify(
    browserify({
        basedir: ".",
        debug: true,
        entries: ["src/index.ts"],
        cache: {},
        packageCache: {},
    }).plugin(tsify)
        .transform("babelify", {
            presets: ["es2015"],
            extensions: [".ts"],
        })
);

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist"));
}

gulp.task(
    "default",
    gulp.series(gulp.parallel("copy-html"),
    bundle)
);

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);