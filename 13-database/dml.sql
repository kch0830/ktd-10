-- 23-11-28

-- 데이터베이스 생성
CREATE DATABASE kdt default character set utf8 collate utf8_general_ci;
CREATE DATABASE kdt2 default character set utf8 collate utf8_general_ci;
-- 데이터베이스 사용 선언
use kdt;
-- 데이터베이스 목록 조회
show databases;
-- 데이터베이스 삭제
drop database kdt2;


CREATE TABLE product (
	id int primary key not null auto_increment,
    name varchar(30) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
    );

-- 테이블 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회
show tables;

-- 테이블 구조 확인
-- 테이블의 컬럼 정보 (자료형, NULL 여부, KEY, DEFAULT 등)
desc product;

-- 테이블 삭제
-- drop : 테이블 존재 자체를 없앰
drop table product;
-- truncate : 테이블 구조만 남겨놓고 모든 행을 삭제
truncate table product;

-- 테이블 정의 수정
-- 이미 테이블을 생성했고, 테이블에 데이터가 추가되어있을 때
-- 컬럼 정보가 바뀌어야 하는 경우 사용

-- 컬럼 추가
alter table product add new_column date;
-- 컬럼 수정
alter table product modify new_column int;
alter table product change new_column new_column2 int;

-- 컬럼 삭제
alter table product drop new_column2;

CREATE TABLE member (
	id varchar(20) primary key not null,
    name varchar(5) not null,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default x,
    interest varchar(100),
    );


-- 23-11-29

-- < ORDER BY >
-- order by [기준값] : default 값은 pk 기준 오름차순 정렬
-- order by [기준값] desc : 내림차순
select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;

-- where 절과 order by 함께 사용 (단, 이때 order by가 where보다 뒤에 있어야함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc;

-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr, custid desc;

-- < LIMIT >
-- 행의 개수를 제한
select * from customer limit 3;
select * from customer where birth >= '2000-01-01' limit 3;

-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 같이 쓰는 케이스가 많음

-- order 테이블 만들기
-- 왜래키 갖고 있게 만들 것

-- 외래키 제약 조건
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (order)
-- 형식 : FOREIGN KEY(열 이름) REFERENCES 기준 테이블(열 이름)
-- on update cascade : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경
-- on delete cascade : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제

create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null, 
    price int not null,
    amount smallint not null,
    -- 형식 : FOREIGN KEY(열 이름) REFERENCES 기준 테이블(열 이름)
    foreign key (custid) references customer(custid) on update cascade on delete cascade
)

-- 테이블을 삭제할 경우 삭제 순서!
-- customer table, orders table customer.custid 를 기준으로 "관계"를 맺음
-- customer table 존재하는 회원만 orders table에 데이터를 추가할 수 있음
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제(drop)하면?
-- pr-fk 연결된 테이블은 외래키가 설정된 테이블(참조 테이블) 먼저 삭제
-- (1) orders table 삭제 -> (2) customer 테이블 삭제

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from order;
-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
-- total_amount, avg_amount, min_price, max_price
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount',
min(price) as 'min_price', max(price) as 'max_price' from orders;

-- 주문 테이블에서 총 주문 건수
select count(*) from orders;
-- 주문 테이블에서 주문한 고객 수(중복 없이, distinct : 중복 제거)
select count(distinct custid) from orders;

-- 고객 별로 주문한 주문 건수 검색
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price * amount) from orders group by custid;

-- 상품별로 판매 개수 구하기
select prodname, sum(amout) from orders group by prodname;

-- < HAVING >
-- group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amout), sum(price * amount) from orders group by custid
having sum(price * amount) >= 10000;

-- 위랑 동일한 조건 + 단, custid가 'bunny'인 고객 제외
-- where + group by + having (순서 주의)
select custid, sum(amout), sum(price * amount) from orders where custid != 'bunny'
group by custid
having sum(price * amount) >= 10000;

-- group by + having
select custid, sum(amout), sum(price * amount) from orders group by custid
having sum(price * amount) >= 10000; custid != 'bunny'
-- group by 주의사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

/*
where vs having

having 
- 그룹에 대해서 필터링(그래서 group by 함께 쓰임)
- group by 보다 뒤에 위치
- 집계함수랑 같이 사용 가능

where
- 각각의 행을 필터링
- group by 보다 앞에 위치
- 집계 함수 사용X
*/



