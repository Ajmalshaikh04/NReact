const heading = React.createElement(
    "h1",
    { className: "my-heading", id: "heading-1", key: "111" },
    "Heading 1"
);
const heading2 = React.createElement(
    "h2",
    { className: "my-heading-2", id: "heading-2", key: "222" },
    "Heading 2"
);
const container = React.createElement(
    "div",
    { className: "container", id: "container" },
    [heading, heading2]
);

console.log(container);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);


//=================================================
// const obj = {
//     fn: function() {
//       console.log(this);
//     },
//     fn2: () => {
//       console.log(this);
//     }
//   };
  
//   obj.fn(); //this refer to its own object => obj
//   obj.fn2(); //this refer to parents object which is window object