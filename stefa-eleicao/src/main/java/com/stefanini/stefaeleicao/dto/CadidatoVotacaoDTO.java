package com.stefanini.stefaeleicao.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Classe que funciona a votação
 * @author paulocotta
 *
 */

public class CadidatoVotacaoDTO {

	private List<VotacaoDTO> votacaoDTOs = new ArrayList<VotacaoDTO>();

	public List<VotacaoDTO> getVotacaoDTOs() {
		return votacaoDTOs;
	}

	public void setVotacaoDTOs(List<VotacaoDTO> votacaoDTOs) {
		this.votacaoDTOs = votacaoDTOs;
	}
	
}