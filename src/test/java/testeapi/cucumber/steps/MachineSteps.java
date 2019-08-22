package testeapi.cucumber.steps;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import testeapi.cucumber.Utils;

public class MachineSteps extends BaseStep {
	
	private Object idDaMaquina;

	@Dado("^que eu tenha o identificador (\\d+)$")
	public void que_eu_tenha_um_identificador(int id) {
		this.idDaMaquina = id;
	}
	
	@Dado("^que eu informe \"(.*?)\" como um identificador$")
	public void que_eu_informe_como_um_identificador(String id) throws Throwable {
		idDaMaquina = id;
	}
	
	@Quando("^fizer a requisicao para o recurso machine$")
	public void fizer_a_requisicao_para_o_recurso_machine() {
		resposta = this.servico.fazerRequisicaoParaRecursoMachine(idDaMaquina);
	}
	
	@Entao("^deve retornar as informacoes da maquina$")
	public void deve_retornar_as_informacoes_da_maquina() {
		verificarContentTypeDoResponse();
		verificarStatusCodeDoResponse(200);
		
		String responseMachineName = Utils.obterValorDentroDeUmObjetoNoJSON(resposta, "item", "name");
		assertTrue(responseMachineName.equals("tm01"));
		
		String responseMachineMoveName = Utils.obterValorDentroDeUmObjetoNoJSON(resposta, "move", "name");
		assertTrue(responseMachineMoveName.equals("mega-punch"));
		
		String responseMachineVersionGroupName = Utils.obterValorDentroDeUmObjetoNoJSON(resposta, "version_group", "name");
		assertTrue(responseMachineVersionGroupName.equals("red-blue"));
	}
	
	@Entao("^deve retornar o erro not found$")
	public void deve_retornar_o_erro_not_found() {
		verificarStatusCodeDoResponse(404);
	}
}