INSERT INTO tb_inscripciones (nombre, apellido, dni, curso, email, telefono)
    VALUES (?,?,?,?,?,?)

CREATE USER 'node'@'localhost' IDENTIFIED BY 'admin123456';
GRANT ALL PRIVILEGES ON bdd_cursos.* TO 'node'@'localhost';
FLUSH PRIVILEGES;

INSERT INTO tb_inscripciones (nombre, apellido, dni, curso, email, telefono) VALUES (?, ?, ?, ?, ?, ?);