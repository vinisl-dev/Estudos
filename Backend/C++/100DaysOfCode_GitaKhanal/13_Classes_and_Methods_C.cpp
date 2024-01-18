#include <iostream>
using namespace std;

class Car {
  public:
  // parece ter a função de uma *interface
    int speed (int maxSpeed);

};
//implementa a *interface
int Car::speed(int maxSpeed){
  return maxSpeed;
}

int main(){
  Car myObj;
  cout << myObj.speed(200);
  return 0;
}