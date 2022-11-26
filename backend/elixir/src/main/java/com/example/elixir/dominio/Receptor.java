package com.example.elixir.dominio;

import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;
import java.sql.Struct;
import java.time.LocalDate;

@Entity
public class Receptor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReceptor;

    @Column
    @NotBlank
    private String nome;

    @Column
    @NotBlank
    private String cpf;

    @Column
    @PastOrPresent
    private LocalDate dtNascimento;

    @Column
    @NotBlank
    private String nomeHospital;

    @Column
    @NotBlank
    private String cep;

    @Column
    @NotBlank
    private String tipoSanguineo;

    @Column
    @NotBlank
    private String genero;

    @Column
    @NotBlank
    private String tel;
    
    public Receptor(Integer idReceptor, String nome, String nomeHospital, String cep, String tipoSanguineo) {
        this.idReceptor = idReceptor;
        this.nome = nome;
        this.nomeHospital = nomeHospital;
        this.cep = cep;
        this.tipoSanguineo = tipoSanguineo;
    }

    public Integer getIdReceptor() {
        return idReceptor;
    }


    public void setIdReceptor(Integer idReceptor) {
        this.idReceptor = idReceptor;
    }
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public LocalDate getDtNascimento() {
        return dtNascimento;
    }

    public void setDtNascimento(LocalDate dtNascimento) {
        this.dtNascimento = dtNascimento;
    }

    public String getNomeHospital() {
        return nomeHospital;
    }

    public void setNomeHospital(String nomeHospital) {
        this.nomeHospital = nomeHospital;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }
}
