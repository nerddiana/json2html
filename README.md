## Dependency free parser from JSON to HTML

This is a minimal library for transform JSON to HTML.

The valid input JSON structure is:
```js
// this is a valid json for nodes
{
  node: '', // root, element, text
  tag: '', // any valid html tag
  attr: { // any key-value valid pair for html attributes
  	name: 'value'
  },
  child: [] // deep list of nodes
}
```

Usage:
```js
// index.js
const parser = require('json2html');

parser(input)
  .then(console.log) // html output as string
  .catch(console.error); // error handling

// run: node index.js
```

#### Example

Input:
```js
{
  node: 'root',
  child: [
    {
      node: 'element',
      tag: 'div',
      attr: { id: '1', class: 'foo' },
      child: [
        {
          node: 'element',
          tag: 'h2',
          child: [
            { node: 'text', text: 'sample text with ' },
            { node: 'element', tag: 'code', child: [{ node: 'text', text: 'inline tag' }] }
          ]
        },
        {
          node: 'element',
          tag: 'pre',
          attr: { id: 'demo', class: ['foo', 'bar'] },
          child: [{ node: 'text', text: 'foo' }]
        },
        {
          node: 'element',
          tag: 'pre',
          attr: { id: 'output', class: 'goo' },
          child: [{ node: 'text', text: 'goo' }]
        },
        {
          node: 'element',
          tag: 'input',
          attr: { id: 'execute', type: 'button', value: 'execute' }
        }
      ]
    }
  ]
}
```

Output:
```html
<div id="1" class="foo"><h2>sample text with <code>inline tag</code></h2><pre id="demo" class="foo bar">foo</pre><pre id="output" class="goo">goo</pre><input id="execute" type="button" value="execute" /></div>
```

Run the example:
```sh
node examples/hello-world
```

* Note: this library is only published in the GitHub Package Registry.
