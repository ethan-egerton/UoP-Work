pub mod string_helper {
  /// Returns the number with the correct ordinal based on the number inputted
  /// 
  /// # Arguments
  /// 
  /// * `number` - The number to check
  /// 
  /// # Examples
  /// 
  /// Given the value of 11, as_ordinal returns "st"
  /// 
  /// ```
  /// let arg = 11;
  /// let result = as_ordinal(arg);
  /// 
  /// assert_eq!(result, String::from("11th"));
  /// ```
  /// 
  /// Given the value of 103, as_ordinal returns "rd"
  /// 
  /// ```
  /// let arg = 103;
  /// let result = as_ordinal(arg);
  /// 
  /// assert_eq!(result, String::from("103rd"));
  /// ```
  pub fn as_ordinal(number: u32)-> String {
    let ordinal = number.to_string()
        + match number % 10 {
          1 if number % 100 != 11 => "st",
          2 if number % 100 != 12 => "nd",
          3 if number % 100 != 13 => "rd",
          _ => "th",
        };

    return ordinal;
  }

  /// Returns the first word of a string
  /// 
  /// # Arguments
  /// 
  /// * `text` - The string to trim
  /// 
  /// # Examples
  /// 
  /// Given a single word with no spaces, first_word will return that word
  ///
  /// ```
  /// let arg = String::from("Hello");
  /// let result = first_word(arg);
  /// 
  /// assert_eq!(result, String::from("Hello"));
  /// ```
  /// 
  /// Given a string with multiple words, first_word will return the first word
  /// ```
  /// let arg = String::from("Red Green Blue");
  /// let result = first_word(arg);
  /// 
  /// assert_eq!(result, String::from("Red"));
  /// ```
  pub fn first_word(text: String) -> String {
    let mut word = String::new();
    for elem in text.chars() {
      if elem == ' ' {
        return word;
      }
      word.push(elem);
    }
    return word;
  }
}