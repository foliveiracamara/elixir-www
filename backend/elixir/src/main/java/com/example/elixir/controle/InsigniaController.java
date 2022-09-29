package com.example.elixir.controle;

import com.example.elixir.repositorio.DoadorRepository;
import com.example.elixir.repositorio.InsigniaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/insignia")
public class InsigniaController {

    @Autowired
    private InsigniaRepository repository;



}
