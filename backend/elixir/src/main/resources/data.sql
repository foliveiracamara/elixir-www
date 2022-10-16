
insert into doador
(id_doador, cpf, doador_orgao, dt_doacao, dt_nascimento, email, imagem_pessoa, nome, senha, sexo, tipo_sanguineo)
values
    (1, '53888293009', 'teste', '2020-04-10', '2003-04-18', 'dudu.grani@hotmail.com', 'imagem', 'Eduardo', '12345', 'M', 'A'),
    (2, '89283982938', 'teste', '2010-05-13', '2000-05-18', 'coxinha@hotmail.com', 'imagem', 'Joao', '12345', 'M', 'A'),
    (3, '92839283989', 'teste', '2005-06-17', '1999-07-18', 'jogando@hotmail.com', 'imagem', 'Ana', '12345', 'M', 'A'),
    (4, '23232454454', 'teste', '2021-07-21', '1997-06-18', 'amigodopovo@hotmail.com', 'imagem', 'Maria', '12345', 'M', 'A'),
    (5, '54566767677', 'teste', '2013-08-09', '1933-08-18', 'backend@hotmail.com', 'imagem', 'Clonaldo', '12345', 'M', 'A'),
    (6, '23454556656', 'teste', '2017-09-23', '1923-09-18', 'sortudo@hotmail.com', 'imagem', 'Osvaldo', '12345', 'M', 'A'),
    (7, '34344545556', 'teste', '2009-10-01', '1985-01-18', 'azarado@hotmail.com', 'imagem', 'Fernanda', '12345', 'M', 'A');

insert into publicacao
(id_publicacao, descricao, dt_publicacao)
values
    (1, 'Preciso de Sangue no Hemocentro Paulista', '2005-06-17'),
    (2, 'Preciso de Sangue no Hemocentro Jardins', '2020-01-22'),
    (3, 'Preciso de Sangue no Hemocentro Aricanduva', '2021-05-10'),
    (4, 'Preciso de Sangue no Hemocentro das Nações', '2018-01-15'),
    (5, 'Preciso de Sangue no Hemocentro São Vicente', '2020-01-01'),
    (6, 'Preciso de Sangue no Hemocentro de Manaus', '2017-02-28');
