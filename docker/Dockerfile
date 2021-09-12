# ベースイメージを指定
FROM node

# node.js の環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development

# Firebaseアプリ用
# Firebaseのサイトから取得する
ENV firebase.api_key=AIzaSyD1rV5GJDnAprRc_3X-SMf49gDTFa-OlF4
ENV firebase.auth_domain=climbookmark.firebaseapp.com
ENV firebase.database_url=https://climbookmark.firebaseio.com
#ENV FIREBASE_projectId=
ENV firebase.storage_bucket=climbookmark.appspot.com
ENV firebase.messaging_sender_id=1096755414982
ENV firebase.app_id=1:1096755414982:web:9ebf33c4e614a5cf38d4c7

# 雛形を生成するのに必要なパッケージのインストール
RUN npm install -g npm firebase-tools && apt-get update && apt-get install -y vim

# ディレクトリを移動する
WORKDIR /app

# ポート3000番:node, 9000:firebase
EXPOSE 3000 9005
