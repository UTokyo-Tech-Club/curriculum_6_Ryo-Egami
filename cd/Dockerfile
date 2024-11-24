# ビルドステージ
FROM golang:1.23-alpine AS builder

WORKDIR /app

# Go Modulesのキャッシュを活用するために、go.mod と go.sum を先にコピー
COPY go.mod go.sum ./

# 依存関係をダウンロード
RUN go mod download

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN go build -o main

# 実行ステージ
FROM alpine:latest

WORKDIR /app

# ビルドしたバイナリをコピー
COPY --from=builder /app/main .

# 必要なポートを公開（例：8080）
EXPOSE 8080

# アプリケーションを実行
CMD ["./main"]