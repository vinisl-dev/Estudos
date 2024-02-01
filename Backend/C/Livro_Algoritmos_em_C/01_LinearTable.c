/*
imprime os itens do array
Tabela Linear - sequencia de zero oyu mais elementos de dados, matriz unidimensional.
Array[]
*/
#include <stdio.h>
int main(){

int array[] = {90,70,50,80,60,85};
int length = sizeof(array) / sizeof(array[0]); // C não possui um metodo que retorne o comprimento do array como lenght, essa implementação faz isso :)
int i;
for ( i=0; i < length; i++) {
  printf("%d,", array[i]);
}
return 0;
}