/*
const heading = React.createElement('h1',{id:'head'},'Hello from React!');
console.log(heading)
const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(heading);

*/

/*

<div id='parent'>
    <div id='child'>
        <h1>I am a h1 tag</h1>
        <span>I am a span tag</span>
    </div>
</div>

*/

const parent = React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'I am a h1 tag'),React.createElement('span',{},'I am a span tag')]))

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(parent)