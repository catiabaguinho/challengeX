-- Table: public.personas

-- DROP TABLE public.personas;

CREATE TABLE public.personas
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
    OWNER to pgadmin;