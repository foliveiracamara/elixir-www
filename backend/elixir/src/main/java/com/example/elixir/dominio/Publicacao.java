package com.example.elixir.dominio;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPublicacao;

    @Column
    @NotBlank
    private String descricao;

    @Column
    @PastOrPresent
    private LocalDate dtPublicacao;

    @OneToMany
    private List<Doador> fkDoador;

    public Integer getOrdenado(@NotNull Integer[] dtPublicacao) {

        for (int i = 0; i < dtPublicacao.length-1; i++) {
            for (int j = i + 1; j < dtPublicacao.length; j++) {
                if (dtPublicacao[j] < dtPublicacao[i]) {
                    int aux = dtPublicacao[i];
                    dtPublicacao[i] = dtPublicacao[j];
                    dtPublicacao[j] = aux;
                }
            }
        }
        return dtPublicacao.length;
    }

    public Integer getIdPublicacao() {
        return idPublicacao;
    }

    public void setIdPublicacao(Integer idPublicacao) {
        this.idPublicacao = idPublicacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Doador> getFkDoador() {
        return fkDoador;
    }

    public void setFkDoador(List<Doador> fkDoador) {
        this.fkDoador = fkDoador;
    }

    public LocalDate getDtPublicacao() {
        return dtPublicacao;
    }

    public void setDtPublicacao(LocalDate dtPublicacao) {
        this.dtPublicacao = dtPublicacao;
    }
}
