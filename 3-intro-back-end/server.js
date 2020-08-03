const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    const about = {
        avatar_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQH3kv-QgElQgg/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=rb0NldRGPNl-BaXbCp7mZRB1dNP8pa5AMe_a180u1eo',
        name: 'Lucas Brandi',
        role: 'Aluno - Rocketseat',
        description: 'Engenheiro de dados buscando compartilhar experiências e incentivar programadores a conhecerem mais sobre o mundo de Big data. Colaborador na <a href="https://wildlifestudios.com" target="_blank">Wildlife Studios</a>.',
        links: [
            {name: 'Github', url: 'https://github.com/ldbrandi'},
            {name: 'Linkedin', url: 'https://www.linkedin.com/in/lucas-brandi/'},
            {name: 'Twitter', url: 'https://twitter.com/ldbrandi_19'}
        ]
    }

    return res.render('about', {about})
})

server.get('/portfolio', function(req, res){
    return res.render('portfolio', {items: videos})
})

server.listen(5000, function(){
    console.log('Server is running')
})