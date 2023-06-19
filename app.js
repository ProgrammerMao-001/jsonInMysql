const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('carPoints.json', 'utf8'));
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vuetools'
});
jsonData.forEach(row => {
    let sql = "INSERT INTO carpoints (id, soleName, longitude, latitude, groupType) VALUES ('" + row.id + "', '" + row.soleName + "', '" + row.longitude + "', '" + row.latitude + "', '" + row.groupType + "')";

    connection.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log(`Row inserted with ID : ${results.insertId}`);
    });
});
connection.end();
