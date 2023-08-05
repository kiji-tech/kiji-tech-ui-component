## コンポーネントの追加
- ``scr/stories``配下に､React形式でコンポーネントを作成
- ``src/index.ts``にexportを作成
- ``@types/index.d.ts``下に､型定義を作成

---

## プロジェクトの起動
```bash
# localhost:6006で立ち上がる
$ npm run start
```

---
## ライブラリ更新手順
- build
    ```bash
    # index.cjs.jsを生成する
    $ npm run build
    ```

- gitの更新
- npmバージョンアップ
    ```bash
    # version => major | minor | patch | premajor | preminor | prepatch | prerelease | from-git or version番号(x.x.x)
    $ npm version [version]
    ```
- npm更新
  ```bash
  $ npm publish
    ```
- ライブラリを使用しているプロジェクトのpackage.jsonの修正
- ```$ npm i```の実施

