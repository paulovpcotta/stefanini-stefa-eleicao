package com.stefanini.stefaeleicao.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * DTO votação 
 * @author paulocotta
 *
 */

public class VotacaoDTO {

	private CandidatoDTO candidatoDTO = new CandidatoDTO();
	
	private List<Integer> valorVotacao = new ArrayList<Integer>();

	public CandidatoDTO getCandidatoDTO() {
		return candidatoDTO;
	}

	public void setCandidatoDTO(CandidatoDTO candidatoDTO) {
		this.candidatoDTO = candidatoDTO;
	}

	public List<Integer> getValorVotacao() {
		return valorVotacao;
	}

	public void setValorVotacao(List<Integer> valorVotacao) {
		this.valorVotacao = valorVotacao;
	}
	
}