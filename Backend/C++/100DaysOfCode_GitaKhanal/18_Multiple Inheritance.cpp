#include <iostream>

using namespace std; // when defined I can stand implicet std declaration in cout

class MyClass {
  public:
    void myFunction() {
      cout << "Some content in parent class. \n";
    }
};

class MyOtherClass {
  public:
    void myOtherFunction() {
      cout << "Some content in another class. \n";
    }
};

class MyChildClass: public MyClass, public MyOtherClass {

};

int main() {
  MyChildClass myObj;
  myObj.myFunction();
  myObj.myOtherFunction();
  return 0;
}