//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// &nits=metric
//*

document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault()

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        showWarning(`Carregando...`)

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=c71bf87cb51b1aae4343a2bfcca0fbfb&units=metric&lang=pt_br`;

        const response = await fetch(url)
        const json = await response.json();

        console.log(json);

        if(json.cod !== 200) {
            showWarning(`localização não encontrada!`)

            document.querySelector('.resultado').style.display = 'none'

        } else {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        }


    };

    
});

const cleanElement = () => {
    // document.querySelector('#searchInput').value = ''
    document.querySelector('.resultado').style.display = 'none';
}

function showInfo(json) {
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoArea').style.transform = `rotate(${json.windAngle - 90}deg)`
}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;

    
}