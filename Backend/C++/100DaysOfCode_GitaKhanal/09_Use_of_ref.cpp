#include <iostream>

int main(){

int originalValue =42;
int &referenceVar = originalValue;

std::cout << "Original Value: " << originalValue << std::endl;
std::cout << "Value through Reference: " << referenceVar << std::endl;

referenceVar = 99;
std::cout << "Modified Value of OriginalValue through Reference: "<< originalValue << std::endl;
}