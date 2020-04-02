const publicFigures = [
	{
		"name": "Bill Boolin",
		"company": "McDonalds",
		"position": "CEO",
		"net": "$15.2B",
		"sources": 
		[
			"https://website.com/",
			""
		]
	},
	{
		"name": "Jeff Bezons",
		"company": "Amazon",
		"position": "CEO",
		"net": "$15.2B",
		"sources": 
		[
			"https://website.com/",
			""
		]
	},
	{
		"name": "Betty White",
		"company": "Golden Girls",
		"position": "CEO",
		"net": "$15.2B",
		"sources": 
		[
			"https://website.com/",
			""
		]
	},
	{
		"name": "Bill Gates",
		"company": "Microsoft",
		"position": "CEO",
		"net": "$15.2B",
		"sources":
		[
			"https://website.com/",
			"https://website2.com/",
		]
	},
	{
		"name": "Dick Cheney",
		"company": "Haliburton",
		"position": "CEO",
		"net": "$15.2B",
		"sources":
		[
			"https://website.com/",
			"https://website2.com/",
		]
	},
];

function figuresTemplate(figure) {
  return `
    <div class="card">
    	<h2 class="figureName"><span>Name:</span> ${figure.name}</h2>
    	<p><span>Company:</span> ${figure.company}</p>
    	<p><span>Position:</span> ${figure.position}</p>
    	<p><span>Net worth:</span> ${figure.net}</p>
    	<div class="sources">
	    	<p class="source"><span>Sources:</span></p>
	    		<ul>
	    			<li><a href="${figure.sources[0]}">${figure.sources[0]}</a></li>
	    			<li><a href="${figure.sources[1]}">${figure.sources[1]}</a></li>
	    		</ul>
	    </div>
    </div>
  `;
}


document.getElementById("publicFigures").innerHTML = `
	${publicFigures.map(figuresTemplate).join('')}

`;