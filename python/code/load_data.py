import csv
import psycopg2
conn = psycopg2.connect("host='localhost' port='5432' dbname='test_db' user='pgadmin' password='Abc.1234%'")
cur = conn.cursor()
cur.execute("""TRUNCATE TABLE public.personas;""")
with open('Sample.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader) # Skip the header row.
    for row in reader:
        cur.execute("INSERT INTO public.personas  (first_name, last_name, company_name, address,city, state,zip, phone1, phone2, email, department) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);",
        row
    )
conn.commit()

print("Sucess!!")