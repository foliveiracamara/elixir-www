package com.example.elixir.dominio;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPublicacao;

    @Column
    @NotBlank
    private String descricao;


    @OneToMany
    private List<Doador> fkDoador;

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
}
