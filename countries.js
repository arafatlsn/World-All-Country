const getCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => getCountriesFunc(data))
}

getCountries()
const getCountriesFunc = countriesInput => {
  const allCountryName = document.getElementById('allCountryName');
  countriesInput.forEach(country => {
    console.log(country)
    const makeCountryArea = document.createElement('div');
    makeCountryArea.classList.add('each-country-div');
    makeCountryArea.innerHTML = `
    <h3 class="each-country-title">${country.name.common}</h3>
    <h4 class="each-country-capital">Capital: ${country.name.official}</h4>
    <h4>Population: ${country.population}</h4>
    <img src="${country.flags.png}" width="160px">
    `;
    allCountryName.appendChild(makeCountryArea)
  })
};

document.getElementById('search-buttonn').addEventListener('click', function(){
  const inputField = document.getElementById('search-field');
  const allCountry = document.getElementsByClassName('each-country-title');
  const displayResult = document.getElementById('display-result');
  const displayResultTitle = document.getElementById('display-result-title');
  const displayResultCapital = document.getElementById('display-result-capital');
  const displayResultPopulation = document.getElementById('display-result-population');
  const displayResultDiv = document.getElementById('display-result-div');
  const displayResultImg = document.getElementById('display-result-img');

  for(const allCountryMin of allCountry){
    if(inputField.value.toLowerCase() == allCountryMin.innerText.toLowerCase()){
      // displayResult.removeChild(displayResult.parentN);
      // displayResult.appendChild(allCountryMin.parentNode);
      displayResultTitle.innerText = allCountryMin.innerText;
      displayResultCapital.innerText = allCountryMin.parentNode.children[1].innerText;
      displayResultPopulation.innerText = allCountryMin.parentNode.children[2].innerText;
      displayResultImg.src = allCountryMin.parentNode.children[3].src;
      document.getElementById('display-result-div').style.display = 'block'

    }
    else{
      
    }
  }

});





