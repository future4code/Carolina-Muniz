EXERCICIO 1
a) VARCHAR(255) PRIMARY KEY - tipagem de string com no máximo 255 caracteres e chave única
   VARCHAR (255) NOT NULL - tipagem de string com no máximo 255 caracteres e não o parâmetro não pode ser null
   DATE NOT NULL - tipagem de data e não o parâmetro não pode ser null
   VARCHAR(6) NOT NULL - tipagem de string com no máximo 6 caracteres e não o parâmetro não pode ser null

CREATE TABLE Actor 
(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

b) SHOW DATABASES - aparece as informações do DataBase: information schemas e julian_carolina_muniz_db
   SHOW TABLES - aparece todas as tabelas criadas no julian_carolina_muniz_db

c) Ao passar o SHOW Actor dá o Error Code: 1064. Acredito que seja um erro de sintaxe, pois ao escrever actor com todas 
as letras minúsculas ele me mostra as informações da minha tabela



EXERCÍCIO 2
Ao tentar inserir o Tony Ramos gera o Error Code 1136, onde a quantidade dos campos passados não é igual com a quantidade dos valores inseridos dos parâmetros da tabela.

a)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) Gera o Error Code: 1062. Duplicidade em uma key 'PRIMARY', que deve ser única

c) Gera o Error Code 1136, onde a quantidade dos campos passados não é igual com a quantidade dos valores inseridos dos parâmetros da tabela. Passo 3 parâmetros e insiro 5 valores. 

d) Gera o Error Code: 1364. O parâmetro name não foi passado.

e) Gera o Error Code: 1292. O parâmetro birth_date não foi passado entre ""

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Cláudia Raia",
  100000,
  "1966-12-23", 
  "female"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Miguel Falabella",
  100000,
  "1956-10-10", 
  "male"
);



EXERCICIO 3
a) SELECT * from actor WHERE gender = "female";

b) SELECT salary from actor WHERE name = "Ney Latorraca";

c) Retorna o Error Code: 1054. Parâmetro incorreto passado em genger;

d) SELECT id, name, salary FROM actor WHERE salary >= 500000;

e) SELECT id, nome from Actor WHERE id = "002" Error Code: 1054. Parâmetro 'nome' não existe na lista actor
   Correto: SELECT id, name from actor WHERE id = "002";



EXERCÍCIO 4
SELECT * from actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
a) Selecionar tudo da tabela actor cujo o name comece com C ou R, e que tenha salary maior que R$300.000

b) SELECT * from actor WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * from actor WHERE name LIKE "%G%" OR "%g%";

d) SELECT * from actor WHERE (name LIKE "%a%" OR "%A%" OR name LIKE "%g%" OR "%G%") AND salary BETWEEN 350000 AND 900000;


EXERCICIO 5
a)
CREATE TABLE movie (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
	nota_avaliacao VARCHAR (2) NOT NULL
);

b) INSERT INTO movie 
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

c) INSERT INTO movie 
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

d) INSERT INTO movie 
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

e) INSERT INTO movie 
VALUES (
"004",
"Tropa de Elite",
"O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
"2007-10-12",
9
);


EXERCICIO 6
a) SELECT id, nome, nota_avaliacao FROM movie WHERE id=001;

b) SELECT * FROM movie WHERE nome="Tropa de Elite";

c) SELECT id, nome, nota_avaliacao FROM movie WHERE nota_avaliacao>=7;


EXERCICIO 7
a) SELECT * FROM movie WHERE nome LIKE "%vida%";

b) SELECT * FROM movie WHERE nome LIKE "%dona%" OR sinopse LIKE "%dona%";

c) SELECT * FROM movie WHERE data_lancamento < "2020-07-06";

d) SELECT * FROM movie WHERE data_lancamento < "2020-07-06" AND 
                             (nome LIKE "%elite%" OR sinopse LIKE "%elite%") AND 
                             nota_avaliacao > 7;










 

