function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
  
# Welcome to my React Markdown Project!

**This is bolded text**

 > Block Quote!
   
## this is a sub heading

1. This is the beginning of a numbered list.

Here is [links](https://www.freecodecamp.org/learn)

this is inline \`<div></div>\`

this is a block of code

\`\`\`
let x = 1;
let y = 2;
y = mx + b;
\`\`\`

![React](https://goo.gl/Umyytc)

`;


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return (
      React.createElement("div", null,
      React.createElement("h2", { className: "text-center m-4" }, "Convert Your Markdown"),
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-6" },
      React.createElement("h5", null, "Enter your markdown here:"),
      React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange })),


      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center" }, "Here is the result:"),
      React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));