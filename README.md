## vue-lib

Vue component library

## to user

```bash
$ npm install @calm1205/vue-lib
```

- peerDependency
  - vue
  - tailwindcss
  - ark-ui
  - pinia

## to developer

### setup

```bash
$ brew install direnv
$ cp .envrc.dev .envrc
$ cp dev/App.template.vue dev/App.vue
$ cp dev/main.template.ts dev/main.ts
$ direnv allow
```

### development

1. 任意のブランチで/packages 配下で機能開発
2. 必要であれば dev/App.vue 等で動作確認
3. remote branch へ push 後、github workflow の publish-prerelease を kick
   a. publish-prerelease を kick すると<version>-<branch-name>-<timestamp>というプレリリースができる。
4. サービス側で prerelease の version を install して動作確認

```bash
# e.g.
$ npm install @calm1205/vue-lib@0.1.17-development-20251109085744.0
```

### publish

github workflow の publish を kick

以下が実施されます。

1. npm package のバージョン更新
2. npm package を Github Packages へリリース
3. Github 上の release を作成
