CREATE DATABASE kennel;

\c kennel;

CREATE TABLE owner (owner_id SERIAL PRIMARY KEY, owner_fname VARCHAR(26) NOT NULL, owner_lname VARCHAR(26) NOT NULL, owner_home_number INTEGER, owner_mobile_number INTEGER NOT NULL, owner_email VARCHAR(64), owner_address VARCHAR(64));
CREATE TABLE staff (staff_id SERIAL PRIMARY KEY, staff_role VARCHAR(7) NOT NULL, staff_fname VARCHAR(26) NOT NULL, staff_lname VARCHAR(26) NOT NULL, address VARCHAR(64) NOT NULL, mobile_number INTEGER NOT NULL, email VARCHAR(64) NOT NULL);
CREATE TABLE vet (vet_id SERIAL PRIMARY KEY, vet_name VARCHAR(26) NOT NULL, vet_address VARCHAR(64) NOT NULL, vet_number INTEGER NOT NULL, vet_email VARCHAR(64));
CREATE TABLE kennel (kennel_id SERIAL PRIMARY KEY, kennel_size INTEGER CHECK (kennel_size < '3' AND kennel_size > '0') NOT NULL, kennel_entry_date DATE, kennel_exit_date DATE, owner_id INTEGER REFERENCES owner(owner_id)); 
CREATE TABLE dog (dog_id SERIAL PRIMARY KEY, owner_id INTEGER NOT NULL REFERENCES owner(owner_id), staff_id INTEGER REFERENCES staff(staff_id), kennel_id INTEGER REFERENCES kennel(kennel_id), dog_name VARCHAR(26) NOT NULL, dog_chip_id INTEGER NOT NULL, vet_id INTEGER REFERENCES vet(vet_id), dog_flea_date DATE NOT NULL, dog_vacc_date DATE NOT NULL, dog_food_name VARCHAR(32), dog_food_freq INTEGER, dog_food_amt INTEGER);

