CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE categories(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE products(
  id UUID DEFAULT uuid_generate_v4()PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  price DECIMAL(8, 2) NOT NULL,
  category_id INTEGER,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);