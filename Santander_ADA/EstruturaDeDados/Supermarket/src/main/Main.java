package Supermarket.src.main;

import java.util.Scanner;

import Supermarket.src.implementation.Supermarket;
import Supermarket.src.implementation.SupermarketArray;

public class Main {
    /**
     * @param args
     */
    private static int  SIZE = 3;
    public static void main(String[] args) {

        Supermarket supermarket = new SupermarketArray(SIZE);
        
        Scanner scanner = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("\n Lista de Compras");
            System.out.println("1 - Inserir");    
            System.out.println("2 - Listar");
            System.out.println("3 - Remover");
            System.out.println("4 - Sair");
            System.out.println("Escolha uma opção: ");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.println("Digite o item a ser inserido: ");       
                    String item = scanner.next(); 
                    supermarket.add(item);
                break;

                case 2: 
                    supermarket.print();                   
                    
                break;

                case 3:
                    int index = scanner.nextInt();
                    supermarket.delete(index);
                break;

                case 4:
                    System.out.println("Saindo do programa...");
                break;
            
                default:
                    System.out.println("Opção inválida. Por favor, escolha novamente.");
            }
        }while(opcao != 4);
        scanner.close();
    }
}
