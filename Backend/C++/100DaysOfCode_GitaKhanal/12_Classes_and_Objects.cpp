#include <iostream>
#include <string>

class Car {
  public:
    std::string brand;
    int year;
    double price;

  void displayInfo(){
    std::cout<< "Brand: " << brand << "\n";
    std::cout<< "Year: " << year << "\n";
    std::cout<< "Price: " << price << "\n";
  }
};

int main(){
  //Cria o objeto, não usa new :o
  Car myCar;

  myCar.brand = "Ford";
  myCar.year=2022;
  myCar.price=2500.50;

  //chama o metodo que exibe as informações de Car
  myCar.displayInfo();

  return 0;
}