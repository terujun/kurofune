FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && mv /kurofune/protox/ /protox/ && cd /protox && cat src/index.js && npm install && npm run build && mv build/* /var/www/html/
RUN cat /var/www/html/static/js/main*js

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]