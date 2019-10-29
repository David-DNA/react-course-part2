const path = require('path');
// This file is using Node.js so we need to use the following syntax to require the 3rd party module we installed
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';
    // we must create a new instance of the MiniCssExtractPlugin for our styles
    // We pass the name of the file to the constructor here, this will be the css output file that
    // will eventually be served up
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

    return {

        entry: './src/app.js',
    
        output: {
            path: path.join(__dirname, 'public'),          
            filename: 'bundle.js'
        },
        
        module:{
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                // What we want to do here is : 
                // For all the files that match this test, instead of processing them and add result css files inline (in bundle.js), process them 
                // as separate files
                test: /\.s?css$/,

                // Here is the configuration
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                        publicPath: (resourcePath, context) => {
                                            return path.relative(path.dirname(resourcePath), context) + '/';
                                        }
                            }
                        },
                        // instead of defining the loader as a string, we can create an object that then allows us to define some more options
                        // Those two loaders support sourceMaps
                        //   'css-loader',
                        //   'sass-loader'
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        } ,

                        {
                            loader: 'sass-loader',
                            options : {
                                sourceMap: true
                            }
                        }
                    ]

            }]
        },

        plugins: [
            CSSExtract
        ],
    
        // We have source-map on production activated, and this helps linking up to the original files so that
        // chrome developer mode can actually show us where the code actually originates from and note "somewhere" in bundle.js
        // The .map files are used to do that and only recovered in that mode. This is why we have split that up.
        // Now this is only currenlty valid in production mode thanks to source-map.
        // cheap-module-eval-source-map on development currently does not do its job for css source maps
        // instead we can use another one which seem to currently work
        //   devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
    
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }

    };

};