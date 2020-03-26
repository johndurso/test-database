const profiteers = [
	{
		name: "John Doe",
		company: "Google",
		position: "CEO",
		net: "$582.2B",
		sources: "https://google.com/"
	},
	{
		name: "Tim apple",
		company: "Apple",
		position: "CEO",
		net: "$91.4B",
		sources: "https://apple.com/"
	},
	{
		name: "Jeff Bezos",
		company: "Amazon",
		position: "CEO",
		net: "$150.4B",
		sources: "https://amazon.com/"
	},
	{
		name: "Donald Duck",
		company: "Disney",
		position: "CEO",
		net: "$844.7B",
		sources: "https://disney.com/"
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