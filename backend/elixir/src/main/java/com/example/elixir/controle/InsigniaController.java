//package com.example.elixir.controle;
//
//import com.example.elixir.dominio.Insignia;
//import com.example.elixir.dominio.InsigniaDoador;
//import com.example.elixir.repositorio.DoadorRepository;
//import com.example.elixir.repositorio.InsigniaRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//
//@RestController
//@RequestMapping("/insignia")
//public class InsigniaController {
//
//    @Autowired
//    private InsigniaRepository repository;
//
//    @PostMapping
//    public ResponseEntity<Insignia> post(@RequestBody @Valid Insignia novaInsigia) {
//        repository.save(novaInsigia);
//        return ResponseEntity.status(201).body(novaInsigia);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> delete(@PathVariable @Valid int id){
//        if (repository.existsById(id)) {
//            repository.deleteById(id);
//            return ResponseEntity.status(200).build();
//        }
//        return ResponseEntity.status(404).build();
//    }
//
//}
