package com.example.elixir.controle;

import com.example.elixir.dominio.Doador;
import com.example.elixir.repositorio.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doador")
public class DoadorController {

    @Autowired
    private DoadorRepository repository;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Doador cadastrar(@RequestBody Doador doador) {
        return repository.save(doador);
    }

    // Listar usuarios
    @GetMapping
    public List<Doador> listar() {
        return repository.findAll();
    }

    // Buscar por ID
    @GetMapping("/{idDoador}")
    public Doador buscarPorId(@PathVariable Integer id) {
        var usuario = repository.findById(id);
        return usuario.get();
    }

    // Exclusão de usuario
    @DeleteMapping("/{idDoador}")
    public void excluirPorId(@PathVariable Integer idDoador) {
        var usuario = repository.findById(idDoador);
        repository.delete(usuario.get());
    }

    // Atualizar por ID
    @PutMapping("/{idDoador}")
    public ResponseEntity atualizarPorId(@PathVariable Integer idDoador, @RequestBody Doador doador) {
            doador.setIdDoador(idDoador);
            repository.save(doador);
            return ResponseEntity.status(200).body("Usuario alterado");
}

    @PostMapping("/acesso/{email}/{senha}")
    public ResponseEntity<Doador> logonUsuario(@PathVariable String email,
                                               @PathVariable String senha) {
        Optional<Doador> doador = repository.findByEmail(email);
        Optional<Doador> password = repository.findBySenha(senha);

            if (doador.isPresent() && password.isPresent()) {
                return ResponseEntity.ok().build();
            }

        return ResponseEntity.status(401).build();
    }

    @DeleteMapping("/desloga/{email}/{senha}")
    public ResponseEntity<Doador> logooffUsuario(@PathVariable String email,
                                                 @PathVariable String senha) {
        Optional<Doador> doador = repository.findByEmail(email);
        Optional<Doador> password = repository.findBySenha(senha);

        if (doador.isPresent() && password.isPresent()) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(401).build();
    }
}
