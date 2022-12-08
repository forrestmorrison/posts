DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
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


