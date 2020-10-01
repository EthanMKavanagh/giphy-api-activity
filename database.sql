CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite

-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (100) NOT NULL,
    "category_id" VARCHAR (100)
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


-------

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url", VARCHAR (500) 
    "category_id", INT
    
);



