var path = require("path");

module.exports = {
  // エントリファイルの指定
  entry: "./src/index.js", //このファイルを視点にして依存モジュールのグラフを形成
  // ファイルの出力先を指定
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
  },
};
