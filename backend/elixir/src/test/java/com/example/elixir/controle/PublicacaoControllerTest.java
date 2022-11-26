package com.example.elixir.controle;

import com.example.elixir.dominio.Doador;
import com.example.elixir.dominio.Publicacao;
import com.example.elixir.repositorio.PublicacaoRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@SpringBootTest(classes = PublicacaoController.class)
class PublicacaoControllerTest {

    @Autowired
    PublicacaoController publicacaoController;

    @MockBean
    PublicacaoRepository publicacaoRepository;

    @Test
    @DisplayName("delete deve retornar 200 e sem corpo caso id exista")
    void delete200SemCorpo() {
        Integer idDoador = 11;
        when(publicacaoRepository.existsById(idDoador)).thenReturn(true);

        ResponseEntity<Doador> resposta = publicacaoController.delete(idDoador);

        verify(publicacaoRepository, times(1)).deleteById(idDoador);
        assertEquals(200, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName(
            "delete deve retornar 404 e sem corpo caso id não exista")
    void delete404SemCorpo() {
        Integer idTeste = 51;
        when(publicacaoRepository.existsById(idTeste)).thenReturn(false);

        ResponseEntity<Doador> resposta =
                publicacaoController.delete(idTeste);

        assertEquals(404, resposta.getStatusCodeValue());
        assertNull(resposta.getBody());
    }

    @Test
    @DisplayName("get deve retornar 200 e com corpo caso id exista")
    void get200ComCorpo() {
        Integer idTeste = 11;
        when(publicacaoRepository.findById(idTeste))
                .thenReturn(Optional.of(mock(Publicacao.class)));

        ResponseEntity<Publicacao> resposta = publicacaoController.get(idTeste);

        assertEquals(200, resposta.getStatusCodeValue());
        assertNotNull(resposta.getBody());
    }


}