#include <iostream>

void bubbleSort(int arr[], int size) {
  for (int i = 0; i < size -1; ++i){
     for (int j = 0; j < size -i -1; ++j) {
        if (arr[j] > arr[ j+ 1]){
          int temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
     }
    
  }
}


void printArray(int arr[], int size) {
  for (int i=0; i < size; ++i){
    std::cout << arr[i] <<" ";
  }
  std::cout << std::endl;
}

int main() {
  const int maxSize=5;
  int arrayToSort[maxSize];

  std::cout <<"Enter " << maxSize <<" integers for the array: "<<std::endl;
  for(int i = 0; i < maxSize; ++i){
    std::cin>> arrayToSort[i];
  }

  bubbleSort(arrayToSort, maxSize);

  std::cout<<"Sorted array: ";
  printArray(arrayToSort,maxSize);
  return 0;
}