package com.example.elixir.dominio;

import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.PastOrPresent;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.OneToMany;

@Entity
public class Doador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDoador;

    @Column
    @NotBlank
    private String nome;

    //    @CPF
    @Column
    @NotBlank
    private String cpf;

    @Column(unique = true)
    @NotBlank
    private String email;

    @Column
    @NotBlank
    private String senha;

    @Column
    @NotBlank
    private String sexo;

    @Column
    @NotBlank
    private String tipoSanguineo;

    @Column
    @NotBlank
    private String doadorOrgao;

    @Column
    //  @NotBlank
    private String imagemPessooa;

    @Column
//    @PastOrPresent
    private LocalDate dtDoacao;

    @Column
//    @Past
    private LocalDate dtNascimento;

    @ManyToOne
    private Publicacao publicacoes;

    @ManyToMany
    private List<InsigniaDoador> insigniaDoador;


    public Integer getIdDoador() {
        return idDoador;
    }

    public void setIdDoador(Integer idDoador) {
        this.idDoador = idDoador;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public String getSenha() {
//        return senha;
//    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public String getDoadorOrgao() {
        return doadorOrgao;
    }

    public void setDoadorOrgao(String doadorOrgao) {
        this.doadorOrgao = doadorOrgao;
    }

    public String getImagemPessooa() {
        return imagemPessooa;
    }

    public void setImagemPessooa(String imagemPessooa) {
        this.imagemPessooa = imagemPessooa;
    }

    public LocalDate getDtDoacao() {
        return dtDoacao;
    }

    public void setDtDoacao(LocalDate dtDoacao) {
        this.dtDoacao = dtDoacao;
    }

    public LocalDate getDtNascimento() {
        return dtNascimento;
    }

    public void setDtNascimento(LocalDate dtNascimento) {
        this.dtNascimento = dtNascimento;
    }

    public Publicacao getPublicacoes() {
        return publicacoes;
    }

    public void setPublicacoes(Publicacao publicacoes) {
        this.publicacoes = publicacoes;
    }
}