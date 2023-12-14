function cadastrarJogoEntity() {
	alert(1);
    const name = document.getElementById('name').value;
    const genero = document.getElementById('genero').value;
    const descricao = document.getElementById('descricao').value;
    let thumbnailpath = document.getElementById('thumbnailpath').value;
    const integrantes = document.getElementById('integrantes').value;
    const squad = document.getElementById('squad').value;
    let url = document.getElementById('url').value;
    alert(2);
    url = url.replace(/^https?:\/\//, '');
    thumbnailpath = thumbnailpath.replace(/^https?:\/\//, '');

    const requestBody = {
        name,
        genero,
        descricao,
        thumbnailpath,
        integrantes,
        squad,
        url        
    };
  alert(3);
    fetch('http://localhost:8080/jogos/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
        .then(response => response.json())
        .then(data => {
            alert('Jogo cadastrado com sucesso!');
            document.getElementById('cadastroForm').reset();
             location.reload();
        })
        .catch(error => {
            console.error('Erro ao cadastrar jogo:', error);
        });
}

function ListarJogos() {
  fetch(`http://localhost:8080/jogos`)
      .then(response => {
          if (response.status === 404) {
              return Promise.reject('Lista de Jogos não encontrada');
          }
          return response.json();
      })
      .then(data => {

          const tbodyElement = document.getElementById('jogos-tabela').querySelector('tbody');
          tbodyElement.innerHTML = '';

          // Preenche a tabela com os resultados da pesquisa
          data.forEach(jogo => {
            const linhaJogo = document.createElement('tr');
            linhaJogo.innerHTML = `
                <td>${jogo.id}</td>
                <td>${jogo.genre}</td>
                <td style="white-space: pre-line;">${jogo.description}</td>
                <td>${jogo.squad}</td>
                <td style="white-space: pre-line;">${jogo.members}</td>
                <td>${jogo.url}</td>           
                <td><a href="https://${jogo.thumbnailpath}">Acesse a imagem</a></td>
            `;
            tbodyElement.appendChild(linhaJogo);
        });  
      })
      // Trata os Erros
      .catch(error => {
          console.error('Erro ao pesquisar funcionário:', error);
          const resultadoPesquisa = document.getElementById('resultadoPesquisa');
          resultadoPesquisa.innerHTML = 'Jopo não encontrado.';
      });
}







function playAudio() {
	var audio = document.getElementById("music");
	var speakerSlash = document.getElementsByClassName("ph-speaker-slash")[0];
	var speakerHigh = document.getElementsByClassName("ph-speaker-high")[0];
  
	if (!audio.paused && !audio.ended) {
	  audio.pause();
	  speakerSlash.style.display = "block";
	  speakerHigh.style.display = "none";
	} else {
	  audio.play();
	  speakerSlash.style.display = "none";
	  speakerHigh.style.display = "block";
	}
  }
  
  var modalContainer = document.getElementById("modalContainer");
  var openModalBtn = document.getElementById("openModalBtn");
  var youtubeIframe = document.getElementById("youtubeIframe");
  
  openModalBtn.addEventListener("click", function () {
	modalContainer.style.display = "block";
  });
  
  window.addEventListener("click", function (event) {
	if (event.target == modalContainer) {
	  modalContainer.style.display = "none";
	  youtubeIframe.src = youtubeIframe.src;
	}
  });
  
