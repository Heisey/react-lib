
export * as Buttons from './Buttons'


// # name: Releases
// # on:
// #   push:
// #     branches:
// #       - main

// # jobs:
// #   changelog:
// #     runs-on: ubuntu-latest
// #     steps:
// #       - uses: actions/checkout@v2
// #       - name: Conventional Changelog Action
// #         id: changelog
// #         uses: TriPSs/conventional-changelog-action@v3.7.1
// #         with:
// #           github-token: ${{ secrets.GITHUB }}
// #           version-file: './package.json,./package-lock.json'
// #       - name: create release
// #         uses: actions/create-release@v1
// #         if: ${{ steps.changelog.outputs.skipped == 'false' }}
// #         env:
// #           GITHUB_TOKEN: ${{ secrets.GITHUB }}
// #         with:
// #           tag_name: ${{ steps.changelog.outputs.tag }}
// #           release_name: ${{ steps.changelog.outputs.tag }}
// #           body: ${{ steps.changelog.outputs.clean_changelog }}



// # name: Publish to NPM
// # on:
// #   release:
// #     types: [created]
// # jobs:
// #   build:
// #     runs-on: ubuntu-latest
// #     steps:
// #       - name: Checkout
// #         uses: actions/checkout@v3
// #       - name: Setup Node
// #         uses: actions/setup-node@v3
// #         with:
// #           node-version: '16'
// #           registry-url: 'https://registry.npmjs.org'
// #       - name: Install dependencies and build 🔧
// #         run: npm ci
// #       - name: Publish package on NPM 📦
// #         run: npm publish
// #         env:
// #           NODE_AUTH_TOKEN: ${{ secrets.NPM }}