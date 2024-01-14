package src;

import src.entidade.Aluno;
import src.entidade.Professor;

public class Main {

public static void main(String[] args) {
 
var livro = new Livro();

livro.setAutor("Vinicios");
livro.setTitulo("O Incrivel mundo de V");
System.out.println(livro.getAutor());
System.out.println(livro.getTitulo());

// ---------------------- 
Aluno aluno = new Aluno("Vinicios", 39, "123456");
Professor professor = new Professor("Fulano", 40, "Engenharia de soft");

aluno.estudar();
professor.darAula();

var professor2 = new Professor("testeProf", 50, "lucas silva silva no mundo da lua");

// professor2.disciplina="Isso não pode"; // erro
System.out.println(professor2.getDisciplina());

}

}