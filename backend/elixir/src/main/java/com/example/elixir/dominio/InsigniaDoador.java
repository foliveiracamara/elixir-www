package com.example.elixir.dominio;

import com.example.elixir.repositorio.InsigniaDoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.List;

@Entity
public class InsigniaDoador {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDoador;

    @Column
    private Integer fkInsignia;


    public Integer getFkInsignia() {
        return fkInsignia;
    }

    public void setFkInsignia(Integer fkInsignia) {
        this.fkInsignia = fkInsignia;
    }

}
