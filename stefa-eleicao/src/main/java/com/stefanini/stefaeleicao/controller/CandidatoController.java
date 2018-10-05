package com.stefanini.stefaeleicao.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stefanini.stefaeleicao.bo.CandidatoBO;
import com.stefanini.stefaeleicao.dto.CandidatoDTO;

/**
 * Classe de cadastro de candidatos
 * @author paulocotta
 *
 */

@RestController
@RequestMapping(value="/candidato")
public class CandidatoController {

	/**
	 * Método que adiciona candidato
	 * @param candidatoDTO
	 * @return
	 */
	@RequestMapping(method=RequestMethod.POST, value="/criar-candidato", consumes=MediaType.APPLICATION_JSON_VALUE)
	public List<CandidatoDTO> adicionaCandidato(@RequestBody CandidatoDTO candidatoDTO) {
		return CandidatoBO.getInstancia().insereCandidato(candidatoDTO);
	}
	
	/**
	 * Método que busca candidato por identificador
	 * @param identificador
	 * @return
	 */
	@RequestMapping(method=RequestMethod.GET, value="/busca-candidato")
	public CandidatoDTO buscaIdentificadorCandidato(@RequestParam(name="identificador") String identificador) {
		return CandidatoBO.getInstancia().buscaPorIdentificador(identificador);
	}
	
	/**
	 * Método que busca candidato por identificador
	 * @param identificador
	 * @return
	 */
	@RequestMapping(method=RequestMethod.GET, value="/busca-todos-candidato")
	public List<CandidatoDTO> buscaIdentificadorCandidato() {
		return CandidatoBO.getInstancia().listaCandidatoAll();
	}
	
}