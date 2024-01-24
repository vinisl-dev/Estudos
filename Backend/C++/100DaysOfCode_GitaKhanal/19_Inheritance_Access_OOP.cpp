#include <iostream>
using namespace std;

class Employee {
  protected:
  int salary;
};

class Programmer: public Employee {
  public:
  int bonus;
  void setSalary(int s){
    salary = s;
  }
  int getSalary() {
    return salary;
  }

};

int main() {
  Programmer myObj;
  myObj.setSalary(5000);
  myObj.bonus = 1500;
  cout << "Salary: " << myObj.getSalary() << "\n";
  cout << "Bonus: " << myObj.bonus <<"\n";
  cout << "Salary + Bonus: "<< myObj.getSalary() + myObj.bonus << "\n";
  return 0;
}


