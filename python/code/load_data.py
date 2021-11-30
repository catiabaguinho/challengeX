import csv
import psycopg2
import socket
import time

port = int(5432) # 5432

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
while True:
    try:
        s.connect(('db', port))
        s.close()
        break
    except socket.error as ex:
        time.sleep(0.1)


conn = psycopg2.connect("host='db' port='5432' dbname='test_db' user='pgadmin' password='Abc.1234%'")
cur = conn.cursor()

cur.execute("""

CREATE TABLE IF NOT EXISTS public.personas
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    first_name character varying(50) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default",
    company_name character varying(50) COLLATE pg_catalog."default",
    address character varying(50) COLLATE pg_catalog."default",
    city character varying(50) COLLATE pg_catalog."default",
    state character(2) COLLATE pg_catalog."default",
    zip character varying(10) COLLATE pg_catalog."default",
    phone1 character varying(15) COLLATE pg_catalog."default",
    phone2 character varying(15) COLLATE pg_catalog."default",
    email character varying(50) COLLATE pg_catalog."default",
    department character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT personas_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.personas
    OWNER to pgadmin;""")

cur.execute("""TRUNCATE TABLE public.personas;""")

with open('/usr/rawdata/Sample.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader) # Skip the header row.
    for row in reader:
        cur.execute("INSERT INTO public.personas  (first_name, last_name, company_name, address,city, state,zip, phone1, phone2, email, department) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);",
        row
    )
conn.commit()

print("Sucess!!")