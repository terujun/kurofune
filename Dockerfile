FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && cd /kurofune/protox/ && npm install
WORKDIR /kurofune/protox/
CMD ["npm" "start"]