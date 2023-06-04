const http = require('http')
const fs = require ('fs')

const port = 8080;
const server = http.createServer((req, res)=>{
    let dataFile = '';
    let displayHTML = '';
    fs.readFile('./data/data.txt',"utf-8",(err, dataText)=>{
        dataFile = dataText.split(",");
        dataFile.forEach((value, index) => {
            displayHTML += '<tr>';
            displayHTML += `<td>${index + 1}</td>`
            displayHTML += `<td>${value}</td>`
            displayHTML += `<td><button class="btn btn-danger">Delete</button></td>`
            displayHTML += '</tr>';
        })
    })
    fs.readFile('./template/index.html',"utf-8",(err, dataHTML)=>{
        dataHTML = dataHTML.replace("{list-user}",displayHTML);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(dataHTML);
        return res.end()
    })
})
server.listen(port,"localhost",()=>{
    console.log(`Server is running at http://localhost:${port}`);
})