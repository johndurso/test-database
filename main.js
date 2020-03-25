const publicFigures = [
	{
		name: "Bill Boolin",
		company: "McDonalds",
		position: "CEO",
		net: "$15.2B"
	},
	{
		name: "Tom Jones",
		company: "Lucky Strike",
		position: "CEO",
		net: "$3.9B"
	},
	{
		name: "Jeff Bezos",
		company: "Amazon",
		position: "CEO",
		net: "$150.4B"
	},
	{
		name: "Gary Williams",
		company: "Dicks Sporting Goods",
		position: "CEO",
		net: "$1.7B"
	},
	{
		name: "Ronald Keith",
		company: "Burger King",
		position: "CFO",
		net: "$583.8M"
	},
];

function figuresTemplate(figure) {
  return `
    <div class="card">
    	<h2 class="figureName">Name: <span>${figure.name}</span></h2>
    	<p class="company">Company: <span>${figure.company}</span></p>
    	<p class="">Position: <span>${figure.position}</span></p>
    	<p>Net worth: <span>${figure.net}</span></p>
    </div>
  `;
}


document.getElementById("app").innerHTML = `
	<h1>Working with COVID-19</h1>
	<p>Listed below are the public figures forcing their workers to continue to work after testing positive for COVID-19</p>
	<h3>Total count = ${publicFigures.length}</h3>
	${publicFigures.map(figuresTemplate).join('')}

`;