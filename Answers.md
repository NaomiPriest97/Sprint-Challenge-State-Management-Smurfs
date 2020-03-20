1. What problem does the context API help solve?
    The Context Api is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
Why is the store known as a 'single source of truth' in a redux application?
    Actions - payloads of information that send data from your application to your store, only source of information for the store. 
    Reducers - a function that determines changes to an application's state. It uses the action it receives to determine this change
    Store - redux is a state container for Javascript apps, often called a redux store. It stores the whole state of the app in an immutable object tree.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The difference between component state and application state is that application state is narrowed down through cursor paths - that is, sub components may not have access to the entire application state - while shared state is always accessible.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then usedto dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    I personally prefer context over redux just because it's so much simpler.