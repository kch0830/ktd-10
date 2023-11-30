-- DCL
-- 사용자 권한 부여 명령어
-- GRANT permission_type ON dbname.table_name TO username@host IDENTIFIED BY 'my_password' [with grant option];

-- 호스트 : 로컬 호스트
 -- grant all privileges on *.* to 'user'@'localhost' identified by '4321' 
 
 -- 권한 확인
 show grants;
 
 -- 1. 계정 생성
 create user 'user2'@'localhost' identified by '4321';
 select * from mysql.user; -- 존재하는 계정 확인
 
 grant all privileges on *.* to 'user2'@'localhost';
 grant all privileges on *.* to 'root'@'%';
 
 create user 'uesr2'@'localhost' identified by '4321'
 
 -- "%" 권한을 가진 계정 먼저 생성
 create user 'user3'@'%' identified by '4321'
 
 -- 권한 삭제
 revoke privileges on *.* from 'user2'@'localhost';
 
 -- 계정 삭제
 drop user 'user2'@'localhost';
 -- 계정 수정
alter user 'user'@'localhost' identified by '1234';

-- 저장
 flush privileges;
 