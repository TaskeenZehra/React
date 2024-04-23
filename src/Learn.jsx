import { useState } from 'react';
import '../css/Learn.css'; 

const Learn = () => {

  const [showQuestions, setShowQuestions] = useState(false);

  
  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  const dataTypeQuestions = [
    { question: "What is the output of console.log(10 + '20');?"},
    { question: "What is the length of the string 'JavaScript'?" },
    { question: "What is the result of 10 / 3?" },
    { question: "What is the result of true && false?" },
    { question: "What is the value of x after the following code executes: let x = 5; x += 2;?"}
   
  ];

  return (
    <div className="learn-container">
      <h1>JavaScript Learning</h1>

      
      <section>
        <h2>Basic Concepts</h2>
        <p>JavaScript is a versatile programming language used for web development.</p>
      </section>

     
      <section>
        <h2>JavaScript Syntax</h2>
        <p>JavaScript syntax defines the rules for writing code in JavaScript.</p>
        <pre>
          <code>
            {`// Sample JavaScript code
const greeting = 'Hello, world!';
console.log(greeting);
`}
          </code>
        </pre>
        <p>JavaScript uses semicolons (;) to terminate statements.</p>
        <pre>
          <code>
            {`// Sample JavaScript code with multiple statements
const x = 10;
const y = 20;
console.log(x + y);
`}
          </code>
        </pre>
       
      </section>

   
      <section>
        <h2>JavaScript Variables</h2>
        <p>JavaScript variables are used to store data values.</p>
        <pre>
          <code>
            {`// Sample JavaScript code with variables
let x = 10;
const y = 20;
`}
          </code>
        </pre>
        <p>Variables declared with <code>let</code> can be reassigned, while variables declared with <code>const</code> cannot.</p>
        <pre>
          <code>
            {`// Reassigning a variable declared with let
let x = 5;
x = 10; // Valid
console.log(x);

// Attempting to reassign a variable declared with const
const y = 20;
y = 30; // Invalid
console.log(y);
`}
          </code>
        </pre>
      </section>

      
      <section>
        <h2>JavaScript Data Types</h2>
        <p>JavaScript has several data types, including strings, numbers, booleans, etc.</p>
        <div className="data-types">
          <div>
            <h3>Strings</h3>
            <pre>
              <code>
                {`const message = 'Hello, world!';`}
              </code>
            </pre>
      
          </div>
          <div>
            <h3>Numbers</h3>
            <pre>
              <code>
                {`const num = 42;`}
              </code>
            </pre>
  
          </div>
          <div>
            <h3>Booleans</h3>
            <pre>
              <code>
                {`const isValid = true;`}
              </code>
            </pre>
           
          </div>
        </div>
      </section>

      <section>
        <h2>Practice Questions</h2>
        <ul className={showQuestions ? 'practice-questions show' : 'practice-questions'}>
          {dataTypeQuestions.map((item, index) => (
            <li key={index}>{item.question}</li>
          ))}
        </ul>
        <button onClick={toggleQuestions}>
          {showQuestions ? 'Hide Practice Questions' : 'Show Practice Questions'}
        </button>
      </section>
    </div>
  );
};

export default Learn;
