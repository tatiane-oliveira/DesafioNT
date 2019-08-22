package testeapi.cucumber.steps;

import static org.junit.Assert.*;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class PokemonSteps extends BaseStep {
	
	private int idDoPokemon;
	private String nomeDoPokemon;

	@Dado("^que tenha o identificador de Pokemon (\\d+)$")
	public void  que_tenha_o_identificador_de_pokemon(int id) {
		this.idDoPokemon = id;
	}
	
	@Dado("^que tenha o nome de Pokemon \"(.*?)\"$")
	public void que_tenha_o_nome_de_um_Pokemon(String name) {
		this.nomeDoPokemon = name;
	}
	
	@Quando("^fizer a requisicao para o recurso pokemon$")
	public void fizer_a_requisicao_para_o_recurso_pokemon() {
		resposta = this.servico.fazerRequisicaoParaRecursoPokemon(idDoPokemon);
	}
	
	@Quando("^fizer a requisicao para o recurso pokemon forms$")
	public void fizer_a_requisicao_para_o_recurso_pokemon_forms() {
		resposta = this.servico.fazerRequisicaoParaRecursoPokemonForms(nomeDoPokemon);
	}
	
	@Entao("^deve retornar o nome do Pokemon solicitado$")
	public void deve_retornar_o_nome_do_Pokemon_solicitado() {
		verificarContentTypeDoResponse();
		verificarStatusCodeDoResponse(200);
		
		String responsePokemonName = resposta.body().jsonPath().getString("name");
		assertTrue(responsePokemonName.equals("butterfree"));
	}
	
	@Entao("^deve retornar a forma$")
	public void deve_retornar_a_forma() {
		verificarContentTypeDoResponse();
		verificarStatusCodeDoResponse(200);
		
		String responsePokemonFormName = resposta.body().jsonPath().getString("form_name");
		assertTrue(responsePokemonFormName.equals("plant"));
	}
}