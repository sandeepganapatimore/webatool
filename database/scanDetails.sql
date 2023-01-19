USE Webatooldb;

CREATE TABLE ScanDetails(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    result JSON NULL,
    createdDate DATE DEFAULT (CURRENT_DATE),
    scanId INT,
    isRescan BOOLEAN,
    FOREIGN KEY (scanId) REFERENCES Scans(id)
);

INSERT INTO ScanDetails(result, scanId) values('{"url": "https://raptei.vercel.app/"}', 1);

INSERT INTO ScanDetails(result, isRescan, scanId) values('{"url": "https://raptei.vercel.app/"}', true, 1);