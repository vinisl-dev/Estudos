#include <stdio.h>
#include <string.h>

int main(){
  int array[] = {90,70,50,80,60,85};
  int length = sizeof(array)/ sizeof(array[0]);
  
  int i;
  int tempArray[length + 1];

  for (i = 0; i < length; i++){
    tempArray[i]= array[i];
  }
  tempArray[length]=75;
  memcpy(array,tempArray,sizeof(tempArray));

  for (i = 0; i <= length; i++)
  printf("%d,", array[i]);
return 0;
}
