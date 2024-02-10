#include <iostream>

int main(){
long long octalNumber;
std::cout << "Enter an octal number: ";
std::cin >> octalNumber;

long long decimalNumber = 0;
long long octalBase = 1;
while (octalNumber != 0){
  int digit = octalNumber % 10;
  decimalNumber += digit * octalBase;
  octalNumber /= 10;
  octalBase *= 8;
}

char hexadecimalNumber[50];
int i = 0;
while (decimalNumber != 0){
  int remainder  = decimalNumber % 16;
  char hexDigit = (remainder < 10) ? (remainder + '0' ): (remainder - 10 +'A');
  hexadecimalNumber[i++] = hexDigit;
  decimalNumber /= 10;
}

std::cout << "Hexadecimal equivalent: ";
for (--i; i>= 0; --i){
  std::cout << hexadecimalNumber[i];
}
std:: cout << std::endl;
return 0;
}