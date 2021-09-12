# climbookmark

## Firebase setting
アプリ作成

## Docker setting
edit Docker file

# Firebaseアプリ用
Firebaseのサイト(アプリ→setting→SDKの構成)から取得する  
```
ENV FIREBASE_apiKey=
ENV FIREBASE_authDomain=
ENV FIREBASE_databaseURL=https://projectId.firebaseio.com
#ENV FIREBASE_projectId=
ENV FIREBASE_storageBucket=
ENV FIREBASE_messagingSenderId=
ENV FIREBASE_appId=
```

Firebaseにも上記の環境変数を設定する



## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


