package com.example.elixir.dominio;

import javax.persistence.*;

@Entity
public class InsigniaDoador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDoador;

    @Column
    private Integer fkInsignia;

    @Column
    private Integer fkDoador;

    public Integer getFkInsignia() {
        return fkInsignia;
    }

    public void setFkInsignia(Integer fkInsignia) {
        this.fkInsignia = fkInsignia;
    }

    public Integer getFkDoador() {
        return fkDoador;
    }

    public void setFkDoador(Integer fkDoador) {
        this.fkDoador = fkDoador;
    }
}
