import React from "react";

const Blog = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-purple-500 underline underline-offset-2">
        React Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-6 mt-8">
        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">
            When should use context API.
          </h1>
          <p className="text-md font-medium">
            Context API is like a network tower, if you use context API you can
            easily send data from one components to another components without
            using props. The context API is used in the main components so that
            all child components are in the range of the context API. When it's
            necessary to pass the same data multiple times to multiple
            components, it's difficult to pass and receive data as props, then
            this task can be done very easily with the help of context API.
          </p>
        </div>

        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">
            What is react custom hook?
          </h1>
          <p className="text-md font-medium">
            A custom hook is a special JavaScript function whose name starts
            with use and can be used to call other hook. Custom React
            JavaScript hook are reusable functions that's needs to implement
            unique functionality to the React applications.
          </p>
        </div>

        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">What is useRef() hook.</h1>
          <p className="text-md font-medium">
            UseRef() hook are usually used for DOM manipulation. useRef() are
            very similar to state but using useRef() hook does not re-render
            the components. By using useRef() hook on the reference of an HTML
            attribute, the style of that attribute and many more can be changed
            very easily.
          </p>
        </div>

        <div className="border border-gray-200 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold mb-5">What is useMemo() hook.</h1>
          <p className="text-md font-medium">
            useMemo() is a function that returns a memoized value of a passed in
            resource-intensive function. If the value of a mathematical
            calculation or any other function is kept in useMemo() hook, then
            useMemo hook keeps the data in it's memory. As useMemo() stores the
            value of a calculation or function in it's memory, the output is
            available as soon as the code runs. useMemo() hook is very useful
            in optimizing the performance of a React component by eliminating
            repeating heavy computations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
