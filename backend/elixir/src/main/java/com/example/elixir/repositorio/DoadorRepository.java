package com.example.elixir.repositorio;

import com.example.elixir.dominio.Doador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoadorRepository extends JpaRepository<Doador, Integer> {

    Optional<Doador> findByIdDoador(Integer idDoador);

    Optional<Doador> findByEmail(String email);

    Optional<Doador> findBySenha(String senha);

    Optional<Doador> findByEmailAndSenha(String email, String senha);

    String findByNome(String nome);

//    Integer findByID(Integer idDoador);
}
