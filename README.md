## ১.  What is the difference between null and undefined?
#### Answer: Undefined মানে হচ্ছে declear করা হয়েছে কিন্তু আ্যাসাইন করা হয়নি। Undefined টাইপ হচ্ছে Undefined. JavaScript automatically  Undefined সেট করে । 
#### অ্ন্যদিকে  null মানে হচ্ছে ডেভেলপার ইচ্ছা করে এমটি মান সেট করে দেয় । null টাইপ হচ্ছে object. ডেভেলপার null সেট করে।

## ২. What is the use of the map() function in JavaScript? How is it different from forEach()? 
#### Answer: map() কে কোনো এ্যারে অপারেশন করতে বললে সে তা করে আবার নতুন এ্যারে হিসেবে দেয় । আর forEach() কোনো নতুন এ্যারে দেয় না । এ্যারে থেকে উপাদান একটা একটা করে দেয়। কিন্তু রিটার্ন দেয় না।
#### map() - when you need a new array   forEach() -  when you just want to run code for each item

## 3. What is the difference between == and ===?  
#### Answer: (===) is first check the data type and then check the value. 
### (==) is convert the data type to the same data type, which is called coercion, then check the value. 

## 4. What is the significance of async/await in fetching API data?
#### Answer: The significance of async/await in fetching API data is  its ability to provide a cleaner, more readable, and synchronous-like syntax for asynchronous operations, which simplifies complex workflows and error handling. and the async/await is better than .then()  

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
#### Answer: Global Scope -> Globally declare a variable that access any where of the code.
#### Block Scope -> When a variable is declared inside the curly bracket {}, and the variable is accessed only within the curly bracket {}. \
#### Function Scope -> Is called Local Scope. When a variable declare inside any function is called function scope. The variables are accessed only inside the function. And the functions are called anywhere in code.   
