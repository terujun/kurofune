FROM centos:centos7

RUN yum install git 
RUN yum install httpd 
RUN yum install nodejs npm && npm install -g n && n stable && yum remove nodejs npm 
RUN exec $SHELL -l && git clone https://github.com/terujun/kurofune.git && ls && pwd
