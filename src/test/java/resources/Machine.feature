#language: pt

Funcionalidade: Maquina

	@testePositivo
  Cenario: Obter informaçoes da maquina a partir de seu identificador
    Dado que eu tenha o identificador 1
    Quando fizer a requisicao para o recurso machine
    Então deve retornar as informacoes da maquina
    
  @testeParaExcecao
  Cenario: Fazer requisicao com tipo de dado invalido como identificador
    Dado que eu informe "teste" como um identificador
    Quando fizer a requisicao para o recurso machine
    Então deve retornar o erro not found