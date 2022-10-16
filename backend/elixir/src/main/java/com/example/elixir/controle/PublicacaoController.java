package com.example.elixir.controle;

import com.example.elixir.arquivos.ListaObj;
import com.example.elixir.dominio.Publicacao;
import com.example.elixir.dominio.Receptor;
import com.example.elixir.repositorio.PublicacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.support.SimpleTriggerContext;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/publicacao")
public class PublicacaoController {

    @Autowired
    private PublicacaoRepository repository;

    @PostMapping
    public ResponseEntity<Publicacao> post(@RequestBody @Valid Publicacao novaPublicacao) {
        repository.save(novaPublicacao);
        return ResponseEntity.status(201).body(novaPublicacao);
    }

    @GetMapping("/{dtPublicacao}") // localhost:8080/publicacao?dtPublicacao
    public ResponseEntity<Publicacao> getOrdenado(@RequestParam(required = false) int dtPublicacao) {
        return getOrdenado(dtPublicacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Publicacao> get(@PathVariable int id) {
        return ResponseEntity.of(repository.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }
}
