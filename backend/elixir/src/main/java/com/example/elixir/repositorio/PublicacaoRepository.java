package com.example.elixir.repositorio;

import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.Publicacao;
import com.example.elixir.dominio.Receptor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PublicacaoRepository extends JpaRepository<Publicacao, Integer> {

    List<Receptor> findByDtPublicacao(LocalDate dtPublicacao);
    Optional<Publicacao> findById(Integer id);
}
