# *C++ Style Guide*

While styling your code is not the most exciting part of software development, writing in a clean, consistent, and easy-to-read style sets you (and us, the instructors) up for success. Benefits of well-formatted code include the following: 

- Improved readability

- Enhanced collaboration

- Easier debugging

- Better maintainability

- Professionalism

- Reduction in headaches and eye strain

While C++ style guidelines are unfortunately not standardized between professional organizations, we ask that you adhere to ours for the purposes of grading and our ability to help you debug your code if you ever find yourself stuck. We would, however, like to emphasize that these are **guidelines**, not **rules**. While we ask that you follow our guidelines to the best of your ability, we acknowledge that our guidelines are not perfect. If and when you do break them, leave a comment above the offending block, describing the breach and why it occurred. For example:

```cpp
switch (static_cast<Image>(image_type)) {
    case PNG:
        std::cout << "PNG\n";
    case JPEG:
        std::cout << "JPEG\n";
    case WEBP:
        std::cout << "WEBP\n";
    default:
        // While the default case is unreachable, it resolves a GCC/Clang
        // warning saying that "not all control paths return a value"
        return nullptr;
}
```

We will be using industry-standard tools to analyze your code, perhaps including clang-tidy, and cppcheck. We recommend installing these utilities. Additionally, we will be compiling your code with the `-Wall, -Wpedantic, -Wextra, -std=c++20` flags, so it's recommended that you compile with those flags as well. Your grade is affected by how many warnings you have in your files, so be sure to resolve them when they appear.

## Indentation, Braces, and Whitespace

### **Indentation & Braces**:

 _Always_ be consistent with your indentation, as the control flow of your program will be much easier to follow. We don't want to see submissions that look like this:
 
 ```cpp
 /* Gross! I can't follow this easily, and makes me grumpy. Don't do this if you want a good grade */
std::vector<int>& n_squared_sort(std::vector<int>& vec) {
    for (size_t i = 0; i < vec.size() - 1; ++i) {
    bool is_swapped = false;
    for (size_t j = 0; j < vec.size() - i - 1; ++j) 
{
        if (vec[j] > vec[j + 1]) {
                std::swap(vec[j], vec[j + 1]);
                is_swapped = true;
        } else {
                std::cout << "no swap\n"; }
            
        }
        if (!is_swapped)
        {
            break;
            }
}
    return vec; }

 ```
 Instead, adhere to the following guidelines:

 ## **Indentation**
 
We prefer 4 spaces for each indentation level as this is what Python will use later in the semester, but 2 spaces is also acceptable. _Never_ mix tabs and spaces, as this will surely come back to haunt you once we get to the Python leg of the course. Additionally, some editors will display tabs as 4 spaces, others as 2, others as 6. It's best to avoid tabs whenever possible. Most editors can be configured to insert space characters whenever the TAB key is pressed.
  
## **Brace style**

Use the [One True Brace Style](https://en.wikipedia.org/wiki/Indentation_style#One_True_Brace) for your code. In short, all braces should reside on the same line as their declaration and constructs such as `else` and `catch` should start on the same line as the end of the related `if` and `try`:

### One True Brace Style
```cpp
// Function's first brace on the same line as its signature
std::vector<int>& n_squared_sort(std::vector<int>& vec) {
    // Brace on same line as loop
    for (size_t i = 0; i < vec.size() - 1; ++i) {
        bool is_swapped = false;
        for (size_t j = 0; j < vec.size() - i - 1; ++j) {
            // Same line brace
            if (vec[j] > vec[j + 1]) {
                std::swap(vec[j], vec[j + 1]);
                is_swapped = true;
            // Same line brace and "cuddled" to the if statement
            } else {
                std::cout << "no swap\n";
            }
        }
        // Braces required even for one-liners
        if (!is_swapped) {
            break;
        }
    }
    return vec;
}
```
You may also use the [Allman](https://en.wikipedia.org/wiki/Indentation_style#Allman) style if you prefer. It is similar to the One True Brace style, but opening braces are placed on the following line, at the same level of indentation as the declaration:

### Allman Style
```cpp
// Brace follows declaration
std::vector<int>& n_squared_sort(std::vector<int>& vec) 
{
    // Brace on next line
    for (size_t i = 0; i < vec.size() - 1; ++i) 
    {
        bool is_swapped = false;
        for (size_t j = 0; j < vec.size() - i - 1; ++j)
        {
            if (vec[j] > vec[j + 1])
            {
                std::swap(vec[j], vec[j + 1]);
                is_swapped = true;
            }
            // else is not cuddled to the if
            else
            {
                std::cout << "no swap\n";
            }
        }
        // Braces required even for one-liners
        if (!is_swapped)
        {
            break;
        }
    }
    return vec;
}
```

Any line that is above 100 columns should be broken up into more lines. Indent the overflow to line up with the first line of text:

```cpp
// Too long, max width is column 144
std::chrono::duration<double> result = getElapsedTime(std::chrono::high_resolution_clock clock, std::chrono::duration<double> paused_duration);

// Better, max width is column 96
std::chrono::duration<double> result = getElapsedTime(std::chrono::high_resolution_clock clock,
                                       std::chrono::duration<double> paused_duration);

```

## **Whitespace and blank lines**

In general, there should be whitespace on either side of any arithmetic, bitwise, or logical operator. There should also be whitespace after loop, conditional, and namespace declarations as well as function arguments. There should **not** be whitespace after a function name or cast.

Place blank lines between declarations and implementations of functions. You may also place blank lines between steps of a function if you wish.

Don't submit code that looks like this if you care about your grade:

```cpp
/* Don't make me read this, I will become upset */
int doWork (int first,int second,int third) {
    int result=second[0];
    for(size_t j=0;j<second.size()-1;++j) {
        if(op_combination[j]=='+') {
            result+=second[j+1];
        }else if(op_combination[j]=='*') {
            result*=second[j+1];
        }else if(op_combination[j]=='|') {
            result=std::stoi (std::to_string (result)+std::to_string (second[j+1])+first);
        }
    }
}
int main  (){
    int result=doWork  (1,2,3);
    return 0;
}
```
Do this instead:

```cpp
// No space after function name. Spaces between function parameters and spaces between operators.
int doWork(int first, int second, int third) {
    int result = second[0];
    // Whitespace after the for loop declaration is not necessary, but acceptable
    for (size_t j = 0; j < second.size() - 1; ++j) {

        if (op_combination[j] == '+') {
            result += second[j + 1];
        } else if (op_combination[j] == '*') {
            result *= second[j + 1];
        } else if (op_combination[j] == '|') {
            result = std::stoi(std::to_string(result) + std::to_string(second[j + 1]) + first);
        }
    }
}

// Blank line after function implementation
int main() {
    int result = doWork(1,2,3);
    return 0;
}
```
For preprocessor directives, separate them from your main code with a blank line. Separate groups of preprocessors with a blank line as well. Order your directives by the following order, alphabetized: 
1. include guards (`#ifndef`, `#pragma once`)
2. STL includes
3. 3rd party library includes
4. Includes from your project

```cpp
#pragma once

#include <array>
#include <string>
#include <unordered_map>
#include <vector>

#include <SFML/Graphics.hpp>

#include "DuckPond.hpp"
#include "Goose.hpp"

class PublicPark {
    // Rest of the code...
}
```

## **Naming and Declarations**

A famous [quote](https://martinfowler.com/bliki/TwoHardThings.html) in computer science reads:

> "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors."

Coming up with good names for functions, classes, enums, and files is difficult. The most important part is being consistent. Generally speaking, your names should be meaningful and their type easily inferred. Do not abbreviate, use single letter variables, include type information in the name, or declare more than one variable per line. If there are several keywords in the declaration, prefer this order:

```cpp
[[maybe_unused]] [[nodiscard]] virtual const/constexpr volatile static inline auto/unsigned long long int* const function() const noexcept override;
```

- For variables, use nouns in lower_snake_case or lowerCamelCase. It should answer the question "What is this?" If it is a boolean, prefix the name with the words "is," "has," or similar. Do not use `auto` unless you're sure of what you're getting back (see the "*Things to never do* section for why). You may also use structured bindings, if you wish. Use `const` as much as possible; if your variable isn't supposed to change, then guarantee it by declaring it `const` so that you don't make a mistake down the line.

    - A count of rubber ducks: `unsigned num_ducks = 0;`
    - A player's score in a Player struct: `double score = 1.0;`
    - The name of a book: `const std::string bookTitle = "The Count of Monte Cristo";`
    - A boolean checking if a Player is a winner: `bool is_winner;`
    - A variable using type inference: `auto board = boardCopy.get2DVector();`
    - Structured binding, assuming `getDimensions()` returns a `std::pair<int, int>`: `const auto [x, y] = getDimensions()`

- For functions, use verbs combined with a noun in lowerCamelCase. The name should answer the question "What does this do?" Prefix the function with [[maybe_unused]] if it isn't being used by your code, and [[nodiscard]] if the return value should always be used. Avoid using trailing return types. If the function makes no changes to any parameters, declare the parameters `const`. If the function makes no changes to member variables, declare the function `const`. 

    - A function that combines two vectors: `[[nodiscard]] std::vector<int> combine(std::vector<int> first_vector, std::vector<int> second_vector);`
    - A function that renders a main menu window on the screen: `void renderMainMenu(sf::RenderWindow& window);`
    - A function that pauses the game: `void pause(Game* game)`
    - A function that calculates the average of a vector: `[[nodiscard]] double getAverage(const std::vector<double>& scores) const;`
    - Do not declare functions with trailing return types: `auto function(int param) -> std::string;`

- Classes, structs, and aliased types should be in PascalCase.
    - A class of a duck pond: `class DuckPond`
    - A struct of a Linked-list node: `struct ListNode`
    - An alias with the `using` keyword: `using Clock = std::chrono::steady_clock`

- Pointers and references should be declared with the "*" or "&" characters next to the variable's type or next to the variable's name. Do not put the character with whitespace on both sides.
    - Left aligned: `const char* arr = "array"`
    - Right aligned: `const char *arr = "array"`

- Exceptions:
    - For a loop variable, it's fine to have a one-letter name: `for (size_t i = 0; i < arr.size(); ++i)`
    - When overloading assignment operators, it's common to name the parameters "lhs" and "rhs" for left-hand-side and right-hand-side respectively.
    - Instead of having [magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) in your code, replace them with a named variable in SCREAMING_SNAKE_CASE that is declared `constexpr`. For example:
    ```cpp
    bool checkScoreValidity(const std::vector<int>& scores) {
        for (const int score : scores) {
            // Why 1600?
            if (score > 1600) {
                return false;
            }
            return true;
        }
    }
    ```
    ```cpp
        bool checkScoreValidity(const std::vector<int>& scores) {
        constexpr int MAX_SAT_SCORE = 1600;
        for (const int score : scores) {
            // Much clearer
            if (score > MAX_SAT_SCORE) {
                return false;
            }
            return true;
        }
    }
    ```
    - `enum` members should be snake_case.
    ``` cpp
    enum class HexColors : int {
        gator_blue = 0x0021A5, gator_orange = 0xFA4616, gator_green = 0x01723E
    }
    ```
    - If in everyday speech, an abbreviation or acronym is more commonly said than the full name, use that abbreviation in a variable, class, or function name. Treat the abbreviation as a word (i.e. don't capitalize individual letters in it)
        - `Image united_states_of_america_flag` should be shortened to `Image usa_flag`
        - `std::vector<std::vector<unsigned char>> parseTruevisionGraphicsAdapter(const Image& image)` can be shortened to `void parseTga(const Image& image)`
        - `class CommandLineInterfaceParser` should be shortened to `class CLIParser`

## **Classes and Structs**

C++'s first name was "C with Classes" when it was in its infancy. Object oriented programming is perhaps the biggest paradigm in C++, and so getting classes right is essential.

- ### **Preprocessor directives and naming**
    Class names and their files should be the same. For a RubberDuckFactory class, you should name the header file RubberDuckFactory.hpp and the implementation file RubberDuckFactory.cpp. We will also accept RubberDuckFactory.h for the header file.

- ### **Class member ordering**
    When writing classes, put information that your client might need to know at the top of the class, and work your way down. This will typically mean you'll start with public functions, then protected variables and functions, then private variables and functions. Protected and private functions and variables should be suffixed with an underscore. Place a blank line after each function and before each access modifier.


```cpp
class Pond {
public:
    // Constructors at the top; your client cannot use your class if they can't construct it
    Pond(std::vector<Animal*> animals, std::string material);

    // Operator overloads right after, they're important for clients to know
    Pond& operator+=(const Animal& rhs);

    // Getters and setters may be in any order
    [[nodiscard]] unsigned getNumAnimals() const;

    [[nodiscard]] double getHappinessLevel() const;

    void addFeed(double foodMass);

    void addAnimal(Animal* animal);

    virtual void repairPond() = 0;

    // Destructor at the bottom, they're rarely called explicitly
    virtual ~Pond() = default;

protected:
    unsigned num_animals_;

private:
    double [[nodiscard]] calculateFoodConsumed_() const;

    std::vector<Animal*> animals_;
    const std::string material_;
};
```

### **Constructors**

Prefer member initialization lists to setting variables in the constructor's body:

```cpp
    Pond(std::vector<Animal*> animals, std::string material) :
    animals_(std::move(animals)),
    material_(std::move(material)) {}
```

### **Structs**
Structs come from C, where they could only hold public variables. In C++, we keep with this use of structs. Therefore, they should never have any access modifiers, nor functions in them. All member variables should be public. If you want encapsulation, use a class instead.

```cpp
// No! Either use a class or declare the struct with just x and y!
struct Coords {
public:
    Coords(int x, int y);

    int getX() const;

    int getY() const;

    void setX(int x);

    void setY(int y);
    
// Why even bother making this private if the members are exposed with getters and setters?
private:
    int x_ = 0;
    int y_ = 0;
};
```
```cpp
// Much better
struct Coords {
    int x = 0;
    int y = 0;
}
```


## **Functions**

Functions should do only one thing and do that one thing well. If you find yourself describing the function with the word "and", the function is more than around 40 lines of code, or the function has more than 4 parameters, consider breaking the function up into multiple functions. Note that these guidelines also apply to `int main()`.

- ### **Pass-by-value vs pass-by-reference**

    In general, when passing parameters that aren't a built-in (or primitive) data type to a function, you'll want to pass them by reference, rather than by value. If the value isn't changing, then pass by const reference. Do note that for built-in types like int or double, there's no performance benefit to passing by reference, so don't do it unless you have a good reason.
    ```cpp
    // Passed by value, makes a copy, less efficient, probably won't do what you want
    int doWork(std::string name);

    // Passed by reference, more efficient, acts on the original name variable rather than a copy of it
    int doWork(const std::string& name);
    ```
    In a constructor, you often want to delete the memory at the original variable. Use `std::move()` for this, which will be discussed further in the class.

- ### **Nesting**

    Never nest functions more than 4 layers deep, as this makes code increasingly unreadable. If you find yourself needing a function with this much nesting, you should consider refactoring.

    ```cpp
    // Adapted from CodeAesthetic: https://youtu.be/CFRhGnuXG-4?t=70
    // Control flow and relevant variables are hard to follow
    int calculate(const int bottom, const int top) {
        if (top > bottom) {
            int sum = 0;
            for (int number = bottom; bottom <= top; ++number) {
                if (number % 2 == 0) {
                    // Yuck, four layer nesting!
                    sum += number;
                }
            }
            return sum;
        } else {
            return 0;
        }
    }
    ```
    The early return is a quick and easy way to de-nest your code. Put the "unhappy" code first and return early if that condition fails:

    ```cpp
    // Much better
    int calculate(const int bottom, const int top) {
        // Early return removes a layer of nesting
        if (top < bottom) {
            return 0;
        }
        int sum = 0;
        for (int number = bottom; number <= top; ++number) {
            // Use a ternary to reduce another layer of nesting
            number % 2 == 0 ? sum += number : sum += 0;
        }
        return sum;
    }
    ```


## **Commenting**

More is less when commenting, as comments themselves can get bugs when the code nearby them has changed. Comment bugs are some of the **most difficult** kind of bugs to find, since the compiler ignores all comments. By writing fewer comments and letting your code speak for itself, you're preventing misleading comments from appearing.

- ### **When to comment**

    Comments should be targeted towards a moderately experienced C++20 developer. However, if in doubt, insert a comment. Try to avoid end-of-line comments as they can make the code difficult to read. Unless it's very short (5 words or less), put the comment above the line of code of interest.

    ```cpp
    /* The grader will not be checking all these comments and will likely be unhappy */

    // Include IO capabilities
    #include <iostream>
    // Include C++ style strings instead of relying on char arrays
    #include <string>
    // This is the main function that returns an int, which represents whether the program succeeded or failed
    int main() {
        // Initialize a variable to hold the "Hello World!" string
        std::string str = "Hello World!";
        int i = 0;
        // Increment i
        i++;
        // Print to standard output with cout
        std::cout << str << i << " " << std::endl;
        // return exit success
        return 0;
    }
    ```
    None of those comments were at all necessary, as nothing particularly interesting happened in the code. We only need comments inside a function if the code does something unusual or unexpected. For example, this code needs a comment, otherwise it isn't clear why there's an empty while loop:

    ```cpp
    // While loop pops entire event queue, preventing left-clicks from interacting with background window
    sf::Event event = {};
    while (window_.pollEvent(event)) {}
    ```

    You also should include a comment if you suppress some kind of warning from a linter.
    ```cpp
    // Could also be done iteratively via a std::stack, but we know that
    // there will never be more than 500 coords, so an overflow isn't possible
    void BoardModel::flood(int& coords) {// NOLINT(*-no-recursion)

        // function body
    }
    ```

- ### **RMEs (Requires, Modifies, Effects)**

    In projects, we will ask you to insert a function synopsis in the functions you implement. Early in the semester, we will have you do this as an RME-style comment. The sections are as follows:

    - Requires: Parameters and assumptions made before calling the function
    - Modifies: Parts of the program state outside of the function that are modified
    - Effects: Intended actions the function performs and returned variables

    ```cpp
    //REQUIRES: b is not 0 and user_integer is a number
    //MODIFIES: cin and cout
    //EFFECTS: Requests an int from the user and then divides it by b, printing out the answer as a double.
    void divide(int b) {
        int user_integer;
        std::cin >> user_integer;
        std::cout << static_cast<double>(user_integer) / b << std::endl;
    }
    ```
    For further reading about RMEs, read the University of Illinois' synopsis on them:
    
    <https://www.cs128live.org/course-book/resource/RMEs>

- ### **Doxygen**

    Later on, Doxygen comments will be required for functions. Signify a Doxygen comment by starting a comment with `/**`. We require the following Doxygen parameters:

    ```cpp
    /**
    * @brief Request a number from standard input, divide it by the parameter, and print the result.
    * @author Anthony Thisse
    * @author Adapted from the University of Illinois: https://www.cs128live.org/course-book/resource/RMEs
    * @param b The divisor of the division operation
    * (Longer function description, if needed)
    * Time compplexity: O(1)
    * Space complexity O(1)
    */
   void divide(int b);
   ```

## **Things to never do**

Some things in C++ were useful in a by-gone era, but are now dangerous [footguns](https://en.wiktionary.org/wiki/footgun). These features reduce readability, introduce subtle bugs, and generally make things break. Here's a few that you should avoid.

- The `goto` keyword

    - Too many uses of `goto` in your code will result in a significant deduction from your grade. One use of `goto` is too many. `goto` should be replaced by the use of `continue`, `break`, and `return`.

- Global variables
    - Depending on system, global variables can be initialized at different times, causing implementation-defined and unpredictable behavior. Additionally, global variables can change at _any point_ in your program, which can cause all kinds of nasty behavior. Just don't.

- `#define` constants

    - The C/C++ preprocessor is pretty stupid. Any time you use a `#define` constant, it's essentially copy-pasting that snippet into your code, which can lead to problems when dealing with operator precedence. Use `constexpr` or an `enum class` to declare constants instead.

- `using namespace`, especially in a header file
    - While handy, the `using namespace` causes namespace collisions, which can lead to incorrect functions being called. If you don't want to type `std::` before every STL function and type, use a non-namespace `using`.
    ```cpp
    #include <algorithm>
    using namespace std;

    int max(int a, int b) {
        std::cout << "my function\n";
        return a > b ? a : b;
    }

    int main() {
        int x = 20;
        int y = 30;
        // I want to call the max function described in <algorithm>, 
        // but this calls the one defined above.
        max(30, 20);
        return 0;
    }

- C-style casts

    - These are easy to write and are tempting to use, but **don't**. These are the most powerful types of cast and will essentially do both `static_cast` and `reinterpret_cast` while ignoring `const`. They're also hard to find via search tools, which makes bugs that arise from these particularly hard to track down.

- `malloc`, `realloc`, `calloc`, and `free`
    - These C functions are superseded by `new` and `delete`, and don't play nicely with classes.

- `typedef`
    - Again, this C keyword is superseded by the `using` keyword, which has an easier syntax and is much more versatile.

- Excessive use of `auto`, especially on built-in types

    While the `auto` keyword is nice, it can be another footgun source. Let's play a guessing game to see why. All you need to do is guess what type the `auto` keyword declares in the following code block.

    ```cpp
    auto number = -1;
    auto another_number = 10000000000;
    auto str = "Text";
    ```
    Were your answers `int`, `long`, and `const char*`? You probably got the last one wrong. By turning off our static-typing, we get unexpected behavior. Don't use `auto` unless you know *exactly* what you're getting back.

- Ignoring or suppressing compiler or linter warnings

    Warnings are meant to let you know that something is probably not what you want. The compiler and linter are nearly always smarter than us mortals, so suppress warnings with caution. Remember that we will be using those tools to check the quality of your code. We're also going to check for suppression comments, so make sure you have a good reason if you suppress a warning.


## **Closing Comments**

If a style guideline isn't found here, follow the ISO C++ guidelines found at <https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines> and open a ticket on the class Discord so we can resolve it here.

## **Credits**
Author: Anthony Thisse at the University of Florida