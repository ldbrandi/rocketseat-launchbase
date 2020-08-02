const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(req, res){
    const about = {
        avatar_url: 'https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg',
        name: 'Rocketseat',
        title: 'Ready for the next level?',
        description: 'A Rocketseat é uma escola de programação focada nas tecnologias em alta do mercado. Confira mais <a href="https://rocketseat.com.br" target="_blank">aqui!</a>',
        stack: 'Nossa Stack:',
        stack_icons: [
            {name: 'HTML', url: 'assets/html5.png'},
            {name: 'CSS', url: 'assets/css3.png'},
            {name: 'JavaScript', url: 'assets/js.png'}
        ],
        links: [
            {name: 'Github', url: 'https://github.com/ldbrandi'},
            {name: 'LinkedIn', url: 'https://www.linkedin.com/in/lucas-brandi/'},
            {name: 'Twitter', url: 'https://twitter.com/ldbrandi_19'}
        ]
    }

    return res.render('about', {about})
})

server.get('/courses', function(req, res){
    return res.render('courses', {items: courses})
})

server.use(function(req, res) {
    res.status(404).render('not-found');
})

server.listen(5000, function(){
    console.log('Server is running')
})