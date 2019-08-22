package testeapi.cucumber;

import java.util.HashMap;

import com.jayway.restassured.response.Response;

public abstract class Utils {

	public static String obterValorDentroDeUmObjetoNoJSON(Response resposta, String nomeDoObjeto, String nomeDaChave) {
		HashMap<String, String> objeto = resposta.body().jsonPath().get(nomeDoObjeto);
		return objeto.get(nomeDaChave);
	}
}
