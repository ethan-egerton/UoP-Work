use std::io;

fn main() {
    println!("Input two numbers to multiply\nNumber 1: ");

    let mut number1 = String::new();
    let mut number2 = String::new();

    io::stdin()
        .read_line(&mut number1)
        .expect("Failed to read line");

    let number1: u32 = number1.trim().parse().expect("Please type a number!");

    println!("Number 2: ");

    io::stdin()
        .read_line(&mut number2)
        .expect("Failed to read line");

    let number2: u32 = number2.trim().parse().expect("Please type a number!");
    

    let x = number1*number2;

    println!("{} times by {} is equal to {}", number1, number2, x);
}
