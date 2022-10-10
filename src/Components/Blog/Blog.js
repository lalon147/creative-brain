import React from 'react';
import { Accordion } from 'flowbite-react';

const Blog = () => {
    return (
        <div>
                <Accordion alwaysOpen={true}>
  <Accordion.Panel>
    <Accordion.Title>
     What is the Purpose of React Router
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        React Router is a routing library for react .In websites we have to go from one link to another and as the route changes the content between it have to be changes 
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        so React Router Helps us to manage our route and what we should show in particular route 
        <a
          href="https://flowbite.com/docs/getting-started/introduction/"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          get started
        </a>
      
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     How Context API Work 
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        At first we need to Why we use context api ,Like a family tree if Greatgrandfather has a ring and he want to give it to me.First of of he have to give it to my grandpa then my grandpa have to give to my father 

      </p>
      <p className="text-gray-500 dark:text-gray-400">
          then my father will give it to me but with the help of Context API  my greatgrandfather can give this ring to me directly that's called Prop drilling
    
       
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
     What is UseRef
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       UseRef( )
 helps us to change values between renders ,It can be used to store mutable values that can cause re-render
       </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       more over it can be used to access the dom directly 
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400"></p>
       
      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion> 
        </div>
    );
};

export default Blog;