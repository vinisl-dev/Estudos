#include <iostream>
// verificar o que acontece no numero 15
using namespace std;

int main() {
  cout << "Enter an integer: ";
  int input;
  cin >> input;
// convert to binary
  cout << "Binary: ";
  for (int i = sizeof(int) * 8 - 1; i >= 0; --i ){
    cout << ((input >> i) & 1);
  }
  cout << endl;

//convert to hexadecimal
  cout << "Hexadecimal: 0x";
  if(input == 0){
    cout << '0'; //special case: input is 0
  }else {
    char hexDigits[] = "123456789ABCDEF"; //array with hex digits
    bool leadingZeros = true;
    for(int i = sizeof(int) * 2 -1; i >= 0; --i) {
      int nibble = (input >> (i * 4)) & 0xF; // cria um nibble
      if (nibble != 0 || !leadingZeros) {
        cout << hexDigits[nibble];
        leadingZeros = false;
      }
    }
  }
  cout << endl;
  return 0;
}