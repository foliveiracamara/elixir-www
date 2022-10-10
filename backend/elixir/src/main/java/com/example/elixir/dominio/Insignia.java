package com.example.elixir.dominio;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
public class Insignia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idInsignia;

    @Column
    @NotBlank
    private String descricao;

    @Column
    @NotBlank
    private String nome;

    @Column
    private String imagem;

    @ManyToMany
    private List<Doador> fkDoador;

    public Integer getIdInsignia() {
        return idInsignia;
    }

    public void setIdInsignia(Integer idInsignia) {
        this.idInsignia = idInsignia;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public List<Doador> getFkDoador() {
        return fkDoador;
    }

    public void setFkDoador(List<Doador> fkDoador) {
        this.fkDoador = fkDoador;
    }
}
