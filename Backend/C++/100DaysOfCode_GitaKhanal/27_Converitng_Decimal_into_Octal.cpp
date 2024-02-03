#include <iostream>

using namespace std;

int main(){
int decimalNumber;
cout << "Enter a decimal number: ";
cin >> decimalNumber;
int octalNumber = 0;
int i = 1;
while (decimalNumber != 0){
  octalNumber += (decimalNumber % 8) * i;
  decimalNumber /= 8;
  i *= 10;
}
cout << "Converting to Octal: " << octalNumber << endl;
return 0;
}