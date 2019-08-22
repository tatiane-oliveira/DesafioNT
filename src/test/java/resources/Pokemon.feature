#language: pt

Funcionalidade: Pokemon

	@testePositivo
  Cenario: Obter nome de um Pokemon a partir de seu identificador
    Dado que tenha o identificador de Pokemon 12
    Quando fizer a requisicao para o recurso pokemon
    Então deve retornar o nome do Pokemon solicitado
    
  @testePositivo
  Cenario: Obter forma de um Pokemon
    Dado que tenha o nome de Pokemon "wormadam-plant"
    Quando fizer a requisicao para o recurso pokemon forms
    Então deve retornar a forma