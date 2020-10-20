const selfClosedTags = ['img', 'input'];

const renderTag = (obj, child) => {
  let attrs = '';
  if ('attr' in obj) {
  	attrs = Object.entries(obj.attr)
  	  .reduce((pre, entry) => {
  	  	  const key = entry[0];
  	  	  const values = Array.isArray(entry[1]) ? entry[1].join(' ') : entry[1];
  	  	  return `${pre} ${key}="${values}"`;
  	  	}, []);
  };
  const isSelfClosed = selfClosedTags.includes(obj.tag) && child === '';
  const head = isSelfClosed ? ' ' : '>';
  const tail = isSelfClosed ? `/>` : `</${obj.tag}>`;
  const html = `<${obj.tag}${attrs}${head}${child}${tail}`;
  return html;
}

const render = (obj, deep = 0) => {
  let child = '';
  if ('child' in obj && Array.isArray(obj.child) && obj.child.length) {
  	child = obj.child.map(el => render(el, deep++)).join('');
  }
  if (obj.node === 'root') return child;
  if (obj.node === 'text') return obj.text;
  if (obj.node === 'element') return renderTag(obj, child);
  return child;
}

module.exports = async (input, config = {}) => {
  return new Promise((resolve) => {
    resolve(render(input));
  });
}
