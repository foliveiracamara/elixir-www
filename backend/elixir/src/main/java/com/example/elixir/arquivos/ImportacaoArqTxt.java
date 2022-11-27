package com.example.elixir.arquivos;

import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.Receptor;

import java.io.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class ImportacaoArqTxt {

    public static void gravaRegistro(String registro, String nomeArq) {
        BufferedWriter saida = null;

        // try-catch para abrir o arquivo
        try {
            saida = new BufferedWriter(new FileWriter(nomeArq,true));
        }
        catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo");
            erro.printStackTrace();
        }

        // try-catch para gravar e fechar o arquivo
        try {
            saida.append(registro + "\n");
            saida.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao gravar o arquivo");
            erro.printStackTrace();
        }
    }

    public static void gravaArquivoTxt(List<Doador> lista, List<Receptor> lista2, String nomeArq) {
        int contaRegDados = 0;

        // Monta o registro de header
        String header = "00DOADOR";
        header += LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
        header += "01";

        // Grava o registro de header
        gravaRegistro(header, nomeArq);

        // Monta e grava os registros de corpo (ou de dados)
        String corpo1;
        for (Doador doador : lista) {
            corpo1 = "02";
            corpo1 += String.format("%-10.10s", doador.getIdDoador());
            corpo1 += String.format("%-50.50s", doador.getNome());
            corpo1 += String.format("%-30.30s", doador.getEmail());
            corpo1 += String.format("%-10.10s", doador.getSexo());
            corpo1 += String.format("%-5.5s", doador.getTipoSanguineo());
          //  corpo1 += String.format("%10s",doador.getDtNascimento());
            gravaRegistro(corpo1, nomeArq);
            contaRegDados++;
        }

        String corpo2;
        for (Receptor receptor : lista2) {
            corpo2 = "02";
            corpo2 += String.format("%-10.10s", receptor.getIdReceptor());
            corpo2 += String.format("%-40.40s", receptor.getNome());
            corpo2 += String.format("%-50.50s", receptor.getNomeHospital());
            corpo2 += String.format("%-10.10s", receptor.getCep());
            corpo2 += String.format("%-5.5s", receptor.getTipoSanguineo());
            gravaRegistro(corpo2, nomeArq);
            contaRegDados++;
        }

        // Monta e grava o registro de trailer
        String trailer = "01";
        trailer += String.format("%010d", contaRegDados);

        gravaRegistro(trailer, nomeArq);
    }

    public static void leArquivoTxt(String nomeArq) {
        BufferedReader entrada = null;
        String registro, tipoRegistro;
        String nome, nomeReceptor, email, sexo, tipoSanguineo,tipoSanguineoReceptor, nomeHospital, cep;
        Integer idDoador, idReceptor;
        //LocalDate dtNascimento;
        int contaRegDadoLido = 0;
        int qtdRegDadoGravado;

        List<Doador> listaLida = new ArrayList();
        List<Receptor> listaLida2 = new ArrayList();

        // try-catch para abrir o arquivo
        try {
            entrada = new BufferedReader(new FileReader(nomeArq));
        }
        catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo");
            erro.printStackTrace();
        }

        // try-catch para ler e fechar o arquivo
        try {
            // Leitura o 1o registro do arquivo
            registro = entrada.readLine();

            while (registro != null) {
                tipoRegistro = registro.substring(0, 2);
                if (tipoRegistro.equals("00")) {
                    System.out.println("Registro de header");
                    System.out.println("Tipo de arquivo: " + registro.substring(2, 8));
                    System.out.println("Data e hora da gravação: " + registro.substring(8, 27));
                    System.out.println("Versão do documento: " + registro.substring(27, 29));
                }
                else if (tipoRegistro.equals("01")) {
                    System.out.println("Registro de trailer");
                    qtdRegDadoGravado = Integer.parseInt(registro.substring(2, 12));
                    System.out.println("Quantidade de reg de dados lidos: " + contaRegDadoLido);
                    System.out.println("Quantidade de reg de dados gravados: " + qtdRegDadoGravado);
                    if (contaRegDadoLido == qtdRegDadoGravado) {
                        System.out.println("Quantidade de registros de dados lidos compatível com "
                                + "quantidade de registros de dados gravados");
                    }
                    else {
                        System.out.println("Quantidade de registros de dados lidos incompatível com "
                                + "quantidade de registros de dados gravados");
                    }
                }
                else if (tipoRegistro.equals("02")) {
                    System.out.println("Registro de corpo");
                    idDoador = Integer.valueOf(registro.substring(2, 7).trim());
                    nome = registro.substring(7, 37).trim();
                    email = registro.substring(37, 57).trim();
                    sexo = registro.substring(57, 67).trim();
                    tipoSanguineo = registro.substring(67, 69).trim();
                    //dtNascimento = LocalDate.parse(registro.substring(69, 79).trim());
                    idReceptor = Integer.valueOf(registro.substring(2, 7).trim());
                    nomeReceptor = registro.substring(7, 37).trim();
                    nomeHospital = registro.substring(37, 67).trim();
                    cep = registro.substring(67, 80).trim();
                    tipoSanguineoReceptor = registro.substring(80, 82).trim();
                    contaRegDadoLido++;

                    // Instancia um objeto Doador com as informações lidas
                    Doador doador = new Doador(idDoador, nome, email, sexo, tipoSanguineo);

                    Receptor receptor = new Receptor(idReceptor, nomeReceptor, nomeHospital, cep, tipoSanguineoReceptor);

                    // No Projeto de PI, pode fazer
                    // repository.save(doador)

                    // No nosso caso, como não estamos conectados ao banco
                    // vamos adicionar o objeto a na listaLida
                    listaLida.add(doador);

                }
                else {
                    System.out.println("Tipo de registro inválido!");
                }

                // Lê o próximo registro
                registro = entrada.readLine();
            }
            // Fecha o arquivo
            entrada.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao ler o arquivo");
            erro.printStackTrace();
        }

        // Exibe a lista lida de doadores
        System.out.println("\nConteúdo da lista lida do arquivo:");
        for (Doador doador : listaLida) {
            System.out.println(doador);
        }

    }
    public static void main(String[] args) {
        List<Doador> lista = new ArrayList();

        lista.add(new Doador(100, "Bruno de A Tavares", "bruno@sptech.com.br",
                "Masculino", "A+"));

        System.out.println("Lista original de doadores:");
        for (Doador doador : lista) {
            System.out.println(doador);
        }

        List<Receptor> lista2 = new ArrayList();

        lista2.add(new Receptor(200, "João Doido", "Albert Einstein",
                "13520-000", "A-"));


        System.out.println("Lista original de receptores:");
        for (Receptor receptor : lista2) {
            System.out.println(receptor);
        }

        gravaArquivoTxt(lista, lista2,"doadores-receptores.txt");
        leArquivoTxt("doadores-receptores.txt");
    }
}



