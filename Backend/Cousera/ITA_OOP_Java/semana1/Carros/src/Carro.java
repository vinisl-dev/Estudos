public class Carro {
  int potencia;
  int velocidade;
  String nome;

  Carro(){}
  Carro(int potencia, int velocidade, String nome){
    this.potencia=potencia;
    this.velocidade=velocidade;
    this.nome=nome;
  }


  void acelerar() {
    velocidade += potencia;
  }

  void frear() {
    velocidade /=2;
  }

  int getVelocidade() {
    return velocidade;
  }

  void imprimir() {
    System.out.println("O carro "+nome+" está a velocidade "+ getVelocidade()+" km/h");
  }


}
