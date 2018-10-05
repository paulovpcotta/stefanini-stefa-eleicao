package com.stefanini.stefaeleicao.bo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.stefanini.stefaeleicao.banco.memoria.BancoMemoriaCandidato;
import com.stefanini.stefaeleicao.dto.CandidatoDTO;

/**
 * 
 * @author paulocotta
 *
 */

public class CandidatoBO {
	
	private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMddHHmmss");

	/**
	 * Método que gera a instância
	 * @return
	 */
	public static CandidatoBO getInstancia(){
		return new CandidatoBO();
	}
	
	/**
	 * Método que insere candidato
	 * @param candidatoDTO
	 * @return
	 */
	public List<CandidatoDTO> insereCandidato(CandidatoDTO candidatoDTO){
		candidatoDTO.setIdentificador(simpleDateFormat.format(new Date()));
		return BancoMemoriaCandidato.getInstancia().insereCandidato(candidatoDTO);
	}
	
	/**
	 * Método que busca candidato por identificador
	 * @param identificador
	 * @return
	 */
	public CandidatoDTO buscaPorIdentificador(String identificador){
		return BancoMemoriaCandidato.getInstancia().buscaCandidatoPorIdentificador(identificador);
	}
	
	/**
	 * Método candidato ALL
	 * @return
	 */
	public List<CandidatoDTO> listaCandidatoAll(){
		return BancoMemoriaCandidato.getInstancia().listaCandidato();
	}
	
}