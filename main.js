const covidList = [
 {
   name: "Alex Cruz",
   company: "British Airways",
   position: "CEO",
   net: "£1.3 million per year",
   description: "Cut pilot salaries by 50% and started preparing for layoffs without taking CEO pay cut. Finally only took 2-month pay cut after pressure.",
   quotes: "N/A",
   source: "https://onemileatatime.com/british-airways-pilots-pay-cut/"
 },
 {
   name: "Apoorva Mehta",
   company: "Instacart",
   position: "CEO",
   net: "$400 million",
   description: "Mass hired workers to meet demand during the crisis without offering hazard pay, protective equipment, or paid sick time.",
   quotes: "N/A",
   source: "https://www.npr.org/2020/03/30/823767492/amazon-instacart-grocery-delivery-workers-strike-for-coronavirus-protection-and-"
 },
 {
   name: "Baruch Feldheim",
   company: "N/A",
   position: "N/A",
   net: "N/A",
   description: "Hoarded 192,000 N95 masks, 130,000 surgical masks, and 600,000 medical-grade gloves.",
   quotes: "N/A",
   source: "https://www.nytimes.com/2020/04/02/nyregion/brooklyn-coronavirus-price-gouging.html"
 },
 {
   name: "Brian Kemp",
   company: "N/A",
   position: "83rd Governor of Georgia",
   net: "$5.2 million",
   description: "Pushed a false narrative regarding how the virus spreads, and likely delayed Georgia's stay-at-home order.",
   quotes: "\"What we've been telling people from directives from the CDC for weeks now that if you start feeling bad stay home, those individuals could have been infecting people before they ever felt bad. But we didn't know that until the last 24 hours...\"",
   source: "https://edition.cnn.com/2020/04/02/politics/fact-check-georgia-gov-brian-kemp-coronavirus-no-symptoms-stay-at-home/index.html"
 },
 {
   name: "Dan Bane",
   company: "Trader Joe's",
   position: "CEO",
   net: "$5.2 million",
   description: "Aggressively pushing against unionization during coronavirus vulnerability; discouraging staff from wearing PPE.",
   quotes: "N/A",
   source: "https://www.nytimes.com/2020/04/02/business/trader-joes-unionization-coronavirus.html"
 },
 {
   name: "Dan Patrick",
   company: "N/A",
   position: "Lieutenant Governor, Texas",
   net: "Unknown",
   description: "Implied workers should be sacrificed to improve the economy.",
   quotes: "\“My message is, let’s get back to work. Let’s get back to living. Let’s be smart about it. And those of us who are 70-plus [years old], we’ll take care of ourselves. But don’t sacrifice the country.”",
   source: "https://www.nbcnews.com/news/us-news/texas-lt-gov-dan-patrick-suggests-he-other-seniors-willing-n1167341"
 },
 {
   name: "Daniel Turner",
   company: "Power The Future",
   position: "Founder and Executive Director",
   net: "Unknown",
   description: "Peddled the narrative that COVID-19 accomplishes the same ends as climate activism.",
   quotes: "\"Coronavirus is a glimpse of the long-term pain a Green New Deal and environmental radicalism would inflict on America.\" ",
   source: "https://thefederalist.com/2020/03/13/how-the-wuhan-virus-is-accomplishing-the-green-new-deals-goals/"
 },
 {
   name: "David Green",
   company: "Hobby Lobby",
   position: "CEO",
   net: "$6.2 billion",
   description: "Ignored state stay-at-home orders; Hobby Lobby still open and trying to pretend it's \"essential\".",
   quotes: "N/A",
   source: "https://www.businessinsider.com/hobby-lobby-stores-still-open-in-some-states-amid-coronavirus-2020-4"
 },
 {
   name: "Dianne Feinstein",
   company: "N/A",
   position: "Senator (D-CA)",
   net: "$58.5 million",
   description: "Sold between $1.5M and $5M in stock after a Senate Intelligence Committee briefing on COVID-19, just before the stock market crash.",
   quotes: "N/A",
   source: "https://www.usatoday.com/story/news/politics/2020/03/30/coronavirus-stock-sales-senators-burr-inhofe-loeffler-feinstein/5086707002/"
 },
 {
   name: "Gary Cohn",
   company: "N/A",
   position: "Former chief economic adviser, White House",
   net: "$400 million",
   description: "Recommended businesses reopen “incrementally” during the crisis.",
   quotes: "\"We should be able to handle incremental economic activity in appropriate locations while not allowing it in other geographies.”",
   source: "https://thehill.com/policy/finance/489310-gary-cohn-says-economy-could-be-reopened-on-incremental-basis"
 },
 {
   name: "Jared Kushner",
   company: "Kushner Companies, LLC",
   position: "Senior Advisor to the President of the United States",
   net: "$800 million",
   description: "Where do we even begin? Kushner initially downplayed the severity of COVID-19, insisting it was a media hoax. Then his brother’s company, Oscar Health, started building a government website to direct patients to COVID-19 testing sites days after the President suggested such a site would be available, suggesting a conflict of interest. More recently, critics are raising eyebrows at a provision in the federal recovery bill calling for a mortgage freeze for owners of low- and moderate-income properties, which stands to benefit companies like the Kushner family’s real estate firm. Lastly, he’s been accused of running a “shadow [pandemic response] task force” behind the scenes with private sector leaders, including health care executives.",
   quotes: "\"This truly is a historic challenge. We have not seen something like this in a very long time, but I am confident that bringing innovative solutions to these hard problems, we will make progress.\"",
   source: "https://www.businessinsider.com/coronavirus-jared-kushner-trump-media-exaggerated-outbreak-report-2020-3"
 },
 {
   name: "Jeff Bezos",
   company: "Amazon",
   position: "CEO",
   net: "$117.3 billion",
   description: "Amazon failed to provide proper protective equipment for workers and offered inadequate compensation for sick time or time off, forcing workers to choose between their health and their job. Multiple workers at Amazon warehouses across the country have tested postive for COVID-19. On March 30th, Amazon fired worker Chris Smalls (a black man) for organizing a strike protesting warehouse conditions, with their top lawyer recommending they \"make him the face of the entire union/organizing movement\" because \"he's not smart, or articulate.\"",
   quotes: "\"Much of the essential work we do cannot be done from home.\"",
   source: "https://www.businessinsider.com/amazon-workers-are-afraid-to-go-to-work-heres-why-2020-4 https://www.businessinsider.com/amazon-fires-warehouse-worker-led-strike-protest-covid19-cornavirus-response-2020-3 https://www.businessinsider.com/leaked-memo-reveals-amazon-reportedly-led-pr-campaign-against-worker-2020-4"
 },
 {
   name: "Jerry Falwell, Jr.",
   company: "Liberty University",
   position: "President",
   net: "$100 million",
   description: "Reopened Liberty University in the midst of the crisis.",
   quotes: "\“99 percent of [students] are not at the age to be at risk and they don't have conditions that put them at risk.\"",
   source: "https://www.nytimes.com/2020/03/29/us/politics/coronavirus-liberty-university-falwell.html?smtyp=cur&smid=tw-nytpolitics"
 },
 {
   name: "Jim Bakker",
   company: "The Jim Bakker Show",
   position: "Pastor, Televangelist",
   net: "$500,000",
   description: "Tried to make money off the virus by selling a \"silver solution\" cure.",
   quotes: "Guest on his show: \"Well, let's say it hasn't been tested on this strain of the coronavirus, but it has been tested on other strains of the coronavirus and has been able to eliminate it within 12 hours,\" Sellman said. Bakker: \"Totally eliminates it. Kills it. Deactivates it.\" ",
   source: "https://www.npr.org/2020/03/11/814550474/missouri-sues-televangelist-jim-bakker-for-selling-fake-coronavirus-cure"
 },
 {
   name: "Jim Inhofe",
   company: "N/A",
   position: "Senator (R-OK)",
   net: "$8.7 million",
   description: "Sold between $230k and $500k in stock after a Senate Intelligence Committee briefing on COVID-19, just before the stock market crash.",
   quotes: "N/A",
   source: "https://www.usatoday.com/story/news/politics/2020/03/30/coronavirus-stock-sales-senators-burr-inhofe-loeffler-feinstein/5086707002/"
 },
 {
   name: "Joel Freedman",
   company: "Broad Street Healthcare Properties",
   position: "Unknown",
   net: "Unknown",
   description: "Bought and closed Hahnemann Hospital in Philadelphia. When city officials asked to use the hospital to treat COVID-19 patients, Freedman requested they “buy the hospital or lease it for almost $1 million a month, including utilities and other costs.”",
   quotes: "N/A",
   source: "https://www.nytimes.com/2020/03/27/us/coronavirus-philadelphia-hahnemann-hospital.html"
 },
 {
   name: "José E. Almeida",
   company: "Covidien",
   position: "CEO",
   net: "$16.6 million",
   description: "The medical supply manufacturer Covidien bought the company Newport Medical Instruments, which was contracted by DHHS to manufacture cheaper portable ventilators, in 2012. Once acquired, Covidien then halted the project and exited the contract, supposedly to prevent a cheaper ventilator product from pushing their product out of the market. This ultimately contributed to the ventilator shortage during the COVID-19 pandemic.",
   quotes: "N/A",
   source: "https://www.nytimes.com/2020/03/29/business/coronavirus-us-ventilator-shortage.html"
 },
 {
   name: "Kelly Loeffler",
   company: "N/A",
   position: "Senator (R-GA)",
   net: "$500 million",
   description: "Sold millions of dollars worth of stocks after being privately notified of COVID-19 on Jan 24th at a Senate Health Committee briefing, then proceeded to downplay the severity of the crisis for months.",
   quotes: "\"Democrats have dangerously and intentionally misled the American people on #Coronavirus readiness. Here’s the truth: @realDonaldTrump & his administration are doing a great job working to keep Americans healthy & safe.\"",
   source: "https://www.vanityfair.com/news/2020/04/kelly-loeffler-protective-gear-investment"
 },
 {
   name: "Kevin Hassett",
   company: "N/A",
   position: "Economic adviser, White House",
   net: "Unknown",
   description: "Advised the president to reopen the economy during the pandemic.",
   quotes: "\“You really can’t shut down the global economy for six months and expect anything to continue.”",
   source: "https://thehill.com/homenews/administration/488611-economist-kevin-hassett-returns-to-white-house-to-advise-trump-amid"
 },
 {
   name: "Larry Kudlow",
   company: "N/A",
   position: "Chief economic adviser, White House",
   net: "$2 million",
   description: "Claimed virus was contained in February 2020.",
   quotes: "\“We have contained this. I won’t say [it’s] airtight, but it’s pretty close to airtight.”",
   source: "https://www.cnbc.com/2020/02/25/larry-kudlow-says-us-has-contained-the-coronavirus-and-the-economy-is-holding-up-nicely.html"
 },
 {
   name: "Lawrence Bacow",
   company: "Harvard University",
   position: "President",
   net: "$2 million",
   description: "Subcontractors in campus dining halls laid off and not eligible for 30 days of paid leave and benefits.",
   quotes: "N/A",
   source: "https://freebeacon.com/latest-news/harvard-not-paying-all-workers-during-coronavirus-shutdown-despite-40-9b-endowment/"
 },
 {
   name: "Lloyd Blankfein",
   company: "Goldman Sachs",
   position: "Former CEO",
   net: "$40 billion University endowment (largest in the US)",
   description: "Called for those with “lower risk to the disease” to return to work within a few weeks.",
   quotes: "\“Extreme measures to flatten the virus “curve” is sensible-for a time-to stretch out the strain on health infrastructure. But crushing the economy, jobs and morale is also a health issue-and beyond. Within a very few weeks let those with a lower risk to the disease return to work.”",
   source: "https://twitter.com/lloydblankfein/status/1241907502662418437"
 },
 {
   name: "Michael Knowles",
   company: "The Daily Wire",
   position: "Political Commentator",
   net: "Unknown",
   description: "Consistently downplayed severity of COVID-19, called for reopening the economy.",
   quotes: "\“All right, enough of this. Time to start reopening.”",
   source: "https://twitter.com/michaeljknowles/status/1244050622745214976"
 },
 {
   name: "Richard Burr",
   company: "N/A",
   position: "Senator (R-NC)",
   net: "$1.7 million",
   description: "Sold between $678k and $1.5 million in stock after a Senate Intelligence Committee briefing on COVID-19, just before the stock market crash.",
   quotes: "N/A",
   source: "https://www.usatoday.com/story/news/politics/2020/03/30/coronavirus-stock-sales-senators-burr-inhofe-loeffler-feinstein/5086707002/"
 },
 {
   name: "Richard “Dick” Kovacevich",
   company: "Wells Fargo",
   position: "Former CEO",
   net: "$1 Million - $5 Million (Approx.)",
   description: "Called for healthy workers under 55 to return to work by April.",
   quotes: "\"We'll gradually bring those people back and see what happens. Some of them will get sick, some may even die, I don't know.” \"Do you want to suffer more economically or take some risk that you'll get flu-like symptoms and a flu-like experience? Do you want to take an economic risk or a health risk? You get to choose.\"",
   source: "https://www.businessinsider.com/richard-kovacevich-former-wells-fargo-ceo-work-die-coronavirus-pandemic-2020-3"
 },
 {
   name: "Richard Epstein",
   company: "Hoover Institution",
   position: "Fellow",
   net: "Unknown",
   description: "Penned the article “Coronavirus Perspective,” which has circulated within the president’s administration, downplaying the danger of the virus.",
   quotes: "\“I fully understand the need for immediate responses to immediate threats, like fires, but not for crises that may last for three months or more.”",
   source: "https://www.newyorker.com/news/q-and-a/the-contrarian-coronavirus-theory-that-informed-the-trump-administration https://www.hoover.org/research/coronavirus-isnt-pandemic"
 },
 {
   name: "Rush Limbaugh",
   company: "N/A",
   position: "Radio Personality",
   net: "$500 million",
   description: "Insisted that COVID-19 is just the “common cold” and railed against media “hype.”",
   quotes: "\"It looks like the coronavirus is being weaponized as yet another element to bring down Donald Trump.”",
   source: "https://www.politifact.com/factchecks/2020/feb/27/rush-limbaugh/fact-checking-rush-limbaughs-misleading-claim-new-/"
 },
 {
   name: "Suzanne Scott",
   company: "Fox News",
   position: "CEO",
   net: "Unknown",
   description: "Oversees Fox News, whose anchors have been criticized for downplaying the crisis and peddling misinformation.",
   quotes: "N/A",
   source: "https://www.nytimes.com/2020/03/22/business/coronavirus-fox-news-lachlan-murdoch.html"
 },
 {
   name: "Tate Reeves",
   company: "N/A",
   position: "65th Governor of Mississippi",
   net: "$100K-$1M",
   description: "Ovverrode local stay-at-home policies and declared most businesses \"essential\".",
   quotes: "\"Mississippi's never going to be China.\" ",
   source: "https://www.businessinsider.com/coronavirus-mississippi-governor-executive-order-most-businesses-essential-2020-3"
 },
 {
   name: "Thomas J. Donohue",
   company: "US Chamber of Commerce",
   position: "CEO",
   net: "$16 million",
   description: "Lobbied against the deployment of the Defense Protection Act.",
   quotes: "N/A",
   source: "https://thehill.com/business-a-lobbying/business-a-lobbying/490060-unions-urge-chamber-of-commerce-to-stop-lobbying"
 },
 {
   name: "Tilman Fertitta",
   company: "Landry’s, Inc.",
   position: "CEO",
   net: "$4.4 billion",
   description: "Laid off 40,000 workers; called for businesses to reopen with limited capacity during the crisis.",
   quotes: "\“I think what we are doing with the shut-down is good but in a few weeks people will need to be around people. Otherwise you are going to go into an economic crisis that is going to take us years to dig ourselves out of.”",
   source: "https://www.bloomberg.com/news/articles/2020-03-24/billionaire-fertitta-furloughs-40-000-warns-of-economic-crisis"
 }
]

function covidTemplate(covid) {
  return `
    <div class="card">
    	<h2 class="figureName"><span class="result">${covid.name}</span></h2>
    	<p><span>Company:</span> ${covid.company}</p>
    	<p><span>Position:</span> ${covid.position}</p>
    	<p><span>Net worth:</span> ${covid.net}</p>
    	<p><span>Description:</span> ${covid.description}</p>
    	<p><span>Quote:</span> ${covid.quotes}</p>
    	<p class=source><span>Source: <a target="_blank" href="${covid.source}">Click here</a> to view source</span></p>
    </div>
  `;
}


document.getElementById("covidList").innerHTML = `
	<div style="font-size: 16px; color: #000 !important; text-align: center;">
		An evergrowing list of public figures who have deceived the public or profited from the <a class="tracker" target="_blank" href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" style="text-decoration: none;">COVID-19&nbsp;pandemic</a>.<br><br>
		<strong>In alphabetical order, by first name.</strong>
	</div>
	${covidList.map(covidTemplate).join('')}
`;

//modal
$(".modal-trigger")
    .click(function (e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({"display": "block"});
        $("body").css({"overflow-y": "hidden"});
    });
$(".close-modal, .modal-window").click(function () {
    $(".modal").css({"display": "none"});
    $("body").css({"overflow-y": "auto"});
});

$(".close-success-message").click(function () {
    $(".success").css({"display": "none"});
});

// top btn
$(function(){
    var purpose = $('.purpose');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 20){
       		purpose.removeClass('top');
          $('.top-btn').removeClass('show');
          $('.quote').addClass('show');
        } else {
          purpose.addClass('top');
          $('.top-btn').addClass('show');
          $('.quote').removeClass('show');
          $('.quote').addClass('hidden');
        }
    });
})

//smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});