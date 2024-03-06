var jogadorNome;
    var jogadorEscolha;
    var jogadorPontos = 0;
    var jogadorEscolha = 0;

    var computadorPontos = 0;
    var computadorEscolha = 0;

    // Escolha a jogada  do usuario
    // 1 - pedra
    // 2 - papel 
    // 3 - tesoura

    // calcula e retorna quem ganhou
    // 0 - empate
    // 1 - jogador
    // 2 - computador

    function calcularEscolha(jogador, computador){
        if (jogador == 1 && computador == 1) {
            return 0;
        }else if(jogador == 1 && computador == 2){
            return 2;
        }
        
        else if(jogador == 1 && computador == 3){
            return 1;
        }   
        
        else if(jogador == 2 && computador == 1){
            return 1; 
        }
        else if(jogador == 2 && computador == 2){
            return 0; 
        }
        else if(jogador == 2 && computador == 3){
            return 2; 
        }
        else if(jogador == 3 && computador == 1){
            return 2; 
        }
        else if(jogador == 3 && computador == 2){
            return 1; 
        }
        else if(jogador == 3 && computador == 3){
            return 0; 
        }
    }


    //Escreva na tela uma mensagem.
    function mensagem(texto){
        document.getElementById('mensagem').innerHTML = texto;
      }

      //Escreva no placar o  nome do jogador
      function definirJogadorNome(nome){
        document.getElementById('jogador-nome').innerHTML = nome ;

      }


    // sorteia entre dois numeros.
    function sortear(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    
    
    //Adiciona  a classe selecionado.
    function  selecionar(tipo, escolha){
        document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');

    }
    //Remover a classe selecionado
    function  deselecionar(tipo, escolha){
        document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
        
    }
    //soma pontos para o jogador.
    function somarPontoJogador(){
        jogadorPontos++;
        document.getElementById('jogador-pontos').innerHTML = jogadorPontos ;

    }
    //somar pontos para o computador
    function somarPontoComputador(){
        computadorPontos++;
        document.getElementById('computador-pontos').innerHTML = computadorPontos ;
        
    }

    //função de jogar
    function jogar(escolha) {
        jogadorEscolha = escolha;
        selecionar('jogador', jogadorEscolha);
        // sortear a jogada do computador
        computadorEscolha = sortear(1, 3);
        selecionar('computador', computadorEscolha);

        
        var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha );
        if (ganhador == 0) {
            mensagem('empate');
          }
          else if (ganhador == 1) {
            mensagem('ponto para ' + jogadorNome);
            somarPontoJogador();
            
          }
          else if (ganhador == 2) {
            mensagem('ponto para  computador');
            somarPontoComputador();
          }
          setTimeout(function() {
            deselecionar('jogador', jogadorEscolha);
            deselecionar('computador', computadorEscolha);
            mensagem(jogadorNome + ' escolha uma opção...');
          }, 3500);
    }

    
    
    document.getElementById('jogador-escolha-1').onclick = function(){jogar(1)};
    document.getElementById('jogador-escolha-2').onclick = function(){jogar(2)};
    document.getElementById('jogador-escolha-3').onclick = function(){jogar(3)};
    
    jogadorNome = prompt('Qual é o seu Nome?');

    mensagem(' Bem-vindo '  + jogadorNome   + ' está preparado?  Escolha uma opção acima...');


    definirJogadorNome(jogadorNome) ;
