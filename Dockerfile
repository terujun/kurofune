FROM centos:httpd-24-centos7

RUN sudo yum install git && sudo yum install nodejs npm && sudo npm install -g n && sudo n stable && sudo yum remove nodejs npm && exec $SHELL -l && git clone https://github.com/terujun/kurofune.git && ls && pwd
