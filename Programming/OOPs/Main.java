// Superclass
class Animal {
   
    String name;

    
    Animal(String name) {
        this.name = name;
    }

   
    void eat() {
        System.out.println(name + " is eating.");
    }
}
// Subclass
class Dog extends Animal {
    
    String breed;


    Dog(String name, String breed) {
        super(name); 
        this.breed = breed;
    }

    
    void bark() {
        System.out.println(name + " is barking.");
    }
}
public class Main {
    public static void main(String[] args) {
       
        Dog myDog = new Dog("Buddy", "Golden Retriever");

      
        myDog.eat();

        
        myDog.bark();

       
        System.out.println("Breed: " + myDog.breed);
    }
}
