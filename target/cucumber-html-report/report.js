$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Evolution.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Evolucao",
  "description": "",
  "id": "evolucao",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "Obter os Pokemons que evoluem a partir de determinado gatilho de evolucao",
  "description": "",
  "id": "evolucao;obter-os-pokemons-que-evoluem-a-partir-de-determinado-gatilho-de-evolucao",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@testePositivo"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que eu tenha o nome do gatilho \"level-up\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "fizer a requisicao para o recurso evolution trigger",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "deve retornar as especies de Pokemon que evoluem desta maneira",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "level-up",
      "offset": 32
    }
  ],
  "location": "EvolutionSteps.que_eu_tenha_o_nome_do_gatilho(String)"
});
formatter.result({
  "duration": 487918563,
  "status": "passed"
});
formatter.match({
  "location": "EvolutionSteps.fizer_a_requisicao_para_o_recurso_evolution_trigger()"
});
formatter.result({
  "duration": 1672921736,
  "status": "passed"
});
formatter.match({
  "location": "EvolutionSteps.deve_retornar_as_especies_de_Pokemon_que_evoluem_desta_maneira()"
});
formatter.result({
  "duration": 554395705,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Obter exceçao ao solicitar gatilho que nao existe",
  "description": "",
  "id": "evolucao;obter-exceçao-ao-solicitar-gatilho-que-nao-existe",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@testeParaExcecao"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que eu informe o nome \"teste\" como gatilho",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "fizer a requisicao para o recurso evolution trigger",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "deve retornar o erro not found",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 23
    }
  ],
  "location": "EvolutionSteps.que_eu_infome_o_nome_como_gatilho(String)"
});
formatter.result({
  "duration": 125152,
  "status": "passed"
});
formatter.match({
  "location": "EvolutionSteps.fizer_a_requisicao_para_o_recurso_evolution_trigger()"
});
formatter.result({
  "duration": 334302970,
  "status": "passed"
});
formatter.match({
  "location": "MachineSteps.deve_retornar_o_erro_not_found()"
});
formatter.result({
  "duration": 111856,
  "status": "passed"
});
formatter.uri("Machine.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Maquina",
  "description": "",
  "id": "maquina",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "Obter informaçoes da maquina a partir de seu identificador",
  "description": "",
  "id": "maquina;obter-informaçoes-da-maquina-a-partir-de-seu-identificador",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@testePositivo"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que eu tenha o identificador 1",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "fizer a requisicao para o recurso machine",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "deve retornar as informacoes da maquina",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "MachineSteps.que_eu_tenha_um_identificador(int)"
});
formatter.result({
  "duration": 733226,
  "status": "passed"
});
formatter.match({
  "location": "MachineSteps.fizer_a_requisicao_para_o_recurso_machine()"
});
formatter.result({
  "duration": 339149013,
  "status": "passed"
});
formatter.match({
  "location": "MachineSteps.deve_retornar_as_informacoes_da_maquina()"
});
formatter.result({
  "duration": 32091762,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Fazer requisicao com tipo de dado invalido como identificador",
  "description": "",
  "id": "maquina;fazer-requisicao-com-tipo-de-dado-invalido-como-identificador",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@testeParaExcecao"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que eu informe \"teste\" como um identificador",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "fizer a requisicao para o recurso machine",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "deve retornar o erro not found",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 16
    }
  ],
  "location": "MachineSteps.que_eu_informe_como_um_identificador(String)"
});
formatter.result({
  "duration": 89271,
  "status": "passed"
});
formatter.match({
  "location": "MachineSteps.fizer_a_requisicao_para_o_recurso_machine()"
});
formatter.result({
  "duration": 334762564,
  "status": "passed"
});
formatter.match({
  "location": "MachineSteps.deve_retornar_o_erro_not_found()"
});
formatter.result({
  "duration": 36044,
  "status": "passed"
});
formatter.uri("Pokemon.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Pokemon",
  "description": "",
  "id": "pokemon",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "Obter nome de um Pokemon a partir de seu identificador",
  "description": "",
  "id": "pokemon;obter-nome-de-um-pokemon-a-partir-de-seu-identificador",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@testePositivo"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que tenha o identificador de Pokemon 12",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "fizer a requisicao para o recurso pokemon",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "deve retornar o nome do Pokemon solicitado",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 37
    }
  ],
  "location": "PokemonSteps.que_tenha_o_identificador_de_pokemon(int)"
});
formatter.result({
  "duration": 167663,
  "status": "passed"
});
formatter.match({
  "location": "PokemonSteps.fizer_a_requisicao_para_o_recurso_pokemon()"
});
formatter.result({
  "duration": 333654868,
  "status": "passed"
});
formatter.match({
  "location": "PokemonSteps.deve_retornar_o_nome_do_Pokemon_solicitado()"
});
formatter.result({
  "duration": 244576006,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Obter forma de um Pokemon",
  "description": "",
  "id": "pokemon;obter-forma-de-um-pokemon",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@testePositivo"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "que tenha o nome de Pokemon \"wormadam-plant\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "fizer a requisicao para o recurso pokemon forms",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "deve retornar a forma",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "wormadam-plant",
      "offset": 29
    }
  ],
  "location": "PokemonSteps.que_tenha_o_nome_de_um_Pokemon(String)"
});
formatter.result({
  "duration": 104003,
  "status": "passed"
});
formatter.match({
  "location": "PokemonSteps.fizer_a_requisicao_para_o_recurso_pokemon_forms()"
});
formatter.result({
  "duration": 350687427,
  "status": "passed"
});
formatter.match({
  "location": "PokemonSteps.deve_retornar_a_forma()"
});
formatter.result({
  "duration": 12464580,
  "status": "passed"
});
});