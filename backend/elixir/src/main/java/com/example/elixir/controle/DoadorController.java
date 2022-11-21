package com.example.elixir.controle;

import com.example.elixir.arquivos.ArqCsv;
import com.example.elixir.arquivos.ListaObj;
import com.example.elixir.dominio.Doador;
import com.example.elixir.repositorio.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/doador")
public class DoadorController {

    @Autowired
    private DoadorRepository repository;

    ListaObj<Doador> listaLeads = new ListaObj<Doador>(100);

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<Doador> cadastrar(@RequestBody Doador doador) {
        repository.save(doador);
        return ResponseEntity.status(201).body(doador);
    }

    //Lista Leads
    @GetMapping("/lista-leads")
    public ResponseEntity<List<Doador>> buscarLeads() {
        List<Doador> buscandoDaBase = repository.findAll();
        for (Doador d : buscandoDaBase){
            listaLeads.adiciona(d);
        }
        for (int i = 0; i < listaLeads.getTamanho(); i++) {
            listaLeads.getElemento(i).setCpf("null");
            listaLeads.getElemento(i).setSenha("null");
            listaLeads.getElemento(i).setDoadorOrgao("null");
            listaLeads.getElemento(i).setDtDoacao(null);
            listaLeads.getElemento(i).setDtNascimento(null);
            listaLeads.getElemento(i).setImagemPessooa(null);
        }
        return ResponseEntity.status(200).body(buscandoDaBase);
    }

    @GetMapping("/download-csv")
    public ResponseEntity<List<Doador>> downloadCsv() {
        ArqCsv.gravaArquivoCsv(listaLeads, "Lista de Doador");
        return ResponseEntity.status(200).build();
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

        if (Objects.isNull(email) || Objects.isNull(senha)) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Não insira valores nulos"
            );
        }

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
