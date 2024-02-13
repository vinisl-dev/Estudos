#include <iostream>

int main(){
  int octalNumber;
  std::cout << "Enter an octal number: ";
  std:: cin >> octalNumber;
  int  decimalNumber =0;
  int base=1;

  while (octalNumber > 0){
    int digit = octalNumber %10;
    decimalNumber += digit * base;
    octalNumber /= 10;
    base *= 8;
  }
  std:: cout << "Decimal equivalent: " << decimalNumber << std::endl;
  return 0;
}