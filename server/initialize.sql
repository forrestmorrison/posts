DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255),
  password VARCHAR(255),
  name VARCHAR(50),  
  PRIMARY KEY (id)
);

CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  userId INT NOT NULL,
  body TEXT,  
  PRIMARY KEY (id)
);

INSERT INTO users
	(email, password, name)
VALUES 
  ("james@gmail.com","1234567", 'Bill'),
  ("chauncey@gmail.com","password","Motley");

