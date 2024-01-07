#include <iostream>

#include "MathHeader.h"

using namespace std; 
//Function sum two number integers
int add(int a, int b){
  return a + b;
}

double mutiply(double x, double y){
  return x * y;
}



int main(){
  int sum = add(5,5);
  double product = mutiply(2.5 ,7.2);


// print de results

std::cout << "Sum: " << sum << std::endl;
std::cout << "product: " << product << std::endl;
return 0;
}
