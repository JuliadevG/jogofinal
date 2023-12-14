package com.example.prjFinal23.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.prjFinal23.entities.JogoEntity;
import com.example.prjFinal23.services.JogoService;

@RestController 
@RequestMapping("/jogos")
public class JogoController {
	
@Autowired
private final JogoService jogoService;

@GetMapping("/home")
public String paginaInicial() {
	return "index"; 
}

@Autowired
public JogoController(JogoService jogoService) {
	this.jogoService = jogoService;
}

 @PostMapping("/create")
    public JogoEntity createJogoEntity(@RequestBody JogoEntity jogoentity) {
	 return jogoService.saveJogoEntity(jogoentity);
    }


@GetMapping("/{id}")
public ResponseEntity<JogoEntity> getJogoEntity(@PathVariable Long id) {
	JogoEntity jogoentity = jogoService.getJogoEntityById(id);
	if (jogoentity != null) {
		return ResponseEntity.ok(jogoentity);
	} else {
		return ResponseEntity.notFound().build();
	}
}

@GetMapping
public List<JogoEntity> getAllJogoEntitys() {
	return jogoService.getAllJogoEntitys();
}

@DeleteMapping("/{id}")
public void deleteJogoEntity(@PathVariable Long id) {
	jogoService.deleteJogoEntity(id);
}	
}