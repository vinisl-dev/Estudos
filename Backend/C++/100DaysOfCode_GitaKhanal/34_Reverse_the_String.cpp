#include <iostream>
#include <string>

std::string reverseString(const std::string& originalStr){
  return std::string(originalStr.rbegin(), originalStr.rend());
}

int main(){
  std::string userInput;
  std::cout << "Enter a string: ";
  std::getline(std::cin, userInput);

  std::string reversedResult = reverseString(userInput);
  std::cout << "Reversed string: " << reversedResult << std::endl;
  return 0;
}