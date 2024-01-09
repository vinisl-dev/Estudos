# include <iostream>
#include <cmath>

int main(){
  double number;
  std::cout << "Enter a number:";
  std:: cin >> number;

  //Calculate the square of the number using pow function
  double square = pow(number,2);

  // Calculate the square root using cmath library
  double square_Root = sqrt(number);

  // Calculate the Sine of the number in radians
  double sine_value = sin(number);

  //Display the results
  std::cout << "The square root of " << number << " is: " << square_Root << std::endl;

  std::cout << "The square of " << number << " is: " << square << std:: endl;

  std::cout << "The sine of " << number << "(in radians) is: " << sine_value << std :: endl;

  return 0;
}