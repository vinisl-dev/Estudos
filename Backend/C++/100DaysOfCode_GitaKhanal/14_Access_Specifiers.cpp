#include<iostream>

class MyClass {
  public: 
      int publicVar;

      void publicFunction(){
        std::cout << "Public function called."<< std::endl;
      }

  private:
    int privateVar;
    int outherVar;
    void privateFunction() {
      std::cout << "Private function called." << std::endl;
    }

    protected:
      int protectedVar;
    
      void protectedFunction() {
        std::cout << "Protected function called." << std::endl;
      }
};

int main(){
  MyClass obj;

  obj.publicVar=42;
  obj.publicFunction();

// variaveis e metodos inacessiveis para função main
  // obj.privateVar;
  // obj.outherVar;
  // obj.privateFunction();

  // obj. protectedVar;
  // obj.protectedFunction();

  // return 0;
}