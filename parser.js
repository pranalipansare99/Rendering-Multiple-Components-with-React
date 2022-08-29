var parser = require('xml-js');

const xml = require('fs').readFileSync('junit.xml', 'utf-8');

const options = {compact: true, ignoreComment: true, spaces: 4};

const result = parser.xml2json(xml, options)

console.log(result);

export default function Header(){
  return (
    <h2 data-ns-test="project-name">Calculator</h2>
    <p  data-ns-test="project-description"">This is my First app</p>
    )
}
