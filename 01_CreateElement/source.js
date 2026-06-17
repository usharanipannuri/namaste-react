//creating the tree

/*
<div class="root">
  <div class="child1">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
  </div>
  <div class="child2">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
  </div>
</div>
*/
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
