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

## dev

1. 任意のブランチで機能開発
2. github workflow の publish-prerelease を kick
3. サービス側で prerelease の version を install して動作確認

```bash
# e.g.
$ npm install @calm1205/vue-lib@0.1.17-development-20251109085744.0
```

## publish

github workflow の publish を kick
