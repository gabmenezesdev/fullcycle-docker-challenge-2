const express = require('express');
const mysql = require('mysql');

const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


const namesList = ["nome", "Luiza", "Cecilia", "Esther", "Larissa", "Helena", "Luisa", "Yasmin",
    "Lis", "Larissa", "Leticia", "Camila", "Ester", "Clarisse", "Micaela", "Ariana", "Fernanda", "Anita",
    "Yara", "Belinda", "Clarissa", "Dulce", "Raquel", "Flor", "Pedro", "Lucas", "Nicolas", "Theo", "Pedro Henrique",
    "Eduardo", "Isaac", "Lucca", "Bryan", "Davi Lucas", "Lucas", "Caio", "Yuri", "Victor", "Bruno", "André", "Tiago",
    "Igor", "Alan", "Emanuel", "Kevin", "Diogo", "Jonathan", "Marcelo", "Santiago", "José", "Abraão"];

    app.get('/', async (req, res)=>{
    const getPeopleQuery = 'SELECT * FROM people'

    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(name) values('${namesList[randomIntFromInterval(0,50)]}')`;
    connection.query(sql);

    let peopleListString = '';

    connection.query(getPeopleQuery, function (error, results, fields) {
        if (error) throw error;

        results.forEach(person => {
            peopleListString = peopleListString + `<br>  -  ${person.name}`
        });
        connection.end();
        return res.send('<h1>Full Cycle Rocks!</h1>' + peopleListString);
    });
})

app.listen('3000', ()=>{
    console.log('Servidor iniciado com sucesso!');
})
