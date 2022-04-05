CREATE TABLE IF NOT EXISTS calculations (
    record_date DATE PRIMARY KEY,
    water_cost decimal NOT NULL,
    electricity_cost decimal NOT NULL,
    total_cost decimal NOT NULL,
)
