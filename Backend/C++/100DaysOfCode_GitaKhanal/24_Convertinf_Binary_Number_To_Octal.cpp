#include <iostream>
#include <cmath>


using namespace std;

int main(){
  long long binaryNumber; //isso é novo pra mim :0, como assim "long long"
  cout << "Enter a bianry number: ";
  cin >> binaryNumber;

  int octalNumber = 0;
  int decimalNumber = 0;
  int i = 0;

while (binaryNumber != 0){
  decimalNumber += (binaryNumber %10) * pow(2, i);
  ++i;
  binaryNumber /= 10;
}
i=1;

while (decimalNumber != 0) {
  octalNumber += (decimalNumber % 8) * i;
  decimalNumber /= 8;
  i *= 10;
}

cout << "Octal equivalent: " << octalNumber <<endl;
  return 0;
}