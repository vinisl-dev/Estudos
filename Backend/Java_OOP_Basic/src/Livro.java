package src;

public class Livro {

  private String titulo;
  private String autor;
  private int anoPublicacao;

public void setTitulo(String titulo){
  this.titulo = titulo;
}
public String getTitulo(){
  return this.titulo;
}


public void setAutor(String autor){
  this.autor = autor;
}
public String getAutor(){
  return this.autor;
}

public void setAnoPublicacao(int ano){
  this.anoPublicacao=ano;
}
public int getAnoPublicacao(){
  return this.anoPublicacao;
}

}