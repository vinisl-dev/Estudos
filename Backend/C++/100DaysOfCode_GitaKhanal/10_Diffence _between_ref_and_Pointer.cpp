#include <iostream>

int main(){

int number = 24;

int *pointerToNumber = &number;

std::cout << "Value of number : " << *pointerToNumber << std::endl;
std::cout << "Address of number through pointerToNumber: " << pointerToNumber << std::endl;
std::cout << "Display Address of number: " << &number << std::endl;
*pointerToNumber = 99;

std::cout << "Updated value of number: " << number << std::endl;
return 0;
}