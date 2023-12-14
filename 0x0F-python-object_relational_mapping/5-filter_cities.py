#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    # Check if the correct number of arguments is provided
    if len(sys.argv) != 5:
        print("Usage: {} <username> <password> <database> <state_name>".format(sys.argv[0]))
        sys.exit(1)

    # Extract command line arguments
    username, password, database, state_name = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]

    # Connect to MySQL server
    db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database)

    # Create a cursor object to execute queries
    cursor = db.cursor()

    # Execute the query to select cities of the specified state and order by cities.id
    query = """
        SELECT GROUP_CONCAT(name SEPARATOR ', ')
        FROM cities
        WHERE state_id = (SELECT id FROM states WHERE name = %s)
        ORDER BY id ASC
    """
    cursor.execute(query, (state_name,))

    # Fetch the result and display it
    result = cursor.fetchone()[0]
    if result:
        print(result)

    # Close cursor and database connection
    cursor.close()
    db.close()