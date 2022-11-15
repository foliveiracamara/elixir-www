package com.example.elixir.repositorio;

import com.example.elixir.dominio.Receptor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReceptorRepository extends JpaRepository<Receptor, Integer> {

}
