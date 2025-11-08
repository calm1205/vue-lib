## vue-lib

Vue component library

### setup

```bash
$ brew install direnv
$ cp .envrc.dev .envrc
$ direnv allow
```

### 公開までの手順

1. メタ情報を整える（初回のみ／更新時）

   - `package.json` を確認・編集
     - `"name"`: ユニーク、もしくは `@your-scope/vue-lib` のようなスコープ付き
     - `"version"`: セマンティックバージョニング（例: 0.1.0 → 0.2.0）
     - `"license"`: 例 `"MIT"`（ライセンスファイルの追加も推奨）
     - `"repository"`, `"homepage"`, `"bugs"`（任意だが推奨）

2. npm にログイン

```bash
npm login
```

3. ビルド

```bash
npm run build
```

4. 配布物の事前確認（公開内容・サイズ）

```bash
npm pack --dry-run
```

5. 公開

```bash
npm publish

# スコープ付き（初回は public 指定が必要）
npm publish --access public
```

6. 次回以降のリリース運用

```bash
npm version patch
npm version minor
npm version major

# その後公開
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

### 利用例（パッケージ使用側）

```ts
// ESM import（利用側プロジェクト）
import { HelloWorld } from "vue-lib"
```

### 注意点

- このライブラリは `vue@^3` を peer dependency として要求します（利用側で `vue` をインストールしてください）。
- `exports` により `dist/` 直読みは想定していません。`import 'calm1205/vue-lib'` で読み込んでください。
- 公開内容は `files: ["dist"]` で限定されています。必要なファイルが `dist` に含まれているか `npm pack --dry-run` で確認してください。
