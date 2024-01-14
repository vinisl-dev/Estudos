package src.entidade;

import src.generico.Pessoa;

public class Aluno extends Pessoa {
 
  private String matricula;

  public Aluno(String nome, int idade, String matricula){
    super(nome, idade);
    this.matricula = matricula;
  }

  public String getMatricula(){
    return this.matricula;
  }

  public void estudar(){
    System.out.println("O aluno "+getNome()+" esta estudando!");
  }
  
}
