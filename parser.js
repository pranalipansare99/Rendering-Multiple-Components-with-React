var parser = require('xml-js');

const xml = require('fs').readFileSync('junit.xml', 'utf-8');

const options = {compact: true, ignoreComment: true, spaces: 4};

const result = parser.xml2json(xml, options)

console.log(result);

export default function Header(){
  return (
    <header data-ns-test="project-name">
    <h2 >Calculator</h2>
    </header>
    <div data-ns-test="project-description">
    <p>This is my First app</p>
    </div>
    )
}
