//let fs = require(`fs`)
let express = require(`express`);
let app = express();
let port = 3000;
let visitors = 0
let coins = 1000000
let win = 0
let users = [`cool_hacker`, `NikiTa`, `kit`];
let userss = []
let images = [
    {
        src: `https://i.ibb.co/2qx38V4/owl.jpg`,
        tag: 'animal'
    },
    {
        src: `https://i.ibb.co/2c05s4V/tiger.jpg`,
        tag: 'animal'
    },
    {
        src: `https://i.ibb.co/2SrVptw/burger.jpg`,
        tag: 'food'
    },
    {
        src: `https://i.ibb.co/VD893Wk/salad.jpg`,
        tag: 'food'
    },
    {
        src: `https://i.ibb.co/RDzZmLR/river.jpg`,
        tag: 'nature'
    },
    {
        src: `https://i.ibb.co/tYM1dFB/lake.jpg`,
        tag: 'nature'
    }
];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}
app.get(`/`, function (req, res) {
    res.send(`<div><h1>Салют</h1> <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1QQL4vkoXka9beROlMmx7Z?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>`);
});
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});
app.get(`/visitors`, function (req, res) {
    visitors++
    res.send(`этот сайт посетили ${visitors} раз`);
});
app.get(`/top3`, function (req, res) {
    let html = `<h1>Топ игроков</h1>`
    html += `<ol>`
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        html += `<li>${user}</li>`;
    }
    res.send(html);
});
app.get(`/win`, function (req, res) {
    if (coins === 0) {
        res.send(`бабок нема`);
    }
    win = getRandomInt(1, coins)
    let htmll = `Вы выиграли: ${win} рублей <hr>`
    htmll += `В банке осталось: ${coins -= win}`
    res.send(htmll);
});
app.get(`/calc`, function (req, res) {
    let a = Number(req.query.a)
    let b = Number(req.query.b)
    if (!a || !b) {
        res.send(`error`)
    }
    else {
        res.send(`${a+b}`)
    }
})
/*app.get(`/json`, function (req, res) {
    let html2 = `<input type="number" placeholder="первая валюта" id="first"> <input type="number" placeholder="вторая валюта" id="second">`
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка чтения файла:', err);
            return;
        }
        const jsonData = JSON.parse(data);
        console.log(jsonData.curs);
    });
    let firstValue = document.querySelector(`#first`);
    let secondValue = document.querySelector(`#second`);
    firstValue.value = `ляля`
    firstValue.addEventListener(`input`, function () {
        secondValue.value = firstValue * jsonData.curs
    })
    res.send(html2)
});*/
app.get(`/memory`, function (req, res) {
    let username = req.query.name
    if (!username) {
        res.send(`вы не указали имя`)
    } else if (userss.indexOf(username) !== -1) {
        res.send(`снова здравствуй, ${username}`)
    } else {
        res.send(`Рад впервые приветсвовать, ${username}`)
        userss.push(username)
    }
})
app.get(`/gos`, function (req, res) {
    let agee = req.query.agee
    let gender = req.query.gender
    if (agee && gender) {
     if (gender === `f`){
         if (agee < 60){
             res.send(`до пенсии еще ${60 - agee} лет`)
         } else {
             res.send(`вы достигли пенсионного возроста`)
         }
     }  else if (gender === `m`) {
         if (agee < 65){
             res.send(`до пенсии еще ${65 - agee} лет`)
         } else {
             res.send(`вы достигли пенсионного возроста`)
         }
     }
    } else {
        res.send(`вы не заполнили данные`)
    }
})

app.get(`tag`, function (req, res) {
    let currentTag = req.query.tag
    if (!tag) {
        res.send(`вы не указали tag`)
    }
})