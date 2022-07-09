//API Providers
const ipdata={
    key:"770d4717abd3fbab302d994f1a744a1c0c606f0312af7d774e1adc42",
    baseurl:`https://api.ipdata.co`,
     currency:function(){
       return `${this.baseurl}/currency?api-key=${this.key}`;
     }
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c67694d959msha3f0d32783acbfbp195e3bjsn48a15658b2d4',
		'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
	}
};

fetch('https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



    


