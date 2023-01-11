## ATIVIDADES: semana 5 do Módulo 2: Criação de sites HTML/CSS, GIT para controle de versão e SQL. (parte 2)

Agora que você já sabe como utilizar o SGBD Postgres para criar uma base de dados, as tabelas e relacionamentos necessários, está na hora de se aprofundar na execução de comandos SQL.

1. Nesta atividade, utilize as tabelas Animal e Dono (dos exercícios mostrados nos vídeos), para:

- Criar a tabela Animal com os atributos: codanimal, nome, especie, sexo, cor e coddono
```bash
CREATE TABLE animal (
	codAnimal INT NOT NULL,
	nome VARCHAR(255),
	especie VARCHAR(150),
	sexo VARCHAR(150),
	cor VARCHAR(150),
	raca VARCHAR(150),
	peso DECIMAL(7,2),
	codDono INT, 
	PRIMARY KEY(codAnimal),
	CONSTRAINT fk_peso FOREIGN KEY (peso) REFERENCES peso (peso),
	CONSTRAINT fk_codDono FOREIGN KEY (codDono) REFERENCES dono (codDono)
);
```
Resultado:
| codAnimal | nome | especie | sexo | cor | raca | peso | codDono |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ... | ... | ... | ... | ... | ... | ... | ... |

- Criar a tabela Dono com os campos: coddono, nome, bairro
```bash
CREATE TABLE dono (
	codDono INT NOT NULL ,
	nome VARCHAR(150),
	email VARCHAR(150),
	cpf VARCHAR(150),
	telFixo VARCHAR(150),
	rg VARCHAR(150),
	telCel VARCHAR(150),
	logradouro VARCHAR(150),
	num INT,
	complemento VARCHAR(150),
	bairro VARCHAR(150),
	cidade VARCHAR(150),
	uf CHAR(2),
	cep VARCHAR(150),
	PRIMARY KEY (codDono)
);
```
Resultado:
| codDono | nome | email | cpf | telFixo | rg | telCel | logradouro | num | complemento | bairro | cidade | uf | cep |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

- Definir uma subconsulta para retornar o nome do `ANIMAL` cujo `DONO` mora no bairro Vila Nova
```bash
SELECT nome 
FROM animal 
WHERE codDono =(
	SELECT codDono 
	FROM dono 
	WHERE bairro='Vila Velha'
);
```
- Definir uma consulta com join para retornar os Donos (mesmo que não tenham pets associados) e a quantidade de pets que cada um possui
```bash
SELECT dono.nome as "Donos", count(animal.nome) as "Quantidade de pets" 
FROM dono 
LEFT OUTER JOIN animal ON dono.coddono = animal.coddono 
GROUP BY "Donos"
;
```

A partir dessas consultas é possível criar outros comandos para obter resultados mais específicos, além de juntar a utilização de operadores.

Como resultado, envie os comandos salvos em um arquivo de texto (.txt) para correção.


## REFERÊNCIA:

 - [Checklist de Testes de Segurança para QAs](https://medium.com/cwi-software/checklist-de-testes-de-seguran%C3%A7a-para-qas-fef900b798b6)
 - [Você precisa saber o que é SQL!](https://carreirasorbia.medium.com/voc%C3%AA-precisa-saber-o-que-%C3%A9-sql-79322fa71195)
 - [Khan Academy | Introdução a SQL: Consulta e gerenciamento de dados](https://pt.khanacademy.org/computing/computer-programming/sql)
 - [SQL com MySQL do básico ao avançado](https://medium.com/@viniciussantana_80882/sql-com-mysql-do-b%C3%A1sico-ao-avan%C3%A7ado-a1438b9ff662)
  - [Guia Completo de SQL](https://www.devmedia.com.br/guia/guia-completo-de-sql/38314)
