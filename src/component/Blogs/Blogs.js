import React from 'react';

const Blogs = () => {
    return (
        <div>
          <h4 className='text-2xl font-bold font-mono text-lime-800'> Question: What is Context API?</h4>
          <p> <span className='font-bold text-xl text-lime-800'>Answer:</span>  Context API is an alternative way of prop drilling or we can say we use context API instead of prop drilling. Through context API we can create a variable which can be used globally. Which means we can move the props from any component to other component. We don't need to use the grandparent > parent > child system. As we can share any props to any other components so it gets easier for us to use the context instead of prop drilling method. Basically we use context API when we need to send any data from a grandparent component to a grandchild component. Here we can easily avoid the parent component or the middle component. </p>
          <h4  className='text-2xl font-bold font-mono text-lime-800'>Question: What is semantic tag?</h4>
          <p> <span className='font-bold text-xl text-lime-800'>Answer:</span> As we all know that html basically works with the tags. In html 5 the system of writing tags and sequeling them is a bit different. In html 5 we write some tags that is meaningful and we use them sequelly. This meaningful tags and uses of them is called semantic tags. By using semantic tag it gets more easy for both browser and developer to understand. header, nav, section, article, footer etc are the example of semantic tag. </p>
        </div>
    );
};

export default Blogs;