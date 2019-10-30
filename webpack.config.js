const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

    return {

        entry: './src/app.js',
    
        output: {
            // We need to ask webpack to put all the build assets in the /public/dist directory
            path: path.join(__dirname, 'public', 'dist'),          
            filename: 'bundle.js'
        },
        
        module:{
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {

                test: /\.s?css$/,

                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                        publicPath: (resourcePath, context) => {
                                            return path.relative(path.dirname(resourcePath), context) + '/';
                                        }
                            }
                        },

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
    
        devtool: isProduction ? 'source-map' : 'inline-source-map',
    
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            // Ask the devserve to serve from /public/dist
            publicPath: '/dist/'
        }

    };

};