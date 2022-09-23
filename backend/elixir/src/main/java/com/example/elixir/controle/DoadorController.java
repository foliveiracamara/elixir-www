package com.example.elixir.controle;

import com.example.elixir.dominio.Doador;
import com.example.elixir.repositorio.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        var clienteOptional = repository.findById(id);
//        if (clienteOptional.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
        return clienteOptional.get();
    }

    // Exclusão de usuario
    @DeleteMapping("/{idDoador}")
    public void excluirPorId(@PathVariable Integer idDoador) {
        var clienteOptional = repository.findById(idDoador);
//        if (clienteOptional.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
        repository.delete(clienteOptional.get());
    }

    // Atualizar por ID
    @PutMapping("/{idDoador}")
    public Doador atualizarPorId(@PathVariable Integer idDoador, @RequestBody Doador doador) {
        repository.findById(idDoador);
//        if (clienteOptional.isEmpty()) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
        doador.setIdDoador(idDoador);
        return repository.save(doador);
    }


    @PostMapping("/acesso/{email}/{senha}")
    public ResponseEntity<String> logonUsuario(@PathVariable String email,
                                               @PathVariable String senha) {
        if(email.equals(repository.findByEmail(email)) && senha.equals(repository.findBySenha(senha))){
            return ResponseEntity.status(200)
                    .body("Usuario logado com sucesso!");
        }
        return ResponseEntity.status(403)
                .body("Email ou senha invalidos");
    }
}
