#include <iostream>
using namespace std;

//parent
class MyClass {
  public:
    void myFunction() {
      cout << "Some content in parent class."<<endl;
    }
};

//child
class MyChild: public MyClass {
};

//Grandchild
class MyGrandChild: public MyChild{
};

int main() {
  MyGrandChild myObj;
  myObj.myFunction();
  return 0;
}