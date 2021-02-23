FROM centos:centos7

RUN yum -y install httpd 
RUN yum -y install nodejs npm && npm install -g n && n stable && yum -y remove nodejs npm 
RUN exec $SHELL -l && git clone https://github.com/terujun/kurofune.git && ls && pwd
