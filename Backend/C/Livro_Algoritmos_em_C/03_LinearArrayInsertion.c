#include <stdio.h>
#include <string.h>

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

  // for(int i=0; i< length + 1; i++){
  // printf("Array Original: %d,",array[i]);
  // }
  insert(array, length, tempArray,75,2);
  memcpy(array, tempArray, sizeof(tempArray));
  
  for(int i=0; i< length +1; i++){
    printf("%d,", array[i]);
  }
  return 0;
}