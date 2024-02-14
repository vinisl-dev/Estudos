#include <iostream>

bool isLeapYear(int year) {
  // leap yeart is divisible by 4
  // but if it is divisible by 100, it must also be divisible by 400
  return (year % 4 == 0 && year % 100 != 0) || (year %400 == 0);

}

int main(){
  int year;
  std::cout << "Enter a year";
  std::cin >> year;
  if(isLeapYear(year)){
    std::cout << " is a leap year."<< std::endl;
  }else {
    std::cout << year << "is not a leap year."<< std::endl;
  }
  return 0;
}