package com.example.elixir.controle;

import com.example.elixir.dominio.Doador;
import com.example.elixir.repositorio.DoadorRepository;
import nonapi.io.github.classgraph.utils.Assert;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
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
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@SpringBootTest(classes = DoadorController.class)
class DoadorControllerTest {

    @Autowired
    DoadorController controller;
    @MockBean
    DoadorRepository repository;

//    @Test
//    void logonUsuarioComValoresNulos() {
//
//        ResponseStatusException exception = assertThrows(
//                ResponseStatusException.class,
//                () -> controller.logonUsuario(null, null));
//
//        assertEquals(400, exception.getRawStatusCode());
//        assertEquals("Email ou senha não podem ser nulos", exception.getReason());
//    }


    @Test
    @DisplayName("getSimples deve retornar 204 e sem corpo caso tabela vazia")
    void getSimples204SemCorpo() {

        when(repository.findAll())
                .thenReturn(new ArrayList<>());

        ResponseEntity<List<Doador>> resposta
                = controller.listar();

        assertEquals(204, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName("get deve retornar 200 e com corpo caso id exista")
    void get200ComCorpo() {
        Integer idTeste = 11;
        when(repository.findById(idTeste))
                .thenReturn(Optional.of(mock(Doador.class)));

        ResponseEntity<Doador> resposta = controller.listar(idTeste);

        assertEquals(200, resposta.getStatusCodeValue());
        assertNotNull(resposta.getBody());
    }

    @Test
    @DisplayName("delete deve retornar 200 e sem corpo caso id exista")
    void delete200SemCorpo() {
        Integer idDoador = 11;
        when(repository.existsById(idDoador)).thenReturn(true);

        ResponseEntity<Doador> resposta = controller.excluirPorId(idDoador);

        verify(repository, times(1)).deleteById(idDoador);
        assertEquals(200, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName(
            "delete deve retornar 404 e sem corpo caso id não exista")
    void delete404SemCorpo() {
        Integer idTeste = 51;
        when(repository.existsById(idTeste)).thenReturn(false);

        ResponseEntity<Doador> resposta =
                controller.excluirPorId(idTeste);

        assertEquals(404, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }


    @Test
    @DisplayName(
            "get deve retornar 404 e sem corpo caso id não exista")
    void get404SemCorpo() {
        Integer idTeste = 51;
        when(repository.findById(idTeste)).thenReturn(Optional.empty());

        ResponseEntity<Doador> resposta = controller.listar(idTeste);

        assertEquals(404, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName(
            "put deve retornar 404 e sem corpo caso id não exista")
    void put404SemCorpo() {
        Integer idTeste = 51;
        when(repository.existsById(idTeste)).thenReturn(false);

        ResponseEntity<Doador> resposta = controller.atualizarPorId(idTeste, mock(Doador.class));

        assertEquals(404, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName("put deve retornar 200 e com corpo válido caso id exista")
    void put200ComCorpo() {
        Integer idTeste = 11;
        Doador doadorTeste = new Doador();
        when(repository.existsById(idTeste)).thenReturn(true);

        ResponseEntity<Doador> resposta = controller.atualizarPorId(idTeste, doadorTeste);

        verify(repository, times(1)).save(doadorTeste);
        assertEquals(200, resposta.getStatusCodeValue());
        assertNotNull(resposta.getBody());
        assertEquals(idTeste, resposta.getBody().getIdDoador());

    }
}