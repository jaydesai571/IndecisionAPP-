import React from 'react';
import ReactDom from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.content}
//             <p>Footer</p>
//         </div>
//     );
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my pages</p>
//     </div>
// );
// ReactDom.render(<Layout content= {template} />,document.getElementById('app'));
ReactDom.render(<IndecisionApp options={['Devils den', 'second District']} />,document.getElementById('app'));