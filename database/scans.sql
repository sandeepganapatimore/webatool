USE Webatooldb;

CREATE TABLE Scans(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL UNIQUE,
    createdDate DATE DEFAULT (CURRENT_DATE)
);

INSERT INTO Scans(url)  values('https://raptei.vercel.app/');

