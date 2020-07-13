EXERCÍCIO 1
a) é a chave que faz a relação entre duas ou mais tabelas.
b) 
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("2", "Filme muito bom", 8, "002"); 

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Não conseguiu fazer relação com a tabela pai, pois o id passado como parâmetro não existe.

d)
ALTER TABLE movie 
DROP COLUMN nota_avaliacao;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Não se consegue deletar, pois informa que há uma relação com outra tabela.


EXERCÍCIO 2
a) Cria uma tabela MovieCast que será relacionada a 2 outras tabelas, movie e actor. 
Essa relação é feita através das FOREIGN KEY, onde o movie_id está relacionado ao id da tabela movie
e o actor-id está relacionado ao id da tabela actor

b) 
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movie(id),
    FOREIGN KEY (actor_id) REFERENCES actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
"002", "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
"002", "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
"003", "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
"003", "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
"004", "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
"004", "004"
);

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.
Não é possível adicionar ou atualizar uma linha filho.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails.
Não se consegue deletar, pois informa que há uma relação com outra tabela.


EXERCÍCIO 3
a) Faz uma comparação da tabela movie com a rating, retornando os ids que contém em ambas. Excluindo da visualização os ids da rating que não estão relacionados com movie.
O ON representa a condição de comparação.

b)
SELECT nome, movie.id AS 'id', rate AS 'nota'
FROM
    movie INNER JOIN Rating 
ON movie.id = Rating.movie_id;


EXERCÍCIO 4
a)
SELECT nome, movie.id, rate, comment FROM movie
LEFT JOIN Rating ON movie.id = Rating.movie_id;

b)
SELECT movie.id, nome, MovieCast.actor_id FROM movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = movie.id;

c)
SELECT AVG(Rating.rate), movie.id, movie.nome FROM movie
LEFT JOIN Rating ON movie.id = Rating.movie_id
GROUP BY movie.id;

EXERCICIO 5
a)










