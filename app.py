import sqlite3

conn = sqlite3.connect("/path/to/ganjoor.s3db")
cursor = conn.cursor()

# List all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
print("Tables:", cursor.fetchall())

# Check 'poem' table structure
cursor.execute("PRAGMA table_info(poem);")
print("Poem table columns:", cursor.fetchall())

conn.close()