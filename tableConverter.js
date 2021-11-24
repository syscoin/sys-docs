const path = require('path');
const fs = require('fs-extra');
var { Extractor } = require('markdown-tables-to-json');
var { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } = require('./lib/node-html-markdown');

const mdTablesPath = path.join(__dirname, 'tables');
const jsonTablesPath = path.join(__dirname, 'src/tables');

// import the table extractor
var { Extractor } = require('markdown-tables-to-json');

function isSameObj(element, index, array) {
  return element === array[index];
}

function getPlainName(str) {
  var strMatch = str.match(/_(\s+|.)\w+(\s+|.)_/g);
  if (strMatch && strMatch.length > 0) {
    str = strMatch[0].replace(/\W+/g, '');
    str = strMatch[0].replace(/_/g, '');
  } else {
    str = str.replace(/\W+/g, '');
    str = str.replace(/_/g, '');
  }

  if (str.length % 2 === 0) {
    let halfway = str.length / 2;
    let firstHalf = str.substring(0, halfway)
    if (firstHalf === str.substring(halfway)) {
      str = str.substring(0, halfway);
    }
  }
  return str
}

function setChildKeys(str, children) {
  for (var k = 0; k < children.length; k++) {
    let newKey = str + `-${k}`
    children[k].key = newKey;
  }
  return children
}

// adds any child objects to the function/parameter tables if a parameter's type
// matches with an object's name
function addChildren(index, tableObjs, tableArr, tablePool, level) {
  var tables = tableObjs[index]
  if (level > 0) {
    tables = tableObjs
  }
  for (var i = 0; i < tables.length; i++) {
    for (var j = 0; j < tableArr.length; j++) {
        //console.log(tableArr[j])

        let arrName = tableArr[j].name.toLowerCase();
        //console.log(tables[i])
        let keyType = tables[i].data.type.toLowerCase();

        keyType = getPlainName(keyType);
        arrName = getPlainName(arrName);

        // match object type to name in function parameters, if matches add as child
        if (keyType === arrName) {
          if (tables[i].children === undefined) {
            tables[i].children = [];
          }

          let parent = tables[i];
          tables[i].children = setChildKeys(parent.key, tablePool[j])
          for (var k = 0; k < tables[i].children.length; k++) {
            addChildren(k, tables[i].children, tableArr, tablePool, level + 1);
          }
      }
    }
  }
}

function convertHTMLtoMD(tableArr) {
  for (var i = 0; i < tableArr.length; i++) {
    for (var j = 0; j < tableArr[i].arr.length; j++) {
      for (var k = 0; k < tableArr[i].arr[j].length; k++) {
        tableArr[i].arr[j][k] = NodeHtmlMarkdown.translate(tableArr[i].arr[j][k]);
      }
    }
  }
}

function copyArray(arr) {
  return JSON.parse(JSON.stringify(arr))
}

// takes any markdown tables in the tables directory and converts them to javascript objects
// then writes them to the src/tables directory
fs.readdir(mdTablesPath, async function (err, files) {
  if (err) {
      return console.log("Can't find the tables directory: " + err);
  }

  let indexStr = '';
  let exportStr = 'export { ';

  let initTableArrays = []
  for (var i = 0; i < files.length; i++) {
    let nameNoExt = files[i].replace('.md', '');

    try {
      let fileContentMD = await fs.readFile(`${mdTablesPath}/${files[i]}`, 'utf8');

      // true - preserve string case
      let table = { name: nameNoExt, arr: Extractor.extractTable(fileContentMD, 'rows', true)}

      indexStr += `import ${nameNoExt} from './${nameNoExt}';\n`;

      if (i + 1 < files.length) {
        exportStr += `${nameNoExt}, `
      } else {
        exportStr += `${nameNoExt}`
      }
      if (table !== undefined) {
        initTableArrays.push(table);
      } else {
        console.log(table)
      }
    } catch (error) {
      console.log(error);
    }
  }

  convertHTMLtoMD(initTableArrays);

  // cycle through changing the array to an object able to be used in a treetable
  let tableObjs = []
  for (var i = 0; i < initTableArrays.length; i++) {
    tableObjs[i] = [];
    for (var j = 1; j < initTableArrays[i].arr.length; j++) {
      let c = tableObjs[i].push({});
      c -= 1;
      tableObjs[i][c].key = c.toString();

      if (initTableArrays[i].arr[j].length === 2) {
        tableObjs[i][c].data = {
          type : initTableArrays[i].arr[j][0],
          description : initTableArrays[i].arr[j][1]
        }
      }

      if (initTableArrays[i].arr[j].length >= 3) {
        tableObjs[i][c].data = {
          name : initTableArrays[i].arr[j][0],
          type : initTableArrays[i].arr[j][1],
          description : initTableArrays[i].arr[j][2]
        }

        if (initTableArrays[i].arr[j].length === 4) {
          tableObjs[i][c].data.required = initTableArrays[i].arr[j][3];
        }
      }

    }
  }

  // add children which will be able to be expanded in the treetable
  for (var i = 0; i < tableObjs.length; i++) {
    addChildren(i, tableObjs, initTableArrays, copyArray(tableObjs), 0);
  }

  // write objects to their files
  for (var i = 0; i < files.length; i++) {
    try {
      let jsonFileName = files[i].replace('md', 'json');
      let expFile = await fs.writeFile(`${jsonTablesPath}/${jsonFileName}`, JSON.stringify(tableObjs[i], null, 2))

    } catch (error) {
      console.log(error);
    }
  }

  // write tablesIndex.js for easier importing of files
  try {
    let expFile = await fs.writeFile(`${jsonTablesPath}/tablesIndex.js`, `${indexStr}${exportStr} }`)

  } catch (error) {
    console.log(error);
  }
});
