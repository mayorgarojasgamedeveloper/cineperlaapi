-- Database: cineperla

-- DROP DATABASE cineperla;

CREATE DATABASE cineperla
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
-- CREACION DE TABLAS
create table usuario (	
    usuarioId		serial,
    nombre			varchar(40) NOT NULL,
    apellido		varchar(40) NOT NULL,
    correo			varchar(40) NOT NULL,
    contrasena		varchar(50) NOT NULL,
    premium			bool NOT NULL DEFAULT false,
    cartera			int NOT NULL DEFAULT 0,
    usuario			varchar(20) NOT NULL UNIQUE,
    primary key (usuarioId)
);

create table admin (
    adminId			serial,
    nombre			varchar(40) NOT NULL,
    apellido		varchar(40) NOT NULL,
    correo			varchar(40) NOT NULL,
    contrasena		varchar(50) NOT NULL,
    usuario			varchar(20) NOT NULL UNIQUE,
    primary key(adminId)
);

create table pelicula (
    peliculaId		serial,
    nombre			varchar(50) NOT NULL,
    sinopsis		varchar(800) NOT NULL,
    categoria		varchar(20) NOT NULL,
    duracion		smallint NOT NULL,
    restriccion	varchar(5) NOT NULL,
    director		varchar(100) NOT NULL,
    actores			varchar(200) NOT NULL,
    portada			varchar(150),
    primary key(peliculaId)
);

create table recibo (	
    reciboId		serial,
    usuarioId		int NOT NULL,
    peliculaId		int NOT NULL,
    funcionId		int NOT NULL,
    boletos			smallint NOT NULL,
    total			int NOT NULL,
    primary key (reciboId)
);

create table funcion ( 	
    funcionId		serial,
    peliculaId		int NOT NULL,
    dia				varchar(15) NOT NULL,
    hora			varchar(8) NOT NULL,
    asientos		int DEFAULT 0,
    primary key(funcionId)
);

create table log (	 
    logId			serial,
    info			varchar(50) NOT NULL,
    pelicula		varchar(50) NOT NULL,
    dia				timestamp NOT NULL,
    primary key(logId)
);


-- TRIGGERS
create or replace function log_agregar_pelicula()
returns trigger as
$BODY$
begin
insert into log(info,pelicula,dia) values(': Se agrego la pelicula: ', new.nombre, CURRENT_TIMESTAMP);
return new;
end;
$BODY$
language plpgsql;

create trigger trigger_log_agregar_pelicula
after insert
on pelicula
for each row
execute procedure log_agregar_pelicula(); 

create or replace function log_eliminar_pelicula()
returns trigger as
$BODY$
begin
insert into log(info,pelicula,dia) values(': Se elimino la pelicula: ', old.nombre, CURRENT_TIMESTAMP);
return old;
end;
$BODY$
language plpgsql;

create trigger trigger_log_eliminar_pelicula
after delete
on pelicula
for each row
execute procedure log_eliminar_pelicula();

-- DROP all
drop function log_agregar_pelicula();
DROP TRIGGER trigger_log_agregar_pelicula ON pelicula;

drop function log_eliminar_pelicula();
DROP TRIGGER trigger_log_eliminar_pelicula ON pelicula;

drop table admin,funcion,log,pelicula,recibo,usuario;
drop table admin;