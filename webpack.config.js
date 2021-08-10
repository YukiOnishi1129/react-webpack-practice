var path = require("path");

module.exports = {
  // エントリファイルの指定
  entry: "./src/index.js", //このファイルを視点にして依存モジュールのグラフを形成
  // ファイルの出力先を指定
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      // test: 処理対象となるファイルを正規表現で指定 (.jsのファイルを全てbabel-loaderで処理する)
      // exclude: 処理の対象から除外するファイル (node_modulesを除外)
      { test: /\.js$/, exclude: /(node_modules)/, loader: "babel-loader" },
      // cssをバンドルする
      // style-loader: CSSをHTMLのheadタグ内にインラインスタイルを出力するloader
      // cssをJSに変換するloader
      // https://chaika.hatenablog.com/entry/2020/10/22/083000
      // https://ics.media/entry/17376/
      {
        test: /\.css$/i,
        //   処理の順番は後ろから
        //   css-loaderでcssをjsに変換 → style-loaderでjsとして読み込んだcssをhtmlのインラインスタイルとして導入
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
