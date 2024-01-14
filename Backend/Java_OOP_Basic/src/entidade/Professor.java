package src.entidade;

import src.generico.Pessoa;

public class Professor extends Pessoa {

// public String disciplina;
  private String disciplina;
  
public Professor(String nome, int idade, String disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }

  public String getDisciplina(){
    return this.disciplina;
  }

  public void darAula(){
    System.out.println("O Professor "+getNome()+" está dando a aula da disciplina "+getDisciplina());
  }
  
  
}
