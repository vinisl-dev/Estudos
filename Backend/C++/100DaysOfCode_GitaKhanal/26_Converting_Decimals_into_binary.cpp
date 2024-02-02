#include <iostream>
using namespace std;
void convertDecimalToBinary(int decimalNumber){
  if (decimalNumber == 0){
    cout << "Binary representation: 0 " << endl;
    return;
  }

int binaryRepresentation[32];
int index = 0;

// convert decimal to binary
while (decimalNumber > 0){
  binaryRepresentation[index ++] = decimalNumber  % 2;
  decimalNumber /= 2;
}

cout << "Binary representation: ";
  for (int i = index -1; i >= 0; --i){
    cout << binaryRepresentation[i];
  }
  cout << endl;
}

int main(){
  int decimalNumber;
  cout << "Please enter a decimal number: ";
  cin >> decimalNumber;

  convertDecimalToBinary(decimalNumber);
  return 0;
}