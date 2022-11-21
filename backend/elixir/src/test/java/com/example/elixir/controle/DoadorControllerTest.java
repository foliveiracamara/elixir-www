package com.example.elixir.controle;

import com.example.elixir.dominio.Doador;
import com.example.elixir.repositorio.DoadorRepository;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.constraints.Email;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class DoadorControllerTest {

    DoadorController doador = new DoadorController();


    private MockMvc mockMvc;

    @MockBean
    private DoadorRepository mockRepository;


    @Test
    void EfetuarlogonUsuarioComValoresNulos() {
        assertThrows(ResponseStatusException.class,
                () -> doador.logonUsuario(null, null));
    }
}