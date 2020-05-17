module.exports = {
  entry:'./src/main.js', //arq principal
  output: { //arquivo de saida
    path:__dirname + '/public',
    filename:'bundle.js',
  },
  devServer: {
    contentBase:__dirname + '/public',
  },
  module:{
    rules: [  //regras para os arquivos enviados ao bundle
      {
        test: /\.js$/, //tipo do arquivo
        exclude:/node_modules/, // n executa os .js do node modules
        use:{
          loader: 'babel-loader',
        }
      }
    ],
  },
}