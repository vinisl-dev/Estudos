#include <iostream>
#include <string>

// minha primeira classe em C++, :)

class Car {
  public:
  //Constructor
  // Muito interessante essa maneira de iniciar atribuir as variaveis de parametro as variaveis de classe :O
    Car (std::string b, int y) : brand(b), year(y){
      std::cout << "Constructor called for " << brand << " " << year << std::endl;
  }
  void displayInfo() const {
    std:: cout << "Brand: " << brand << "\nYear: " << year << std::endl;
  }

private: 
std::string brand;
int year;

};

int main(){
 Car myCar("Toyota", 2022);
 std::cout << "Car Information:\n";
 myCar.displayInfo();
 
 return 0;
}