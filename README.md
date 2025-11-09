## vue-lib

Vue component library

### setup

```bash
$ brew install direnv
$ cp .envrc.dev .envrc
$ direnv allow
```

## dir

- dev: 開発時の動作確認用ディレクトリ
- packages: npm package の配信対象

## publish

```bash
npm version patch
npm version minor
npm version major
```

development -> main へ merge で github action で publish

### ローカルでの動作確認（任意）

公開前に別プロジェクトから tarball をインストールして動作確認できます。

```bash
# このリポジトリで
npm pack  # 例: vue-lib-0.1.0.tgz が生成される

# 別プロジェクトで
npm i ../vue-lib/vue-lib-0.1.0.tgz
```
