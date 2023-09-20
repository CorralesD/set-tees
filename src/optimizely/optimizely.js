import * as ReactSDKClient from '@optimizely/react-sdk';
// import * as optimizelyReactSDK from '@optimizely/react-sdk';

let optimizely = ReactSDKClient;

export const getOrInitializeOptimizely = () => {

    optimizely = ReactSDKClient.createInstance({
        datafile: window.optimizelyDatafile,
      })

        // // Instantiate an Optimizely client
        // optimizely = optimizely.createInstance({
        //     sdkKey: 'SDK_KEY',
        //     datafileOptions: {
        //         autoUpdate: true,
        //         updateInterval: 300 * 1000,
        //         urlTemplate: 'https://cdn.optimizely.com/datafiles/%s.json',
        //       },
        // })

console.log(optimizely);
    return optimizely;
};
