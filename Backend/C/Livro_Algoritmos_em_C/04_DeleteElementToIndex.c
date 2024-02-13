#include <stdio.h>
#include <string.h>

int main(){
  int array[] = {90, 70, 50, 80, 60, 85};
  
   for (int i=0; i  < (sizeof(array)/sizeof(array[0]));i++){
    printf("%d,", array[i]);
  }
  printf("Please enter the index to be deleted: \n");

  int index;
  scanf("%d", &index);
  int length = sizeof(array) / sizeof(array[0]);
  int tempArrray[length -1];

  int i;
  for(i=0; i < length; i++){
    if (i < index){
      tempArrray[i]=array[i];
    }
    if (i > index){
      tempArrray[i-1]=array[i];
    }
  }
  memcpy(array,tempArrray, sizeof(tempArrray));
  for (i=0; i<length-1;i++){
    printf("%d, ", array[i]);
  }

return 0;
}