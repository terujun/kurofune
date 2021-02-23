FROM centos:centos7

RUN sudo yum install git && sudo yum install httpd 
RUN sudo yum install nodejs npm && sudo npm install -g n && sudo n stable && sudo yum remove nodejs npm 
RUN exec $SHELL -l && git clone https://github.com/terujun/kurofune.git && ls && pwd
