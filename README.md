## vue-lib

Vue component library

### setup

```bash
$ brew install direnv
$ cp .envrc.dev .envrc
$ direnv allow
```

## publish

```bash
npm pack --dry-run
```

```bash
npm version patch
npm version minor
npm version major
```

```bash
npm publish
```

（任意）Git タグ/リリースノートを運用する場合は、`npm version` で作成されたタグを push してください。

### ローカルでの動作確認（任意）

公開前に別プロジェクトから tarball をインストールして動作確認できます。

```bash
# このリポジトリで
npm pack  # 例: vue-lib-0.1.0.tgz が生成される

# 別プロジェクトで
npm i ../vue-lib/vue-lib-0.1.0.tgz
```
