CREATE DATABASE imtihon;

CREATE TABLE companies(
    company_id serial not null primary key,
    company_name varchar(64) not null,
    company_img text
);


INSERT INTO companies(company_name) VALUES('Murod Buildings'),
                                          ('Golden House'), 
                                          ('Bizning Uylar'),
                                          ('Olmazor City'), 
                                          ('Toshkent City');
                                         
CREATE TABLE complex(
    complex_id serial not null primary key,
    complex_name varchar(64) not null,
    address varchar(64) not null,
    complex_img text,
    company_id INT NOT NULL, FOREIGN KEY(company_id) REFERENCES companies(company_id) ON DELETE CASCADE
);

INSERT INTO complex(complex_name, address, company_id) VALUES ('Kislorod', 'Milliy bog'' stantsiyasi', 1),
                                                              ('Nest One','Xalqlar do''stligi stantsiyasi', 1),
                                                              ('Cambridge Residence', 'Olmazor tumani', 1),
                                                              ('Greenwich', 'Muqumiy teatr', 2),
                                                              ('Yangi Darxon', 'Yangi Darxon' ,2) ,
                                                              ('Sebzor Complex', 'Sebzor',2),
                                                              ('Chashma Residence', 'Beruniy',3),
                                                              ('New House', 'Beruniy',3),
                                                              ('Yangi Sebzor', 'Gofur Gulom',4),
                                                              ('Toshkent City', 'Xalqlar do''stligi stantsiyasi',5);
              

CREATE TABLE rooms(
    room_id serial not null primary key,
    room int not null,
    price bigint not null,
    kv int not null,
    complex_id INT NOT NULL, FOREIGN KEY(complex_id) REFERENCES complex(complex_id) ON DELETE CASCADE
);

INSERT INTO rooms(room, complex_id, price, kv) VALUES (2, 1, 41300000, 40),    
                                                      (4, 1, 61300000, 70),
                                                      (6, 1, 68000000, 90), 
                                                      (2, 2, 45000000, 45),   
                                                      (4, 2, 65000000, 70), 
                                                      (6, 2, 68000000, 90),
                                                      (2, 5, 41300000, 40),  
                                                      (4, 5, 61730000, 70), 
                                                      (6, 5, 70000000, 90); 

INSERT INTO rooms(room, complex_id, price, kv) VALUES (2, 6, 413000000, 40),    
                                                      (4, 6, 613000000, 70),
                                                      (6, 6, 680000000, 90), 
                                                      (2, 7, 450000000, 45),   
                                                      (4, 7, 650000000, 70), 
                                                      (6, 7, 680000000, 90),
                                                      (2, 8, 413000000, 40),   
                                                      (4, 8, 617300000, 0), 
                                                      (6, 8, 700000000, 90);     

INSERT INTO rooms(room, complex_id, price, kv) VALUES (2, 9, 413000000, 40),   
                                                        (4, 9, 613000000, 70),
                                                        (6, 9, 680000000, 90), 
                                                        (2, 10,450000000, 45),  
                                                        (4, 10,650000000, 70), 
                                                        (6, 10,680000000, 90);
                                                      
INSERT INTO rooms(room, complex_id, price, kv) VALUES (2, 11, 413000000, 40),   
                                                      (4, 11, 613000000, 70),
                                                      (6, 11, 680000000, 90),
                                                      (2, 11, 450000000, 45);
                                                     
                                                      
                                                      

INSERT INTO rooms(room, complex_id, price, kv) VALUES (2, 12, 413000000, 40),   
                                                      (4, 12, 613000000, 70),
                                                      (6, 12, 680000000, 90);
                                                      
CREATE TABLE banks(
    bank_id serial not null primary key,
    bank_name varchar(64) not null,
    started_paymant int not null,
    limit_cost int not null,
    year int not null
);

INSERT INTO banks(bank_name, started_paymant, limit_cost, year) VALUES ('Asaka', 17, 613000000, 10), ('Ipak Yuli', 17, 700000000, 15), ('Hamkor', 17, 500000000 ,20);

 UPDATE banks SET bank_img = 'https://cbu.uz/upload/iblock/205/ipak_en.png' WHERE bank_id = 2;
 UPDATE companies SET company_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tashkent_City_logo.svg/1200px-Tashkent_City_logo.svg.png' WHERE company_id = 5;
 UPDATE rooms SET price = '550000000' WHERE room_id = 2;

SELECT 
    *
FROM 
    companies c
WHERE c.company_id = 1
;

SELECT 
        c.*,
    JSON_AGG(
         json_build_object(
        'id', com.complex_id,
        'name', com.complex_name
        )
    ) complex
FROM 
    companies c
NATURAL JOIN complex com
WHERE c.company_id = 1
GROUP BY
    c.company_id
;

SELECT 
    r
FROM 
    complex c
NATURAL JOIN rooms r
WHERE c.complex_id = 3
;

SELECT 
    *
FROM 
    complex c
WHERE c.complex_id = 3
;


SELECT 
    c.complex_id,
    c.complex_name,
    JSON_AGG(
        (
        r.room_id,
        r.room
        )
    ) room
FROM 
    rooms r
NATURAL JOIN complex c
WHERE c.complex_id = 1
GROUP BY c.complex_id
;    


SELECT 
   r.price / r.kv price,
   r.kv,
   c.address
FROM 
    rooms r
NATURAL JOIN complex c
WHERE r.room_id = 1
;


CREATE OR REPLACE FUNCTION bank(price int)
RETURNS INT
LANGUAGE plpgsql
AS
$$
DECLARE
result int;
h record;
BEGIN
    result = -1;
    FOR h in SELECT bank_id, limit_cost FROM banks ORDER BY limit_cost
    LOOP
        IF
            h.limit_cost >= price AND result = -1
        THEN
            result = h.bank_id;
        END IF;
    END LOOP;
    RETURN result;
END
$$;

SELECT
    bank_id,
    bank_name,
    limit_cost,
(SELECT price from rooms where room_id = 1) price,
(SELECT price from rooms where room_id = 1) * 0.17 starting_payment,
(SELECT price from rooms where room_id = 1) * 0.83 / 10 / 12 monthly_payment,
    2 bank_duration
FROM
    banks
WHERE
    bank_id = (SELECT bank((SELECT price from rooms where room_id = 4)));



SELECT c.complex_name, c.complex_id FROM complex c;


INSERT INTO 
    companies(company_name, company_img) 
VALUES ($1, $2)


ALTER TABLE banks
ADD bank_img text;

ALTER TABLE companies
DROP COLUMN  Akay City;

DELETE FROM companies WHERE company_id = 6;

ALTER TABLE complex
ADD complex_img text;

INSERT INTO 
    rooms(room, price,kv, complex_id) 
VALUES (20, 20000000,90, 2);



CREATE TABLE users(
    user_id serial not null primary key,
    user_name varchar(64) not null,
    user_password varchar(64) not null
);

INSERT INTO users(user_name, user_password) VALUES ('admin', '1');