import styles from "rollup-plugin-styles";
import babel from "@rollup/plugin-babel";
import sourcemaps from "rollup-plugin-sourcemaps";
import del from "rollup-plugin-delete";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss"; // rollup-plugin-scssをインポート

const path = require("path");
const autoprefixer = require("autoprefixer");

const conf = {
  // input: 'src/index.tsx',
  input: "src/index.ts",
  output: {
    file: `dist/index.cjs.js`,
    format: "cjs",
    exports: "auto",
  },
  // this externelizes react to prevent rollup from compiling it
  external: ["react", /@babel\/runtime/],
  plugins: [
    scss({
      // Defaults to output.css, Rollup may add a hash to this!
      name: "index.css",
      // Literal asset filename, bypasses the automated filenaming transformations
      fileName: "index.css",
      // output: 'dist/index.css',
      // outputStyle: 'compressed', // 出力するCSSのスタイルを圧縮
      // failOnError: true, // エラーが発生した場合、ビルドを中止
    }),
    typescript(),
    // these are babel comfigurations
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
      // configFile: path.resolve(__dirname, ".babelrc"),
    }),
    // this adds sourcemaps
    sourcemaps(),
    del({ targets: "dist/*" }),
    // this adds support for styles
    styles({
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
  ],
};

export default conf;
