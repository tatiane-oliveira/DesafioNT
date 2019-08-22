#language: pt

Funcionalidade: Evolucao
	
	@testePositivo
  Cenario: Obter os Pokemons que evoluem a partir de determinado gatilho de evolucao
    Dado que eu tenha o nome do gatilho "level-up"
    Quando fizer a requisicao para o recurso evolution trigger
    Então deve retornar as especies de Pokemon que evoluem desta maneira
    
   @testeParaExcecao
   Cenario: Obter exceçao ao solicitar gatilho que nao existe
    Dado que eu informe o nome "teste" como gatilho
    Quando fizer a requisicao para o recurso evolution trigger
    Então deve retornar o erro not found