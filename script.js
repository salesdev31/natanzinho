
document.querySelector('.submit').addEventListener('click', async(e)=> {
    e.preventDefault();

    let input = document.querySelector('.input').value;


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=b293e759840facfd9f3887ddf7a55514`


    let results = await fetch(url);
    let json = await results.json();

    let temp = ((json.main.temp)/10).toFixed(1);
    document.querySelector('.div_results').classList.remove('hidden')
    console.log(temp)

    document.querySelector('.results').innerHTML = `Nathanzinho diz a temperatura certa:  ${input} : ${temp}°` 

})


