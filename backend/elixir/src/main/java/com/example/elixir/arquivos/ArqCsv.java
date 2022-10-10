package com.example.elixir.arquivos;

import com.example.elixir.dominio.Doador;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class ArqCsv {
    public static void gravaArquivoCsv(ListaObj<Doador> lista, String nomeArq) {
        FileWriter arq = null;     // objeto que representa o arquivo de gravação
        Formatter saida = null;    // objeto usado para escrever no arquivo
        Boolean deuRuim = false;
        nomeArq += ".csv";          // acrescenta a extensão ".csv" ao arquivo

        try {
            arq = new FileWriter(nomeArq, true);   // abre o arquivo
            saida = new Formatter(arq);     // cria o objeto saida associando ao arquivo
        }
        catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo");
            System.exit(1);
        }

        // Bloco que grava o arquivo
        try {
            for (int i = 0; i < lista.getTamanho();i++) {
                Doador doador = lista.getElemento(i);
                saida.format("%d;%s;%s;%s\n",
                        doador.getIdDoador(),
                        doador.getNome(),
                        doador.getEmail(),
                        doador.getTipoSanguineo(),
                        doador.getSexo());
            }
        }
        catch (FormatterClosedException erro) {
            System.out.println("Erro ao gravar arquivo");
            deuRuim = true;
        }
        finally {
            saida.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }

    public static void leExibeArquivoCsv(String nomeArq) {
        FileReader arq = null;      // objeto que representa o arquivo de leitura
        Scanner entrada = null;     // objeto usado para ler do arquivo
        Boolean deuRuim = false;
        nomeArq += ".csv";

        try {
            arq = new FileReader(nomeArq);
            entrada = new Scanner(arq).useDelimiter(";|\\n");
        }
        catch (FileNotFoundException erro) {
            System.out.println("Arquivo não encontrado");
            System.exit(1);
        }

        // Bloco para ler o arquivo
        try {
            System.out.printf("%-6S %-10S %10S %14S\n", "CÓDIGO", "NOME", "E-MAIL", "TIPO SANGUÍNEO");
            while(entrada.hasNext()) {
                Integer idDoador = entrada.nextInt();
                String nome = entrada.next();
                String email = entrada.next();
                String tipoSanguineo = entrada.next();

                System.out.printf("%06d %-10s %10S %14S\n", idDoador,nome,email,tipoSanguineo);
            }
        }
        catch (NoSuchElementException erro) {
            System.out.println("Arquivo com problemas");
            deuRuim = true;
        }
        catch (IllegalStateException erro) {
            System.out.println("Erro na leitura do arquivo");
            deuRuim = true;
        }
        finally {
            entrada.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }
}
