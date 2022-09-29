package com.example.elixir.controle;

import com.example.elixir.dominio.Publicacao;
import com.example.elixir.dominio.Receptor;
import com.example.elixir.repositorio.PublicacaoRepository;
import com.example.elixir.repositorio.ReceptorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/receptor")
public class ReceptorController {

    @Autowired
    private ReceptorRepository repository;

    @PostMapping
    public ResponseEntity<Receptor> post(@RequestBody @Valid Receptor novoReceptor) {
        repository.save(novoReceptor);
        return ResponseEntity.status(201).body(novoReceptor);
    }

    @GetMapping
    public ResponseEntity<List<Receptor>> get() {
        List<Receptor> lista = repository.findAll();
        return lista.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(lista);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Receptor> get(@PathVariable int id) {
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
