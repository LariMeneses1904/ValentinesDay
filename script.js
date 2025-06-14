function iniciarSite() {
  document.getElementById("entrada").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
  iniciarAnimacaoCoracoes();
}

function responder(botao, correto) {
  // Evita múltiplas respostas se já tiver acertado
  const jaAcertou = botao.parentNode.getAttribute("data-acertou");
  if (jaAcertou === "sim") return;

  const resultadoExistente = botao.parentNode.querySelector(".resultado");
  if (resultadoExistente) resultadoExistente.remove(); // remove texto anterior, se houver

  const resultado = document.createElement("p");
  resultado.classList.add("resultado");
  resultado.style.fontWeight = "bold";
  resultado.style.marginTop = "10px";

  if (correto) {
    resultado.innerText = "Acertou! ❤️ Você me conhece bem!";
    resultado.style.color = "green";
    botao.parentNode.setAttribute("data-acertou", "sim");

    // Desativa todos os botões após acerto
    const botoes = botao.parentNode.querySelectorAll("button");
    botoes.forEach(b => b.disabled = true);
  } else {
    resultado.innerText = "Errou 😢 ... mas eu ainda te amo!";
    resultado.style.color = "red";
    botao.disabled = true; // Desativa só o botão errado
  }

  botao.parentNode.appendChild(resultado);
}


// Animação de corações
function iniciarAnimacaoCoracoes() {
  const canvas = document.getElementById("coracoes");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const coracoes = Array(50).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: canvas.height + Math.random() * 100,
    size: 10 + Math.random() * 20,
    speed: 1 + Math.random() * 2,
    opacity: 0.5 + Math.random() * 0.5
  }));

  function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coracoes.forEach(c => {
      ctx.globalAlpha = c.opacity;
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.bezierCurveTo(c.x - c.size / 2, c.y - c.size / 2, c.x - c.size, c.y + c.size / 3, c.x, c.y + c.size);
      ctx.bezierCurveTo(c.x + c.size, c.y + c.size / 3, c.x + c.size / 2, c.y - c.size / 2, c.x, c.y);
      ctx.fill();
      c.y -= c.speed;
      if (c.y < -30) {
        c.y = canvas.height + 10;
      }
    });
    requestAnimationFrame(desenhar);
  }
  desenhar();
}

function entrarSite() {
  document.getElementById("entrada").style.display = "none";
  document.querySelector(".conteudo").style.display = "block";
  iniciarAnimacaoCoracoes(); // <- ESSENCIAL
}


function mostrarSurpresa() {
  var mensagem = document.getElementById("mensagem-surpresa");
  mensagem.style.display = "block";
}



