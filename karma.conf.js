
// Karma configuration
// Generated on Sun Jun 18 2017 15:58:25 GMT+0900 (JST)

// if intellij karma runner doesn'T run the latest code, apply bellow.
// https://youtrack.jetbrains.com/issue/WEB-21308#comment=27-1812539


module.exports = function(config) {

  config.set({


    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'karma-typescript', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.ts',
      'test/**/*.ts',
      'test/fixtures/**/*.html'
    ],

    // list of files to exclude
    exclude: [
      'src/**/*.d.ts',
      'test/**/*.d.ts',
    ],

    //plugins: ['karma-remap-istanbul', 'karma-coverage', 'karma-html2js-preprocessor', 'karma-typescript', 'karma-sourcemap-loader'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	"test/**/*.ts":["karma-typescript"],
    	"src/**/*.ts":["karma-typescript"],
      "test/**/*.html":["html2js"]
    },

    karmaTypescriptConfig:{
      tsconfig: "./tsconfig.json"
    },

    jsonFixturesPreprocessor: {
        variableName: '__html__'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan', 'notification', 'karma-typescript'],

	osxReporter: {
      activate:"com.googlecode.iterm2"
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeCanaryHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
