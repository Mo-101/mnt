-- Create habitats table
CREATE TABLE IF NOT EXISTS habitats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location POINT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create rodents table
CREATE TABLE IF NOT EXISTS rodents (
  id SERIAL PRIMARY KEY,
  species VARCHAR(255) NOT NULL,
  habitat_id INTEGER REFERENCES habitats(id),
  population INTEGER,
  last_sighting TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create environmental_data table
CREATE TABLE IF NOT EXISTS environmental_data (
  id SERIAL PRIMARY KEY,
  habitat_id INTEGER REFERENCES habitats(id),
  temperature DECIMAL,
  humidity DECIMAL,
  rainfall DECIMAL,
  recorded_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);