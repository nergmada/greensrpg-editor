const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const mode = env && ['production', 'development'].includes(env.MODE) ? env.MODE : 'development';   
    const dev = mode === 'development';
    return [{
        name: 'green-rpg-client',
        mode,
        target: 'node-webkit',
        entry: './src/index.js',
        node: {
            global: true,
        },
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'index.js'
        },
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            compress: true,
            port: 9000,
            liveReload: true
        },
        resolve: {
            alias: {
                //Svelte
                svelte: path.resolve('node_modules', 'svelte'),
                //Src links
                components: path.resolve('src', 'components'),
                styles: path.resolve('src', 'styles'),
                lib: path.resolve('src', 'lib'),
                data: path.resolve('src', 'data'),
                assets: path.resolve('src', 'assets')
            },
            extensions: ['.mjs', '.js', '.svelte'],
            mainFields: ['svelte', 'browser', 'module', 'main']
        },
        module: {
            rules: [
                {
                    test: /\.(html|svelte)$/,
                    //exclude: /node_modules/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            css: true,
                            hotReload: dev
                        }
                    }
                },
                {
                    // make all files ending in .json5 use the `json5-loader`
                    test: /\.json5$/,
                    use: 'json5-loader',
                    type: 'javascript/auto'
                },
                {
                    test: /\.css$/,
                    use: [
                        dev ? 'style-loader' : ExtractCssChunks.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            }
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        dev ? 'style-loader' : ExtractCssChunks.loader,
                        // Translates CSS into CommonJS
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ['node_modules', 'src']
                                }
                            }

                        }
                    ],
                },
                {
                    test: /\.(wav|mp3)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.pegjs$/,
                    loader: 'pegjs-loader'
                },
            ]
        },
        plugins: [
            new ExtractCssChunks({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
            }),
            new htmlWebpackPlugin({
                title: "Green's RPG Development System",
                favicon: 'src/assets/favicon.ico'
            }),
            new CopyPlugin({patterns: [
                { 
                    from: 'all_abilities/**/*',
                    context: 'src'
                }
            ]}),
        ],
    }];
}