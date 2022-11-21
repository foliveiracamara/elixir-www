package com.example.elixir.repositorio;

import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.Publicacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PublicacaoRepository extends JpaRepository<Publicacao, Integer> {

    List<Receptor> findByDtPublicacao(LocalDate dtPublicacao);
    Optional<Publicacao> findById(Integer id);
    List<Publicacao> findByDtPublicacao(LocalDate dtPublicacao);
    List<Publicacao> findByIdPublicacao(Integer idPublicacao);
    Publicacao getById(Integer idPublicacao);
    void deleteById(Integer idPublicacao);

}
