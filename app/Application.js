/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.Loader.setConfig({    enabled: true,
    paths: {
        'Ext.ux.chart': './ux/chart/'
    }
});
Ext.define('AmChart.Application', {
    extend: 'Ext.app.Application',
    
    name: 'AmChart',

    stores: [
       'AmChartStore',
        'AnimationStore'
    ],
    views:[
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
