import React from 'react';

const Blogs = () => {
    return (
        <div>
          <h4> Question: What is Context API?</h4>
          <p>Answer: Context API is an alternative way of prop drilling or we can say we use context API instead of prop drilling. Through context API we can create a variable which can be used globally. Which means we can move the props from any component to other component. We don't need to use the grandparent > parent > child system. As we can share any props to any other components so it gets easier for us to use the context instead of prop drilling method. Basically we use context API when we need to send any data from a grandparent component to a grandchild component. Here we can easily avoid the parent component or the middle component. </p>
          <h4>Question: Differences between inline block and inline block element.</h4>
          <p>Answer: </p>
        </div>
    );
};

export default Blogs;