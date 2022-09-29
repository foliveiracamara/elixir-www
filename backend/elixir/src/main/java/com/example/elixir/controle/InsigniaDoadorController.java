package com.example.elixir.controle;


import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.InsigniaDoador;
import com.example.elixir.repositorio.InsigniaDoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/insigniadoador")
public class InsigniaDoadorController<Insignia> {

    @Autowired
    private InsigniaDoadorRepository repository;

    @PostMapping
    public ResponseEntity<InsigniaDoador> post(@RequestBody @Valid InsigniaDoador novaInsigia) {
        repository.save(novaInsigia);
        return ResponseEntity.status(201).body(novaInsigia);
    }

    @GetMapping
    public ResponseEntity<List<InsigniaDoador>> get() {
        List<InsigniaDoador> lista = repository.findAll();
        return lista.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(lista);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InsigniaDoador> get(@PathVariable int id) {
        return ResponseEntity.of(repository.findById(id));
    }


}
