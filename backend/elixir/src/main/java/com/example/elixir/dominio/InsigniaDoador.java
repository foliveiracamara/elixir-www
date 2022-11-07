//package com.example.elixir.dominio;
//
//import com.example.elixir.repositorio.InsigniaDoadorRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//public class InsigniaDoador {
//
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer insigniaDoador;
//
//    @ManyToMany
//    private Doador doador;
//
//    @ManyToMany
//    private Insignia insignia;
//
//
//    public Integer getInsigniaDoador() {
//        return insigniaDoador;
//    }
//
//    public void setInsigniaDoador(Integer insigniaDoador) {
//        this.insigniaDoador = insigniaDoador;
//    }
//
//    public Doador getDoador() {
//        return doador;
//    }
//
//    public void setDoador(Doador doador) {
//        this.doador = doador;
//    }
//
//    public Insignia getInsignia() {
//        return insignia;
//    }
//
//    public void setInsignia(Insignia insignia) {
//        this.insignia = insignia;
//    }
//}
