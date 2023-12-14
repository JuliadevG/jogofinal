package com.example.prjFinal23.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.prjFinal23.entities.JogoEntity;

public interface JogoRepository extends JpaRepository<JogoEntity, Long>{
	
}