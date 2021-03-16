FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && cd /kurofune/protox/ && cp -pi examples/src/*.html /var/www/html && cp -pi examples/src/example.css /var/www/html && cp -pir examples/src/icons/ /var/www/html && cp -pi examples/src/bundle.js /var/www/html && cp -pi dist/* /var/www/html && ls /var/www/html/icons

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]