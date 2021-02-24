FROM centos:centos7

RUN yum -y update && yum -y install git && yum -y install httpd && yum -y install epel-release && yum -y install nodejs npm && npm install -g n && n stable && yum -y remove nodejs npm 
RUN exec $SHELL -l && git clone https://github.com/terujun/kurofune.git && ls && pwd
