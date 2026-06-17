//creating the tree
const heading = React.createElement("div", { id: "root" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#main"));
root.render(heading);
