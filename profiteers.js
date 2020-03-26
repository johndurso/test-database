const profiteers = [
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

function profiteersTemplate(profit) {
  return `
    <div class="card">
    	<h2 class="figureName"><span>Name:</span> ${profit.name}</h2>
    	<p><span>Company:</span> ${profit.company}</p>
    	<p><span>Position:</span> ${profit.position}</p>
    	<p><span>Net worth:</span> ${profit.net}</p>
    	<p class="source"><span>Sources:</span> <a href="${profit.sources}">${profit.sources}</a></p>
    </div>
  `;
}


document.getElementById("profiteers").innerHTML = `
	<h1>Profiting off of COVID-19</h1>
	<p>Listed below are the public figures who have made unreasonable profit amidst the COVID-19 pandemic.</p>
	<h3>Total count = ${profiteers.length}</h3>
	${profiteers.map(profiteersTemplate).join('')}

`;