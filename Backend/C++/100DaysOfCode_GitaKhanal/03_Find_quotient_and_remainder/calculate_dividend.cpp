#include <iostream>
#include "calculator.h"

using namespace std;
int calculateQuotient(int dividend, int divisor){
  return dividend / divisor;
}

int calculateRemainder(int dividend, int divisor){
  return dividend % divisor;
}

int main(){

  int divisor, dividend;

  cout << "Enter dividend here: ";
  cin >> dividend;

  cout << "Enter divisor here: ";
  cin >> divisor;

  if(divisor == 0){
    cout << "divisor equal this zero";
    return 0;
  }  

  int quotient = calculateQuotient(dividend, divisor);
  int remainder = calculateRemainder(dividend, divisor);

  cout << "Quotient is = " << quotient << endl;
  cout << "Remainder is = " << remainder;
  return 0;
}