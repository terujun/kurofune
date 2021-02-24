FROM jteru/centos7-protox:latest

RUN git clone https://github.com/terujun/kurofune.git && mv /kurofune/protox/ /protox/ && cd /protox && npm run build && cp -pir build/* /var/www/html/ && systemctl enable httpd 

