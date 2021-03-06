var envConfig = require('./utils/env');

module.exports = function () {
    var root = '',
        src = root + 'src/',
        config = root + 'config/',
        app = src + 'app/',
        test = src + 'test/',
        tmp = src + 'tmp/',
        tmpApp = tmp + 'app/',
        assets = src + 'assets/',
        assetsPath = {
            styles: assets + 'styles/',
            images: assets + 'images/',
            fonts: assets + 'fonts/'
        },
        index = src + 'index.html',
        tsFiles = [
            app + '**/!(*.spec)+(.ts)'
        ],
        build = {
            path: 'build/',
            app: 'build/app/',
            fonts: 'build/fonts',
            assetPath: 'build/assets/',
            assets: {
                lib: {
                    js: 'lib.js',
                    css: 'lib.css'
                }
            }
        },
        report = {
            path: 'report/'
        };

    var systemJs = {
        builder: {
            normalize: true,
            minify: true,
            mangle: true,
            runtime: false,
            globalDefs: {
                DEBUG: false,
                ENV: 'production'
            }
        }
    };

    var gulpConfig = {
        root: root,
        config: config,
        src: src,
        app: app,
        test: test,
        tmp: tmp,
        tmpApp: tmpApp,
        assets: assets,
        index: index,
        build: build,
        report: report,
        assetsPath: assetsPath,
        tsFiles: tsFiles,
        systemJs: systemJs
    };

    if (envConfig.ENV === envConfig.ENVS.DEV)
    {
        var historyApiFallback = require('connect-history-api-fallback');
        var browserSync = {
            dev: {
                port: 5000,
                server: {
                    baseDir: './src/',
                    middleware: [historyApiFallback()],
                    routes: {
                        "/node_modules": "node_modules",
                        "/src": "src"
                    }
                },
                files: [
                    src + "index.html",
                    src + "systemjs.conf.js",
                    assetsPath.styles + "main.css",
                    tmpApp + "**/*.js",
                    app + "**/*.css",
                    app + "**/*.html"
                ]
            },
            prod: {
                port: 3001,
                server: {
                    baseDir: './' + build.path,
                    middleware: [historyApiFallback()]
                }
            }
        };

        gulpConfig.browserSync = browserSync;
    }

    return gulpConfig;
};
