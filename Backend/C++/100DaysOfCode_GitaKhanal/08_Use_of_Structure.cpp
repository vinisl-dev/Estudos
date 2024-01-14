#include <cstdio>

struct Animal{
  char species[50];
  char sound[50];
  int legs;
};

int main() {

  Animal myAnimal1 = {"Lion", "Roar", 4};

  Animal myAnimal2 = {"Elephant", "Trumpet", 4};

  printf("%s says %s and has %d leg \n", myAnimal1.species, myAnimal1.sound, myAnimal1.legs);
  printf("%s says %s and has %d legs \n", myAnimal2.species, myAnimal2.sound, myAnimal2.legs);
return 0;
}