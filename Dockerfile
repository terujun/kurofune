FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && mv /kurofune/protox/ /protox/ && cd /protox && npm install && npm run build && cp -pir build/* /var/www/html/

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]