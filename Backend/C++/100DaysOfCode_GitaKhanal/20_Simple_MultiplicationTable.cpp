#include <iostream>

int main(){

int digit;
std::cout << "Enter a digit: ";
std::cin >> digit;

std::cout <<"Multiplication talbe for "<< digit << ":\n";
for(int i = 1; i <= 10; i++){
  std::cout<< digit <<" * "<< i << " = " << (digit * i) << std::endl;
}
return 0;
}