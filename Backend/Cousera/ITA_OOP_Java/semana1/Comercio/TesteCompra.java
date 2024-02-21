package Comercio;


/**
 * TesteCompra
 */
public class TesteCompra {

  @Test
  public void compraAVista(){
    Compra c = new Compra(500);
    assertEquals(1, c.getNumeroParcelas());
    assertEquals(500, c.getValorTotal());  
    assertEquals(500, c.getValorParcela());  
    
}

}