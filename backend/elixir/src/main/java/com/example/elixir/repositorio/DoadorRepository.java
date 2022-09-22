package com.example.elixir.repositorio;

import com.example.elixir.dominio.Doador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoadorRepository extends JpaRepository<Doador, Integer> {

    String findByEmail(String email);
    String findBySenha(String senha);

    String findByNome(String nome);
}
