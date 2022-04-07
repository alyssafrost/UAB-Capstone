# STL
import uuid
import logging

# PIP
import psycopg2 as pg
import asyncio

LOG = logging.getLogger(__name__)


def insert(cursor):
    """
    Inserts ____ into the database.
    Returns:
    """
    cursor.db.fetch(""" INSERT INTO calculations """)


def query(cursor):
    """
    Queries a SELECT on the database table 'calculations'.
    Returns:
    """
    cursor.db.fetch(""" SELECT * FROM calculations """)


def write_temp(cursor):
    """
    Writes a temperature to the database in order to populate analysis graphs.
    Returns:
    """
    assert cursor.db is not None

    cursor.db.execute()


def main():

    conn = pg.connect(
        host="138.26.48.83",
        database="Team6DB",
        user="Team6",
        password="Team6",
    )

    cursor = conn.cursor()


if __name__ == "__main__":
    main()
