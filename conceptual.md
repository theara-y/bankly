### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - JWT stands for JSON Web Token. It is an open standard that defines a way to securely transmit data between parties as a JSON object.

- What is the signature portion of the JWT?  What does it do?

  - The signature is the result of encrypting the encoded header, the encoded payload, and a secret all together with the hashing algorithm specified in the header. This signature indicates the authenticity of a JWT and is used to verify that the JWT has not been altered along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  - Yes, the payload for a JWT is meant to be decodable and can be freely decoded by using any number of sites including jwt.io. The payload therefore should not contain any sensitive information.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  - After the user successfully authenticates, the server will create a JWT by specifying the payload and signing the token with the secret on the server. This token is given back as a response to the client. The client can then make a request to a server with its JWT. That server will then verify the JWT using 

- Compare and contrast unit, integration and end-to-end tests.

  - Unit testing is the process of testing small units of code, such as pure function. These sorts of tests are not concerned with the user in mind. Instead the purpose of unit testing is to validate that a unit or function that a developer has written is working as intended and meets the requirements in multiple scenarios. This ensures that the unit is fit for use in other components.

  - Integration testing is the process of testing multiple components together as a group to validate that the combined behavior and interaction between components meets requirements. This type of testing occurs after unit testing.

  - End-to-end testing is the process of testing the entire system with all the components assembled. This type of tests mimics user interactions with an application, and can be the quickest way to find issues that users may encounter in a live environment.

- What is a mock? What are some things you would mock?

  - Testing a component sometimes requires dependencies. These dependencies could mean spinning up an instance of another component which might be difficult to do in an isolated test or the a dependency on random logic. A mock allows you to set up an imitation of such dependencies quickly and easily to be used in order to enable these types of tests. A mock could anything the tests may require such as data, functions, classes or other components.

- What is continuous integration?

  - Continuous integration is the process of integrating new code, features, or changes into a codebase by setting up pipelines and scripts to automate the process. When a developer introduces a change, their change is automatically tested and built for verification, and can be pushed or reverted from environments with relatively fewer actions if it had been done manually.

- What is an environment variable and what are they used for?

  - An environment variable is a binding that a user can define to have some value, much like a programmer defining variables in a programming language. The difference is that an environment variable is defined in the scope of the computer system or machine. These environments can be accessed by programs and additionally be used to change the behavior of a process.

- What is TDD? What are some benefits and drawbacks?

  - TDD stands for test-driven development, which is the practice of writing tests first before the implementation. The benefit of TDD that the implementation must later conform to the tests and so testable code is written from the beginning. It can also help the developer write confidently and develop more quickly, as well as introduce organization and refactoring by simply running the written tests to ensure that they are not introducing breaking changes. The drawbacks of TDD is that it will delay the initial development as time is spent on writing tests and not focused on making deliverables, but this drawback is negligible because without proper testing, that time is later spent debugging issues and can slow down development in the future.

- What is the value of using JSONSchema for validation?

  - Using JSONSchema provides a way to stardardize the exchange of JSON data. It allows us to document the JSON data and specify constraints so that it can be validated, prevent errors and provide consistent use. 

- What are some ways to decide which code to test?

  - Ideally, we want to test everything and ensure a high code coverage especially code that is likely to change or be refactored. We want to test code that is complex and pure functions to validate their requirements. We want to test for sucesses and failures and errors. We want to test for responses. We want to test for security. We want to be able to enforce rules that could possibly break the application or produce an undesired effect when changes are introduced.

- What does `RETURNING` do in SQL? When would you use it?

  - `RETURNING` is a clause that can optionally appear at the end of `INSERT`, `UPDATE`, and `DELETE` queries. This clause is used to specify the result or columns to return on a row that was affected.

- What are some differences between Web Sockets and HTTP?

  HTTP is a stateless web protocol where the client sends a request from their network and later receives a response which the browser will read and render. Web sockets on the other hand establishes a persistent connection between hosts through which data can continously travel until the connection is severed. Web sockets are more appropriate for applications such as online games and chat applications where the data is continously sent.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  - I like using both technologies for different reasons. I like the way Express implemented middleware functions to build a web application that is modular and robust. I like working with the Node Package Manager to easily start a project and install and define dependencies and scripts. I like working with Javascript for its flexibility. I like Flask for using Python, which I like for its simplicity and I like the many libraries used that abstracted and sped up development such as SQLAlchemy, Flask Migrate, and Flask Login. Express can also do the same thing so I would not mind working with either technologies.


