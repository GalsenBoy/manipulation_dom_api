/************* Afficher l'mage caché  *************** */

const picshow = document.querySelector('.hide');
const btn = document.querySelector('#btn_appuyer');

btn.addEventListener('click', (e) => {
    picshow.classList.toggle('show');
});


/************************ Choisir un theme ********************************* */
const theme = document.querySelectorAll('.theme');

theme.forEach(element => {
    element.addEventListener('click', (e) => {
        document.body.classList.remove('theme_dark', 'theme_aqua', 'theme_salmon');
        switch (e.target.id) {
            case 'dark':
                document.body.classList.add('theme_dark');
                break;
            case 'aqua':
                document.body.classList.add('theme_aqua');
                break;
            case 'salmon':
                document.body.classList.add('theme_salmon');
                break;
            default:
                break;
        }
    })
});


/******************************** Personnage Harry Potter ********************************** */

const perso = document.querySelector('.personnage');

perso.addEventListener('click', () => {
    fetch('https://hp-api.herokuapp.com/api/characters')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(element => {
                console.log(element.actor);
                perso.innerHTML = element.actor;
            });
        })
});