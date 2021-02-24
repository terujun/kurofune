FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && mv /kurofune/protox/ /protox/ && cd /protox && npm install && npm run build && cp -pir build/* /var/www/html/
RUN cat /var/www/html/static/js/main.b5578f44.chunk.js

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]