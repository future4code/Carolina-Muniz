EXERCÍCIO 1
a) Faz uma alteração na tabela Actor, onde a coluna salary será excluída.
b) Fazer alteração do nome da coluna gender para sex, usando a tipagem de string e no máximo 6 caracteres.
c) Mantém o nome da coluna gender, mas muda a tipagem de string para no máximo 255 caracteres.
d) 
ALTER TABLE actor 
CHANGE gender gender 
VARCHAR(100);

EXERCÍCIO 2
a) 
UPDATE actor 
SET name = "Joaquim",
	birth_date = "1980-05-03"
WHERE id=003;

b) 
UPDATE actor 
SET name = "JULIANA PÃES"
WHERE name = "Joaquim";

UPDATE actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

c)
UPDATE actor 
SET name = "Camila Pitanga",
	salary = 200000,
    birth_date = "1977-06-14",
    gender = "female"
WHERE id = 005;

d) 
UPDATE actor 
SET name = "Camila Pitanga",
	salary = 200000
WHERE id = 010;

Não gerou um erro, porém informou que 0 linhas foram alteradas. Pois não localizou o id solicitado.

EXERCÍCIO 3
a)
DELETE FROM actor 
WHERE name = "Glória Pires";

b)
DELETE FROM actor 
WHERE gender = "male"
AND salary > 1000000;


EXERCÍCIO 4
a) 
SELECT MAX(salary) FROM actor;

b)
SELECT MIN(salary) 
FROM actor 
WHERE gender = "female";

c)
SELECT COUNT(*)
FROM actor 
WHERE gender = "female";

d)
SELECT SUM(salary)
FROM actor;

EXERCÍCIO 5
a) Retorna quantos female e quantos male há na tabela.

b)
SELECT id, name
FROM actor
ORDER BY name DESC;;

c)
SELECT *
FROM actor
ORDER BY salary ASC;

d)
SELECT *
FROM actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender
FROM actor
GROUP BY gender;

EXERCÍCIO 6
a) 
ALTER TABLE movie
ADD data_limite_exibicao DATE;

b) 
ALTER TABLE movie
CHANGE nota_avaliacao nota_avaliacao FLOAT;

c)
UPDATE movie
SET data_lancamento = "2020-07-07"
WHERE id="002";

d)
DELETE FROM movie
WHERE id="001";

UPDATE movie
SET sinopse = "nova sinopse"
WHERE id="001";

Não mostra um erro, porém diz que 0 linhas foram alteradas. Acredito que aconteça pois o comando está correto, mas o id não foi encontrado.

EXERCÍCIO 7
a)
SELECT COUNT(*) FROM movie
WHERE nota_avaliacao>7.5;

b)
SELECT AVG(nota_avaliacao) FROM movie;

c) 
SELECT COUNT(*) FROM movie
WHERE data_limite_exibicao > CURDATE();

d)
SELECT COUNT(*) FROM movie
WHERE data_lancamento < CURDATE();

e)
SELECT MAX(nota_avaliacao) FROM movie;

f)
SELECT MIN(nota_avaliacao) FROM movie;

EXERCÍCIO 8
a)
SELECT * FROM movie
ORDER BY nome ASC;

b)
SELECT * FROM movie
ORDER BY nome DESC
LIMIT 5;

c)
SELECT * FROM movie
WHERE data_lancamento < CURDATE()
ORDER BY data_lancamento DESC
LIMIT 3;

d)
SELECT * FROM movie
ORDER BY nota_avaliacao DESC
LIMIT 3;


