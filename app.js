const mainContainer = document.getElementById('main-container');
//mainContainer.innerText = 'hello world';

const apiUrl = 'https://launchlibrary.net/1.3/agency/5';

const nasaApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=dKKTfUPB1D93ywgHCqhsNLmoNYKxOpI3Yn69hjbg';

let getSLAgency = async ()=>{
    const response = await fetch(apiUrl);
    const data = await response.json();
    const {name, countryCode, abbrev} = data.agencies[0];
    console.log(`Nombre de la agencia: ${name}`);
    console.log(`Codigo de pais: ${countryCode}`);
    console.log(`Abreviacion: ${abbrev}`);
    const slTitle = document.getElementById('sl-title');
    const slAbbreviation = document.getElementById('sl-agency-abbreviation');
    const slCountryCode = document.getElementById('sl-agency-country-code');
    slTitle.innerText = name;
    slAbbreviation.innerText = `Abreviacion: ${abbrev}`;
    slCountryCode.innerText = `Codigo de pais: ${countryCode}`;
};

let getNasa = async ()=>{
    const response = await fetch(nasaApiUrl);
    const data = await response.json();
    console.log(data);
    const nasaData = document.getElementById('nasa-data');
    const nasaImgData = document.getElementById('img-nasa-data');
    const nasaCopyData = document.getElementById('copy-nasa-data');
    const nasaContentData = document.getElementById('content-nada-data');
    nasaData.innerText = data.title;
    nasaImgData.src = data.url;
    nasaCopyData.innerText = `Derechos reservados a ${data.copyright}`;
    nasaContentData.innerText = data.explanation;
};

getSLAgency();

getNasa();