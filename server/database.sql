CREATE DATABASE bookliabrary;
CREATE TABLE book(
book_id SERIAL PRIMARY KEY,
book_image bytea,
description VARCHAR(255)
);