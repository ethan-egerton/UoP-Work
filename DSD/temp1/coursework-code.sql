CREATE DATABASE SCB;

\c SCB;

-------------------
-- CREATE TABLE  --
-------------------
CREATE TABLE owner (owner_id SERIAL PRIMARY KEY, owner_fname VARCHAR(26) NOT NULL, owner_lname VARCHAR(26) NOT NULL, owner_home_number BIGINT, owner_mobile_number BIGINT NOT NULL, owner_email VARCHAR(64), owner_address VARCHAR(64));
CREATE TABLE staff (staff_id SERIAL PRIMARY KEY, staff_role VARCHAR(7) NOT NULL, staff_fname VARCHAR(26) NOT NULL, staff_lname VARCHAR(26) NOT NULL, staff_address VARCHAR(64) NOT NULL, staff_mobile_number BIGINT NOT NULL, staff_email VARCHAR(64) NOT NULL);
CREATE TABLE vet (vet_id SERIAL PRIMARY KEY, vet_name VARCHAR(26) NOT NULL, vet_address VARCHAR(64) NOT NULL, vet_number BIGINT NOT NULL, vet_email VARCHAR(64));
CREATE TABLE kennel (kennel_id SERIAL PRIMARY KEY, kennel_size SMALLINT CHECK (kennel_size < '3' AND kennel_size > '0') NOT NULL, kennel_entry_date DATE, kennel_exit_date DATE, owner_id INTEGER REFERENCES owner(owner_id)); 
CREATE TABLE dog (dog_id SERIAL PRIMARY KEY, owner_id INTEGER NOT NULL REFERENCES owner(owner_id), staff_id INTEGER REFERENCES staff(staff_id), kennel_id INTEGER REFERENCES kennel(kennel_id), dog_name VARCHAR(26) NOT NULL, dog_sex CHAR(1) NOT NULL, dog_chip_id BIGINT NOT NULL, vet_id INTEGER REFERENCES vet(vet_id), dog_flea_date DATE NOT NULL, dog_vacc_date DATE NOT NULL, dog_food_name VARCHAR(32), dog_food_freq INTEGER, dog_food_amt INTEGER);

-------------------
-- INSERT OWNER  --
-------------------
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (1, 'Jeremy', 'Kyle', 018665637594, 078496031605, 'Jkyle@provider.com', '9557 The Green, EAST CENTRAL LONDON, EC88 2CL');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (2, 'Samuel', 'Lythgoe', 013615097165, 07447560985, 'SLythgoe@provider.com', '81 George Street, HEMEL HEMPSTEAD, HP64 1RK');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (3, 'Taylor', 'Henderson', 018681867532, 07443456843, 'THenderson@provider.com', '90 North Road, YORK, YO97 4KI');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (4, 'Emily', 'Rooney', 019838773826, 07449873430, 'ERooney@provider.com', '7 Park Lane, SOUTH EAST LONDON, SE71 9IQ');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (5, 'Andrew', 'Herbert', 013689365477, 07440984576, 'AHerbert@provider.com', '899 Church Street, OLDHAM, OL71 5DV');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (7, 'Hamish', 'Hammond', 011501932510, 07877618919, 'HHammond@provider.com', '9326 Queens Road, BROMLEY, BR27 0ZQ');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (6, 'Jack', 'Kennedy', 016854462227, 07065773707, 'JKenney@provider.com', '78 Green Lane, WEST LONDON, W7 8XC');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (8, 'Tanya', 'Moore', 015713497051, 07983280873, 'TMoore@provider.com', '8 Main Road, WESTERN CENTRAL LONDON, WC28 6JF');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (9, 'Beth', 'Holland', 014217075306, 07732371094, 'BHolland@provider.com', '94 New Road, NEWCASTLE UPON TYNE, NE32 5RX');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (10, 'Asen', 'Cooper', 012354658177, 07863841231, 'ACooper@provider.com', '9410 Main Street, NORTH LONDON, N45 7AF');
INSERT INTO owner (owner_id, owner_fname, owner_lname, owner_home_number, owner_mobile_number, owner_email, owner_address) values (11, 'Max', 'Dawson', 017831080301, 07851763554, 'MDawson@provider.com', '86 Manchester Road, HALIFAX, HX89 6ZG');

-------------------
-- INSERT KENNEL --
-------------------
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (1, 2, '2022-02-12', '2022-02-19', 1);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (2, 2, '2022-02-09', '2022-02-18', 2);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (3, 2, '2022-02-14', '2022-02-16', 3);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (4, 2, '2022-02-08', '2022-02-16', 4);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (5, 1, '2022-02-13', '2022-02-19', 5);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (6, 1, '2022-02-10', '2022-02-20', 6);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (7, 1, '2022-02-11', '2022-02-18', 7);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (8, 1, '2022-02-05', '2022-02-22', 8);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (9, 1, '2022-02-14', '2022-02-23', 9);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (10, 1, '2022-02-13', '2022-02-19', 10);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (11, 1, '2022-02-02', '2022-02-18', 11);
INSERT INTO kennel (kennel_id, kennel_size, kennel_entry_date, kennel_exit_date, owner_id) values (12, 1, '2022-02-12', '2022-02-19', 11);

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
INSERT INTO vet (vet_id, vet_name, vet_address, vet_number, vet_email) values (1, 'Steve Johnsons Veterinary', '16 Stanley Road, NORTH WEST LONDON, NW58 0AK', 079493479833, 'SJVeterinary@provider.com');
INSERT INTO vet (vet_id, vet_name, vet_address, vet_number, vet_email) values (2, 'Heart Dogs', '5 The Avenue, WORCESTER, WR61 7SM', 073175820617, 'HeartDogsInfo@provider.com');
INSERT INTO vet (vet_id, vet_name, vet_address, vet_number, vet_email) values (3, 'Vet Now', '412 Park Avenue, TAUNTON, TA91 7QX', 074205793181, 'VetNow@provider.com');
INSERT INTO vet (vet_id, vet_name, vet_address, vet_number, vet_email) values (4, 'Vets4Pets', '575 The Green, SOUTHEND-ON-SEA, SS51 8QX', 071234234319, 'Vets4Pets@provider.com');
INSERT INTO vet (vet_id, vet_name, vet_address, vet_number, vet_email) values (5, 'Canine Plus', '651 Richmond Road, HEREFORD, HR61 1YI', 071033088599, 'CaninePlus@provider.com');

-------------------
--  INSERT  DOG  --
-------------------
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (1, 1, 2, 1, 'Abby', 'F', 67203592667703, 1, '2022-02-01', '2021-06-12', 'Harringtons', 1, 140);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (2, 1, 2, 1, 'Alice', 'F' , 69419353229607, 1, '2022-01-28', '2021-05-28', 'Harringtons', 1, 320);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (3, 2, 2, 2, 'Bella', 'F' , 71800681794153, 1, '2022-01-24', '2021-09-16', 'Orijen Adult Original', 2, 150);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (4, 2, 2, 2, 'Lucy', 'F' , 36539927880137, 2, '2022-01-25', '2021-12-21', 'Orijen Adult Original', 2, 150);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (5, 3, 3, 3, 'Daisy', 'F' , 25099280655368, 2, '2022-01-27', '2021-11-11', 'Orijen Adult Original', 1, 300);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (6, 3, 3, 3, 'Molly', 'F' , 15603515630912, 2, '2022-01-24', '2021-09-27', 'Orijen Adult Original', 1, 200);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (7, 4, 3, 4, 'Sadie', 'F' , 75872276368431, 3, '2022-02-02', '2021-10-15', 'James Wellbeloved', 2, 200);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (8, 4, 3, 4, 'Luna', 'F' , 71998744770371, 3, '2022-01-21', '2022-01-05', 'James Wellbeloved', 3, 100);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (9, 5, 4, 5, 'Zoe', 'F' , 71591117574537, 3, '2022-01-27', '2021-03-27', 'James Wellbeloved', 2, 150);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (10, 6, 4, 6, 'Bailey', 'M' , 62619652395660, 3, '2022-01-23', '2021-04-17', 'Harringtons', 2, 200);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (11, 7, 4, 7, 'Max', 'M', 46927044939910, 4, '2022-01-26', '2021-03-09', 'James Wellbeloved', 2, 100);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (12, 8, 4, 8, 'Toby', 'M', 86014968965205, 4, '2022-01-22', '2021-11-02', 'Pure Dehydrated', 2, 100);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (13, 9, 5, 9, 'Buddy', 'M', 57714880119668, 4, '2022-02-02', '2021-07-23', 'Orijen Adult Original', 2, 100);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (15, 10, 5, 10, 'Rocky', 'M', 35780567927294, 5, '2022-02-05', '2021-11-09', 'Harringtons', 2, 140);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (14, 11, 5, 11, 'Duke', 'M', 54460685598397, 5, '2022-02-01', '2021-07-22', 'Pure Dehydrated', 2, 200);
INSERT INTO dog (dog_id, owner_id, staff_id, kennel_id, dog_name, dog_sex, dog_chip_id, vet_id, dog_flea_date, dog_vacc_date, dog_food_name, dog_food_freq, dog_food_amt) values (16, 1, 5, 12, 'Bear', 'M', 71678263518535, 5, '2022-02-01', '2021-05-12', 'Harringtons', 1, 200);

-------------------
--    QUERIES    --
-------------------

-- Finds the vet of owner called 'Jeremy Kyle'
SELECT
    DISTINCT ON (o.owner_id)
    o.owner_id,
    o.owner_fname, 
    o.owner_lname,
    v.vet_name
FROM
    owner o
JOIN dog d
    ON o.owner_id = d.owner_id 
JOIN vet v 
    ON v.vet_id = d.vet_id
WHERE
    o.owner_fname = 'Jeremy' AND o.owner_lname = 'Kyle';

-- Finds the kennel(s) a staff member will be taking care of
SELECT
    DISTINCT ON (k.kennel_id)
    s.staff_id,
    s.staff_fname,
    s.staff_lname,
    k.kennel_id
FROM
    kennel k
JOIN dog d
    ON k.kennel_id = d.kennel_id
JOIN staff s
    ON d.staff_id = s.staff_id
WHERE 
    s.staff_fname = 'Cody';


-- Finds dogs and the staff feeding them under or 150 grams of kibble per feed but only from kennels that aren't double sized
SELECT
    s.staff_id,
    s.staff_fname,
    s.staff_lname,
    d.dog_name,
    d.dog_food_amt
FROM 
    staff s
JOIN dog d
    ON s.staff_id = d.staff_id
JOIN kennel k
    ON d.kennel_id = k.kennel_id
WHERE
    d.dog_food_amt <= 150 AND k.kennel_size != 2;


-- Finds the dogs that will be leaving before the 20th of feburary whilst under the care of 'Yoder'
SELECT
    d.dog_name,
    k.kennel_exit_date
FROM
    dog d
JOIN kennel k
    ON d.kennel_id = k.kennel_id
JOIN staff s
    ON d.staff_id = s.staff_id
WHERE
    k.kennel_exit_date < '2022-02-20' AND staff_lname = 'Yoder'
ORDER BY
    k.kennel_exit_date;