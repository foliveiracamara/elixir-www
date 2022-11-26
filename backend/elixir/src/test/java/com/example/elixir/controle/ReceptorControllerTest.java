package com.example.elixir.controle;

import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.Receptor;
import com.example.elixir.repositorio.ReceptorRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = ReceptorController.class)
class ReceptorControllerTest {

    @Autowired
    ReceptorController receptorController;

    @MockBean
    ReceptorRepository receptorRepository;

    @Test
    @DisplayName("delete deve retornar 200 e sem corpo caso id exista")
    void delete200SemCorpo() {
        Integer idReceptor = 11;
        when(receptorRepository.existsById(idReceptor)).thenReturn(true);

        ResponseEntity<Receptor> resposta = receptorController.delete(idReceptor);

        verify(receptorRepository, times(1)).deleteById(idReceptor);
        assertEquals(200, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName(
            "delete deve retornar 404 e sem corpo caso id não exista")
    void delete404SemCorpo() {
        Integer idReceptor = 51;
        when(receptorRepository.existsById(idReceptor)).thenReturn(false);

        ResponseEntity<Receptor> resposta =
                receptorController.delete(idReceptor);

        assertEquals(404, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName("getSimples deve retornar 204 e sem corpo caso tabela vazia")
    void getSimples204SemCorpo() {

        when(receptorRepository.findAll())
                .thenReturn(new ArrayList<>());

        ResponseEntity<List<Receptor>> resposta
                = receptorController.get();

        assertEquals(204, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

}