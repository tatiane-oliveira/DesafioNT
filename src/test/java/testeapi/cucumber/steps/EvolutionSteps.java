package testeapi.cucumber.steps;

import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.HashMap;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class EvolutionSteps extends BaseStep {
	
	private String nomeDoGatilho;

	@Dado("^que eu tenha o nome do gatilho \"(.*?)\"$")
	public void que_eu_tenha_o_nome_do_gatilho(String name) {
		this.nomeDoGatilho = name;
	}
	
	@Dado("^que eu informe o nome \"(.*?)\" como gatilho$")
	public void que_eu_infome_o_nome_como_gatilho(String name) {
		this.nomeDoGatilho = name;
	}
	
	@Quando("^fizer a requisicao para o recurso evolution trigger$")
	public void fizer_a_requisicao_para_o_recurso_evolution_trigger() {
		resposta = this.servico.fazerRequisicaoParaRecursoEvolutionTrigger(this.nomeDoGatilho);
	}
	
	@Entao("^deve retornar as especies de Pokemon que evoluem desta maneira$")
	public void deve_retornar_as_especies_de_Pokemon_que_evoluem_desta_maneira() {
		verificarContentTypeDoResponse();
		verificarStatusCodeDoResponse(200);
		
		ArrayList<HashMap<String,String>> objeto = resposta.body().jsonPath().get("pokemon_species");
		String responsePokemonSpecieName = objeto.get(0).get("name");
		assertTrue(responsePokemonSpecieName.equals("ivysaur"));
	}
}
