const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {

   plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
         'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
      }),
      new Dotenv({
         path: './.env', // Path to .env file (this is the default)
         safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
      }),
   ]
   
}




