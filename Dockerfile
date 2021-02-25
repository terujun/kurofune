FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && cd /kurofune/protox/ && cp -pi examples/src/index.html /var/www/html && cp -pi examples/src/icons/*.png /var/www/html && cp -pi examples/src/bundle.js /var/www/html && cp -pi dist/* /var/www/html && ls /var/www/html

CMD ["/usr/sbin/httpd", "-DFOREGROUND"]