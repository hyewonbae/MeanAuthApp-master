1) Angular 사전 준비
 1.Angular CLI 설치 : 프로젝트와 콤포넌트 생성에 이용됨.
```
PS C:\Users\배혜원\MeanAuthApp-master> npm install -g @angular/cli
```
```
PS C:\Users\배혜원\MeanAuthApp-master> ng --version
```
 2.해당 angula-src로 이동
 ```
PS C:\Users\배혜원\MeanAuthApp-master>cd.\angular-src\
```
 3.Build: 배포를 하고 싶다면 빌드를 해줘야 함.
```
PS C:\Users\배혜원\MeanAuthApp-master>ng build
```

# putty 서버 실행 
(이관우 교수님 readme 참고했습니다.)
## 1. 사전준비
1. [키페어 생성하기](./doc/create_keypair.pdf)
2. [**AWS**에서 (Linux) 인스턴스 시작](./doc/launch_instance.md)
3. [(Linux) 인스턴스 연결](./doc/connectingToInstance.pdf)

## 2. NodeJS 설치
Package Manager를 통한 NodeJS 설치

- https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-basedlinux-distributions
참조

```
[ubuntu ~]$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

```
[ubuntu ~]$ sudo apt-get install -y nodejs
```
## 3. MongDB 설치
Install MongoDB Community Edition on Ubuntu

- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

1. Import the public key used by the package management system.

	```
	[ubuntu ~]$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
	```

2. Create a list file for MongoDB.

	Ubuntu 16.04

	```
	[ubuntu ~]$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
	```
	
3. Reload local package database.

	```
	[ubuntu ~]$ sudo apt-get update
	```
	
4. Install the MongoDB packages.

	```
	[ubuntu ~]$ sudo apt-get install -y mongodb-org
	```

5. Start MongoDB.
6. 
	```
	[ubuntu ~]$ sudo service mongod start
	```

## 4. 실행
1. putty 실행 후 Quiclick 폴더로 이동
	```
	[ubuntu ~]$ cd Quiclick
	```

2. 서버 실행

	```
	[ubuntu ~]$ npm start
	```

3. 백그라운드 실행 시 pm2 설치

	```
	[ubuntu ~]$ npm install -g pm2
	```

4. pm2 서버 실행

	```
	[ubuntu ~]$ pm2 start .bin/www
	```
	
4. pm2 서버 종료시 코드

	```
	[ubuntu ~]$ pm2 stop .bin/www
	```
