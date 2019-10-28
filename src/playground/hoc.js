// This is to demonstrate the principle of Higher Order Component
// A Higher Order Component (HOC) is just a component that renders another component

// What are the advantages of using a HOC
//  - reuse code
//  - render hijacking
//  - prop manipulation
//  - abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// Here is an arrow function that implicitely returns some JSX
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

// This is a regular function, this is not a component !
// This is just a regular function that accepts a component and returns ... a function that implicitely returns some JSX : That IS a proper component !

// To pass the info from the HOC component to the wrapped component, we need to get them in the return as for any react component
//   return (props) => 
// Now from the function that defines the component we have access to the props object, which is a combination of key value pairs
// To pass every single key value pair below, we can .. pass each of them as props, and that can be achieved by
//    1) calling a Javascript expression from the JSX : {}
//    2) spreading objects into key-value pairs
// This basically passes all key-value pairs of the given props as ... props to the component below

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the info</p>
            ) }
        </div>
    );
};

// This creates a HOC component based on the component passed in to be wrapped around
// Note AdminInfo IS a component so we need to follow the naming convention
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));