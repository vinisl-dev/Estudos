#include <iostream>

int octalToBinary(int octalNumber){
  int binaryNumber = 0;
  int base = 1;

  
    while(octalNumber > 0){         
      int digit = octalNumber % 10; 
      while(digit > 0) {
        binaryNumber += (digit % 2) * base;  
        digit /= 2;                         
        base *= 10;
      }
    octalNumber /= 10;
    }
  return binaryNumber;
}

int main() {
  int octalNumber;
  std::cout << "Enter an octal number: ";
  std::cin >> octalNumber;

  int binaryNumber = octalToBinary(octalNumber);
  std::cout << "Binary representation: " << binaryNumber << std::endl;
  return 0;
}




