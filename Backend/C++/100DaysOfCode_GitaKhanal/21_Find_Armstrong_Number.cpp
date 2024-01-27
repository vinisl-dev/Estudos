#include <iostream>
#include <cmath>
using namespace std;

bool isArmstrong(int num) {
  int originalNum = num;
  int digitCount = 0;
  int sum = 0;

  while (originalNum != 0) {
    originalNum /= 10;
    ++digitCount;
  }
  originalNum = num;
  while (originalNum != 0){
    int digit = originalNum % 10;
    sum += pow(digit, digitCount);
    originalNum /= 10;
  }
  return (sum == num);
}

int main() {
  int num;
  std::cout << "Enter a number: ";
  std::cin >> num;
  if (isArmstrong(num)){
    std::cout << num << " is an Armstrong number." << std::endl;
  } else {
    std::cout << num << " is not an Armostrong numer." << std::endl;
  }
}