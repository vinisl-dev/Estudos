public class Principal {
  public static void main(String[] args) {
     Carro c1 = new Carro();
      c1.potencia= 10;
      c1.nome="fusca";
      c1.velocidade=0;
      
      c1.acelerar();
      c1.acelerar();
      c1.acelerar();
      c1.frear();
      c1.imprimir();

      Carro c2 = new Carro();
      c2.potencia= 15;
      c2.nome="carango";
      c2.velocidade=0;    
      c2.acelerar();
  
      c2.frear();
      c2.imprimir();

      Carro c3 = new Carro();
      c3.potencia= 10;
      c3.nome="fusca";
      c3.velocidade=0;
      
      c3.acelerar();
      c3.acelerar();
      c3.acelerar();
      c3.frear();
      c3.imprimir();



    }
  
    
}
