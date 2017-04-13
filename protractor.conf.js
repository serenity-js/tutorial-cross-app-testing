exports.config = {

    baseUrl: 'https://google.com',

    allScriptsTimeout: 110000,

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    mochaOpts: {
        ui:       'bdd',                   // use the describe/it syntax (default: 'bdd').
        compiler: 'ts:ts-node/register',   // interpret step definitions as TypeScript,
        reporter: 'spec'
    },

    specs: ['spec/**/*.spec.ts'],

    capabilities: {
        browserName: 'chrome'
    },

    restartBrowserBetweenTests: true,
};
