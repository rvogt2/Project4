use mydb;


select * from user;
select * from questions;
select * from user order by id;
select * from questions order by category;

create table user(
	id int auto_increment not null unique,
    uName varchar(50) not null unique,
    pWord varchar(50) not null
);
insert into user(uName,pWord) values("","");



create table questions(
     question varchar(128) primary key unique not null,
     answer varchar(128) not null,
     category varchar(24) not null
);

insert into questions(question, answer, category)values("what is the capital of texas","Austin","Geography");
insert into questions(question, answer, category)values("What is the elemental symbol for gold","Au","Chemistry");
insert into questions(question, answer, category)values("How many actors are in the '3 club' for LEGO products?","6","Trivia");
insert into questions(question, answer, category)values("What is missing from this list? Who, What, When, Why","How","Trivia");
insert into questions(question, answer, category)values("Where is the Nile River located?","Egypt","Geography");