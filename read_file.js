var xlsx = require('node-xlsx');
var fs = require('fs');

// read
var obj = xlsx.parse('innerPlan.xlsx');
//console.log(JSON.stringify(obj));
var dataObj = obj.worksheets[0].data;

var length = dataObj.length
for(var i = 0;i < dataObj.length; i++){
	var str = '';
	for(var j = 0; j<dataObj[i].length; j++){
		str += dataObj[i][j].value; 
		str += ' ';
	}
console.log(str);
}

//var file = xlsx.build(obj);
//fs.writeFileSync('b.xlsx', file, 'binary');

var myString=[{"value":"HXXXX","formatCode":"General"},{"value":"XXXX","formatCode":"General"}];
dataObj.push(myString);
obj.worksheets[0].maxRow+=1;
var buffer = xlsx.build(obj);
fs.writeFileSync("myFile.xlsx", buffer, "binary");