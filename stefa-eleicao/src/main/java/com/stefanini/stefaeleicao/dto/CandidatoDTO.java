package com.stefanini.stefaeleicao.dto;

/**
 * 
 * @author paulocotta
 *
 */

public class CandidatoDTO {

	private String identificador;
	
	private String nome;
	
	private String partido;
	
	private Integer numeroPartido;

	public String getIdentificador() {
		return identificador;
	}

	public void setIdentificador(String identificador) {
		this.identificador = identificador;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getPartido() {
		return partido;
	}

	public void setPartido(String partido) {
		this.partido = partido;
	}

	public Integer getNumeroPartido() {
		return numeroPartido;
	}

	public void setNumeroPartido(Integer numeroPartido) {
		this.numeroPartido = numeroPartido;
	}
	
}