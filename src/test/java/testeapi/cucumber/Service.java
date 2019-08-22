package testeapi.cucumber;

import static com.jayway.restassured.RestAssured.given;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;

public class Service {
	
	public Service() {
		RestAssured.baseURI = "https://pokeapi.co/api/v2";
	}
	
	private Response fazerRequisicao(String nomeDoParametro, String valorDoParametro, String recurso) {
		return
                given().
                		pathParam(nomeDoParametro, valorDoParametro).
                when().
                        get(recurso).
                then().
                        extract().response();
	}
	
	public Response fazerRequisicaoParaRecursoPokemon(int idDoPokemon) {
		return fazerRequisicao("id", String.valueOf(idDoPokemon), "/pokemon/{id}");
	}
	
	public Response fazerRequisicaoParaRecursoPokemonForms(String nomeDoPokemon) {
		return fazerRequisicao("name", nomeDoPokemon, "/pokemon-form/{name}");
	}
	
	public Response fazerRequisicaoParaRecursoMachine(Object idDaMaquina) {
		return fazerRequisicao("id", String.valueOf(idDaMaquina), "/machine/{id}/");
	}
	
	public Response fazerRequisicaoParaRecursoEvolutionTrigger(String nomeDoGatilho) {
		return fazerRequisicao("name", nomeDoGatilho, "/evolution-trigger/{name}/");
	}

}