package com.example.elixir.repositorio;

import com.example.elixir.dominio.Publicacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface PublicacaoRepository extends JpaRepository<Publicacao, Integer> {

    List<Publicacao> findByDtPublicacao(LocalDate dtPublicacao);
    List<Publicacao> findByIdPublicacao(Integer idPublicacao);
    Publicacao getById(Integer idPublicacao);
    void deleteById(Integer idPublicacao);

}
