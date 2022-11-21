package com.example.elixir.controle;

import com.example.elixir.arquivos.ListaObj;
import com.example.elixir.arquivos.PilhaObj;
import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.Publicacao;
import com.example.elixir.dominio.Receptor;
import com.example.elixir.repositorio.PublicacaoRepository;
import com.example.elixir.repositorio.ReceptorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/publicacao")
public class PublicacaoController {

    @Autowired
    private PublicacaoRepository publicacaoRepository;

    PilhaObj<Publicacao> pilhaPublicacao = new PilhaObj(20);
    FilaObj<Publicacao> filaPublicacao = new FilaObj(20);

    @PostMapping
    public ResponseEntity<Publicacao> post(@RequestBody Publicacao novaPublicacao) {
        publicacaoRepository.save(novaPublicacao);
        return ResponseEntity.status(201).body(novaPublicacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Publicacao> get(@PathVariable @Valid int id) {
        return ResponseEntity.of(publicacaoRepository.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<Publicacao>> getListarPublicacoes() {
        List<Publicacao> listaPublicacoes = publicacaoRepository.findAll();

        for (Publicacao p : listaPublicacoes) {
            filaPublicacao.insert(p);
        }
        if (filaPublicacao.peek().getDtPublicacao().plusDays(7).equals(LocalDate.now())){
            publicacaoRepository.deleteById(filaPublicacao.poll().getIdPublicacao());
        }
        return ResponseEntity.status(200).body(listaPublicacoes);
    }


    @DeleteMapping("/{id}")

    public ResponseEntity<Doador> delete(@PathVariable int id){
        if (!repository.existsById(id)) {
            return ResponseEntity.status(404).build();

        }
        repository.deleteById(id);
        return ResponseEntity.status(200).build();
    }


    @DeleteMapping("/Publicacao/delete/{idPublicacao}")
    public ResponseEntity deletePublicacao(@PathVariable Integer idPublicacao){
        Publicacao p = publicacaoRepository.getById(idPublicacao);
        pilhaPublicacao.push(p);
        publicacaoRepository.delete(p);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/Publicacao/desfazer")
    public ResponseEntity desfazerPublicacao(){
        Publicacao p = pilhaPublicacao.peek();
        p.setIdPublicacao(pilhaPublicacao.peek().getIdPublicacao());
        publicacaoRepository.save(p);
        pilhaPublicacao.pop();
        return ResponseEntity.ok().build();
    }

}
