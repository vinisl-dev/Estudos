#include <iostream>
#include <string>

using namespace std;
//Base Class
class Vehicle {
  public:
    string brand = "Ford";
  public:
    void honk() {
      cout << "Tuut, tuut! \n";
    }
};

//Derived class
class Car: public Vehicle {
  public:
    string model = "Mustang";
};

int main(){
  Car myCar;
  myCar.honk();
  cout << myCar.brand + " " + myCar.model <<endl;
  return 0;
}