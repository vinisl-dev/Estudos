#include <stdio.h>
#include <string.h>
//INSERE UM ELEMENTO EM UMA POSIÇÃO EXPECIFICA DO ARRAY

//alerta de vazamento de memoria no array

void  insert(int array[], int length, int tempArray[], int score, int insertIndex) {
  int i;
  for (i = 0; i < length; i++) {
    if (i < insertIndex) {
      tempArray[i] = array[i];
    }else {
      tempArray[i+1] = array[i];
    }
  }
  tempArray[insertIndex] = score;
}

int main(){
  int array[] = {90,70,50,80,60,85};
  int length = sizeof(array) / sizeof(array[0]);
  int tempArray[length + 1];
  printf("%d \n", length);

  printf("Array Original: \n");
  for(int i=0; i< length + 1; i++){
  printf("%d,",array[i],"\n");
  }
  insert(array, length, tempArray,75,2);

  memcpy(array, tempArray, sizeof(tempArray));
  printf("%d \n", (sizeof(tempArray)/sizeof(tempArray[0])));
  printf("Array Modificado: \n" );
  for(int i=0; i <= length; i++){
    printf("%d,", array[i],"\n");
  }
  return 0;
}