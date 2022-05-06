use std::io;
use kitten::string_helper::as_ordinal;

fn main() {
  const KITTEN: &str = "🐱";
  println!("Hi from {}!", KITTEN);

  let number_of_files: u32;

  println!("How many files would you like to open?");

  let mut input: String = String::new();
  match io::stdin().read_line(&mut input) {
    Ok(_) => {
      input = input.trim().to_string();
    }
    Err(error) => {
      panic!("Error while reading your input: {}", error);
    }
  }

  match input.parse::<u32>() {
    Ok(0) => {
      panic!("Error while parsing your input: You need to provide at least 1 filename");
    }
    Ok(num) => {
      number_of_files = num;
    }
    Err(error) => {
      panic!("Error while parsing your input: {}", error);
    }
  }

  for number_of_file in 1..(number_of_files + 1) {
    

    println!(
      "[{}/{}] Please enter the name/path to the {} file:",
      number_of_file, number_of_files, as_ordinal(number_of_file)
    );

    // need to ask for input here
  }

  println!("Bye from {}!", KITTEN);
}

