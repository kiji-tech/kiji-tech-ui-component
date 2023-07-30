## プロジェクトの起動
```bash
# localhost:6006で立ち上がる
$ npm run storybook

```


## ライブラリ更新手順
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

