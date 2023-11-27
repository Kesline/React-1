### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive user experience. It allows developers to build reusable UI components and manage the state of an application efficiently. React is often used for creating dynamic web applications where data can change over time without reloading the page.



- What is Babel?
Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript features and syntax, and then transforms that code into a backward-compatible version of JavaScript that can run in older browsers or environments. It is commonly used in React projects to enable the use of features like JSX and other modern JavaScript syntax.



- What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML-like code in your JavaScript files, making it more convenient to describe the structure of React components. JSX gets transpiled into regular JavaScript code by tools like Babel.



- How is a Component created in React?
A React component can be created by defining a JavaScript class or function that extends or returns React.Component (class component) or uses the function keyword (functional component). Components can include a render method or directly return JSX to describe the UI. Components can also manage their own state and receive data through props.



- What are some difference between state and props?
Props (short for properties) are data passed into a component from its parent, and they are immutable within the component. State, on the other hand, is internal to the component and can be changed by the component itself. Props are used to pass data from parent to child components, while state is used for managing a component's internal state.



- What does "downward data flow" refer to in React?
"Downward data flow" in React refers to the practice of passing data from parent components to their children through props. Data in a React application typically flows in a unidirectional manner, from higher-level components to lower-level components. This helps maintain a clear and predictable flow of data, making the application easier to understand and debug.



- What is a controlled component?
A controlled component in React is a component whose form elements (like input fields) are controlled by React state. The value of the input is controlled by the state, and any changes to the input trigger a state update. This allows React to be the "single source of truth" for the component's state.



- What is an uncontrolled component?
An uncontrolled component is a component where the form data is handled by the DOM itself rather than controlled by React state. In uncontrolled components, the form elements store and manage their own state, and React does not have direct control over them. Refs are often used to interact with the DOM directly in uncontrolled components.



- What is the purpose of the `key` prop when rendering a list of components?

The 'key' prop is used to give a unique identity to each element in a list of components. React uses the 'key' to efficiently update and re-render components in a list. It helps React identify which items have changed, been added, or been removed, ensuring that the virtual DOM updates accurately reflect the changes in the underlying data.



- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using array indexes as keys can lead to issues in React's reconciliation process. If items are added or removed from the beginning or middle of the list, the index of other items may change, leading to incorrect component updates. It's better to use unique and stable identifiers as keys to avoid unintended side effects during list updates.



- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook in React that allows you to perform side effects in function components. It is commonly used for tasks such as data fetching, subscriptions, or manually changing the DOM. The hook takes a function as its first argument, which will be executed after the component renders. It can also return a cleanup function to handle any necessary cleanup operations.



- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a hook in React that returns a mutable object called a ref object. The current property of the ref object can be assigned any value, and it persists across renders. Unlike state, changes to a ref value do not cause a component to re-render. useRef is often used to persist values between renders, such as accessing and modifying the DOM directly.



- When would you use a ref? When wouldn't you use one?
You might use a ref when you need to interact with the DOM directly, such as accessing or modifying a DOM element. Refs are also useful for persisting values between renders without causing re-renders. However, you wouldn't use a ref for managing dynamic data that affects the component's UI; for that, you would typically use state.



- What is a custom hook in React? When would you want to write one?
A custom hook is a JavaScript function that starts with the prefix use and can call other hooks. Custom hooks allow you to reuse stateful logic across multiple components. You might want to write a custom hook when you find yourself duplicating code related to state management, side effects, or any other complex logic. They help in keeping the component logic modular and easy to understand.
