# 맛집 예약 서비스 Quiclick

1. 사전준비
1) AWS 사전준비
키페어 생성하기
보안그룹 생성하기
AWS에서 (Linux) 인스턴스 시작
(Linux) 인스턴스 연결 
2) NodeJS 설치
Package Manager를 통한 NodeJS 설치

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-basedlinux-distributions 참조

[ubuntu ~]$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
[ubuntu ~]$ sudo apt-get install -y nodejs
3) MongDB 설치
Install MongoDB Community Edition on Ubuntu

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
Import the public key used by the package management system.

[ubuntu ~]$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
Create a list file for MongoDB.

Ubuntu 16.04

[ubuntu ~]$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
Reload local package database.

[ubuntu ~]$ sudo apt-get update
Install the MongoDB packages.

[ubuntu ~]$ sudo apt-get install -y mongodb-org
Start MongoDB.

[ubuntu ~]$ sudo service mongod start
4) APP 다운로드 및 실행
GitHub 저장소에서 App 다운로드

[ubuntu ~]$ git clone https://github.com/YunTaeIl/ManToMen
App 폴더로 이동

[ubuntu ~]$ cd /server
App 실행

[ubuntu ~]$ sudo node app.js&
서버가 정상적으로 실행되면, https://github.com/YunTaeIl/ManToMen 안드로이드 프로젝트를 다운받아 디바이스에 설치하고 실행 한다.



