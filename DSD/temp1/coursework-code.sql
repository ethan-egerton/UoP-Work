CREATE DATABASE kennel;

\c kennel;

-------------------
-- CREATE TABLE  --
-------------------
CREATE TABLE owner (owner_id SERIAL PRIMARY KEY, owner_fname VARCHAR(26) NOT NULL, owner_lname VARCHAR(26) NOT NULL, owner_home_number BIGINT, owner_mobile_number BIGINT NOT NULL, owner_email VARCHAR(64), owner_address VARCHAR(64));
CREATE TABLE staff (staff_id SERIAL PRIMARY KEY, staff_role VARCHAR(7) NOT NULL, staff_fname VARCHAR(26) NOT NULL, staff_lname VARCHAR(26) NOT NULL, staff_address VARCHAR(64) NOT NULL, staff_mobile_number BIGINT NOT NULL, staff_email VARCHAR(64) NOT NULL);
CREATE TABLE vet (vet_id SERIAL PRIMARY KEY, vet_name VARCHAR(26) NOT NULL, vet_address VARCHAR(64) NOT NULL, vet_number BIGINT NOT NULL, vet_email VARCHAR(64));
CREATE TABLE kennel (kennel_id SERIAL PRIMARY KEY, kennel_size SMALLINT CHECK (kennel_size < '3' AND kennel_size > '0') NOT NULL, kennel_entry_date DATE, kennel_exit_date DATE, owner_id INTEGER REFERENCES owner(owner_id)); 
CREATE TABLE dog (dog_id SERIAL PRIMARY KEY, owner_id INTEGER NOT NULL REFERENCES owner(owner_id), staff_id INTEGER REFERENCES staff(staff_id), kennel_id INTEGER REFERENCES kennel(kennel_id), dog_name VARCHAR(26) NOT NULL, dog_chip_id INTEGER NOT NULL, vet_id INTEGER REFERENCES vet(vet_id), dog_flea_date DATE NOT NULL, dog_vacc_date DATE NOT NULL, dog_food_name VARCHAR(32), dog_food_freq INTEGER, dog_food_amt INTEGER);

-------------------
-- INSERT OWNER  --
-------------------
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (1, 'Jeremy', 'Kyle', 018665637594, 078496031605, 'Jkyle@provider.com', '9557 The Green, EAST CENTRAL LONDON, EC88 2CL');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (2, 'Samuel', 'Lythgoe', 013615097165, 07447560985, 'SLythgoe@provider.com', '81 George Street, HEMEL HEMPSTEAD, HP64 1RK');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (3, 'Taylor', 'Henderson', 018681867532, 07443456843, 'THenderson@provider.com', '90 North Road, YORK, YO97 4KI');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (4, 'Emily', 'Rooney', 019838773826, 07449873430, 'ERooney@provider.com', '7 Park Lane, SOUTH EAST LONDON, SE71 9IQ');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (5, 'Andrew', 'Herbert', 013689365477, 07440984576, 'AHerbert@provider.com', '899 Church Street, OLDHAM, OL71 5DV');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (6, 'Jack', 'Kennedy', 016854462227, 07065773707, 'JKenney@provider.com', '78 Green Lane, WEST LONDON, W7 8XC');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (7, 'Hamish', 'Hammond', 011501932510, 07877618919, 'HHammond@provider.com', '9326 Queens Road, BROMLEY, BR27 0ZQ');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (8, 'Tanya', 'Moore', 015713497051, 07983280873, 'TMoore@provider.com', '8 Main Road, WESTERN CENTRAL LONDON, WC28 6JF');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (9, 'Beth', 'Holland', 014217075306, 07732371094, 'BHolland@provider.com', '94 New Road, NEWCASTLE UPON TYNE, NE32 5RX');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (10, 'Asen', 'Cooper', 012354658177, 07863841231, 'ACooper@provider.com', '9410 Main Street, NORTH LONDON, N45 7AF');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (11, 'Max', 'Dawson', 017831080301, 07851763554, 'MDawson@provider.com', '86 Manchester Road, HALIFAX, HX89 6ZG');

-------------------
-- INSERT KENNEL --
-------------------
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (1, 2, '2022-02-12', '2022-02-19', 1);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (2, 2, '2022-02-09', '2022-02-18', 4);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (3, 2, '2022-02-14', '2022-02-16', 7);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (4, 2, '2022-02-08', '2022-02-16', 9);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (5, 1, '2022-02-13', '2022-02-22', 3);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (6, 1, '2022-02-10', '2022-02-20', 8);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (7, 1, '2022-02-11', '2022-02-19', 10);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (8, 1, '2022-02-05', '2022-02-24', 2);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (9, 1, '2022-02-14', '2022-02-23', 6);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (10, 1, '2022-02-13', '2022-02-19', 11);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (12, 1, '2022-02-02', '2022-02-16', 5);

-------------------
-- INSERT  STAFF --
-------------------
INSERT INTO staff (staff_id, staff_role, staff_fname, staff_lname, staff_address, staff_mobile_number, staff_email) values (1, 'Manager', 'David', 'Mann', '9 Grange Road, SWANSEA, SA1 1YS' , 076854462227, 'DMann@provider.com');
INSERT INTO staff (staff_id, staff_role, staff_fname, staff_lname, staff_address, staff_mobile_number, staff_email) values (2, 'General', 'Cody', 'Dean', '42 Church Road, LLANDRINDOD WELLS, LD66 1ET' , 076854462227, 'CDean@provider.com');
INSERT INTO staff (staff_id, staff_role, staff_fname, staff_lname, staff_address, staff_mobile_number, staff_email) values (3, 'General', 'Rohaan', 'Bender', '9746 North Street, COVENTRY, CV24 4BI' , 076854462227, 'RBender@provider.com');
INSERT INTO staff (staff_id, staff_role, staff_fname, staff_lname, staff_address, staff_mobile_number, staff_email) values (4, 'General', 'Ozan', 'Yoder', '89 North Road, MILTON KEYNES, MK73 7JX' , 076854462227, 'OYoder@provider.com');
INSERT INTO staff (staff_id, staff_role, staff_fname, staff_lname, staff_address, staff_mobile_number, staff_email) values (5, 'General', 'Jawad', 'Doherty', '10 New Street, PERTH, PH70 2XB' , 076854462227, 'JDoherty@provider.com');

-------------------
--  INSERT  VET  --
-------------------



INSERT INTO kennel (kennel_id ,kennel_size, kenn, owner_home_number, owner_mobile_number, owner_email, owner_address) values ('1', 'Jeremy', 'Kyle', 12398534, 14234234, 'something@someting.com', '17, something, something, something');