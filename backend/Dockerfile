FROM ruby:3.1.2

WORKDIR /app
COPY src .

# apt-get updateはubuntuのパッケージリストの更新を行なっている（パッケージがリストに載っていないことがある）
# puma.sockを配置するディレクトリを作成している
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs && \
    rm -rf /var/lib/apt/lists/* && \
    mkdir -p tmp/sockets

COPY startup.sh /usr/local/bin/startup.sh
RUN chmod +x /usr/local/bin/startup.sh

CMD startup.sh
