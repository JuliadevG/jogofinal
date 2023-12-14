package com.example.prjFinal23.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.prjFinal23.entities.JogoEntity;
import com.example.prjFinal23.repositories.JogoRepository;

@Service
public class JogoService {

	private final JogoRepository jogoRepository;

	@Autowired
	public JogoService(JogoRepository jogoRepository) {
		this.jogoRepository = jogoRepository;
	}

	public JogoEntity getJogoEntityById(Long id) {
		return jogoRepository.findById(id).orElse(null);
	}

	public List<JogoEntity> getAllJogoEntitys() {
		return jogoRepository.findAll();
	}

	public JogoEntity saveJogoEntity(JogoEntity jogoentity) {
		return jogoRepository.save(jogoentity);
	}

	public void deleteJogoEntity(Long id) {
		jogoRepository.deleteById(id);
	}
	
}