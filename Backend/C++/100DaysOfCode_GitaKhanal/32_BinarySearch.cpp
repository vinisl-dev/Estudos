#include <iostream>

int binarySearch(int array[], int size, int target){
  int left =0;
  int right = size - 1;
  while (left <= right){
    int middle = left + (right - left) / 2;

    if (array[middle] == target){
      return middle; // target found at inde middle
    } else if (array[middle] < target){
      left = middle +1; // adjust the search range to the right half
    } else {
      right = middle -1; // adjust the seach range to the left half
    }
  }
  return -1;
}

int main(){
  // array to interation
  int sortedArray[] = {1,2,3,4,5,6,7,8,9,10,11,12,15};
  // calculate the size of the array
  int arraySize = sizeof(sortedArray) / sizeof(sortedArray[0]);
  // value to founding 
  int targetValue = 7;
  int resultIndex = binarySearch(sortedArray, arraySize, targetValue);

  if (resultIndex != -1){
    std::cout << "The target value " << targetValue << " is found at index " << resultIndex <<"." << std::endl;
  }
  else {
    std::cout << "The target value " << targetValue <<" is not present in  the array." <<std::endl;
  }
  return 0;
}