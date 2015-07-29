import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../../webpack.config';

const hotServer = new WebpackDevServer(webpack(config), {
  hot: true,

  historyApiFallback: true,

  publicPath: config.output.publicPath,

  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default hotServer;
