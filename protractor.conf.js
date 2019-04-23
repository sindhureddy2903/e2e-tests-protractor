exports.config = {
    allScriptsTimeout: 60000,
    specs:[
        'e2e/UI/*.spec.ts'
    ],
    capabilities:
        {
            'browserName': 'chrome',
             chromeOptions: {
                 args: ["--headless", "--disable-gpu", "--window-size=800x600"]
             }
        },
   // seleniumAddress: 'http://localhost:4444/wd/hub/',
    directConnect: true,
    baseUrl: 'http://www.way2automation.com/protractor-angularjs-practice-website.html',
    framework: 'jasmine2',
    rootElement: 'body',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000,
        showColors:             true,
        print: function() {
        }
    },
    onPrepare: function() {
        require('ts-node').register({
            project: 'tsconfig.json'
        });

        var jasmineReporters = require( 'jasmine-reporters' );
        jasmine.getEnv().addReporter( new jasmineReporters.JUnitXmlReporter( {
            consolidateAll: true,
            savePath:       'testresults',
            filePrefix:     'xmloutput'
        } ) );

        var SpecReporter = require( 'jasmine-spec-reporter' ).SpecReporter;
        jasmine.getEnv().addReporter( new SpecReporter( {
            displayStacktrace:      true,
            displayFailuresSummary: true,
            displayPendingSummary:  true,
            displaySuccessfulSpec:  true,
            displayFailedSpec:      true,
            displayPendingSpec:     true,
            displaySpecDuration:    false,
            displaySuiteNumber:     false,
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            customProcessors: []
        } ) );

        var HttpBackend = require( 'http-backend-proxy' );
        global.httpBackend = new HttpBackend( browser );
        return;
    }
};
