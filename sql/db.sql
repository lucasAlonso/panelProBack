CREATE TABLE IF NOT EXISTS projects(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    startdate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done  BOOLEAN,
    description text,
    projectId INTEGER REFERENCES projects(id)
);

INSERT INTO projects(name,priority,description,startdate)
    VALUES('ALTAS CUMBRE', 1 , 'ALTAS CUMBRES SUBDIVISION', '2021-05-12');
INSERT INTO projects(name,priority,description,startdate)
    VALUES('ALTAS CUMBRE2', 5,  'ALTAS CUMBRES MENSURA', '2021-05-12');
INSERT INTO projects(name,priority,description,startdate)
    VALUES('ALTAS CUMBRE3', 4 , 'ALTAS CUMBRES PARCELA', '2021-05-12');

INSERT INTO tasks(name,done,description,projectId)
    VALUES('hacer mensura',false, 'realizar mensura lote',1);
INSERT INTO tasks(name,done,description,projectId)
    VALUES('hacer mensura',false,'realizar mensura lote',2);
INSERT INTO tasks(name,done,description,projectId)
    VALUES('hacer mensura',false,'realizar mensura lote',3);