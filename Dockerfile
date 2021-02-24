FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && cd /kurofune/protox/ && npm install && npm run build && mv build/* /var/www/html/

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]