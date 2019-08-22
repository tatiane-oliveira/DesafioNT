package testeapi.cucumber.steps;

import static org.junit.Assert.assertTrue;

import com.jayway.restassured.response.Response;

import testeapi.cucumber.Service;

abstract class BaseStep {

	protected static Response resposta;
	protected Service servico = new Service();
	
	protected void verificarStatusCodeDoResponse(int status) {
		int responseStatusCode = resposta.getStatusCode();
		assertTrue(responseStatusCode == status);
	}
	
	protected void verificarContentTypeDoResponse() {
		String responseContentType = resposta.contentType();
		assertTrue(responseContentType.contains("application/json"));
	}
}
