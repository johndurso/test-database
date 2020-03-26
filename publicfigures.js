const publicFigures = [
	{
		name: "Bill Boolin",
		company: "McDonalds",
		position: "CEO",
		net: "$15.2B",
		sources: "https://website.com/"
	},
	{
		name: "Tom Jones",
		company: "Lucky Strike",
		position: "CEO",
		net: "$3.9B",
		sources: "https://website.com/"
	},
	{
		name: "Jeff Bezos",
		company: "Amazon",
		position: "CEO",
		net: "$150.4B",
		sources: "https://website.com/"
	},
	{
		name: "Gary Williams",
		company: "Dicks Sporting Goods",
		position: "CEO",
		net: "$1.7B",
		sources: "https://website.com/"
	},
	{
		name: "Ronald Keith",
		company: "Burger King",
		position: "CFO",
		net: "$583.8M",
		sources: "https://website.com/"
	},
];

function figuresTemplate(figure) {
  return `
    <div class="card">
    	<h2 class="figureName"><span>Name:</span> ${figure.name}</h2>
    	<p><span>Company:</span> ${figure.company}</p>
    	<p><span>Position:</span> ${figure.position}</p>
    	<p><span>Net worth:</span> ${figure.net}</p>
    	<p class="source"><span>Sources:</span> <a href="${figure.sources}">${figure.sources}</a></p>
    </div>
  `;
}


document.getElementById("publicFigures").innerHTML = `
	<h1>Working with COVID-19</h1>
	<p>Listed below are the public figures forcing their workers to continue to work after testing positive for COVID-19</p>
	<h3>Total count = ${publicFigures.length}</h3>
	${publicFigures.map(figuresTemplate).join('')}

`;