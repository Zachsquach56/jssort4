function biasedRNG(values, probabilities) {
	// cumulative probability, starting at 0
	var cumulativeProb = 0;

	// generate random number (zero to one).
	var rand = Math.random();

	// test `rand` against each of the cumulative probailities.
	for(var i=0; i<probabilities.length; i++) {
		cumulativeProb += probabilities[i];
		if(rand < cumulativeProb) return values[i];
	}
}

function biasedTouchPoints(){
for(var i=0; i<1; i++) {
	console.log(biasedRNG(["Vac", "Touch Points","Trash"], [0.34, 0.49, 0.7]));
    return(biasedRNG(["Vac", "Touch Points","Trash"], [0.34, 0.49, 0.7]));
}}


function biasedVac(){
for(var i=0; i<1; i++) {
	console.log(biasedRNG(["Vac", "Touch Points","Trash"], [0.55, 0.38, 0.02]));
    return(biasedRNG(["Vac", "Touch Points","Trash"], [0.55, 0.43, 0.02]));
}}

function biasedTrash(){
for(var i=0; i<1; i++) {
	console.log(biasedRNG(["Vac", "Touch Points","Trash"], [0.01, 0.04, 0.95]));
    return(biasedRNG(["Vac", "Touch Points","Trash"], [0.01, 0.04, 0.95]));
}}

function CallLine(){
    console.log(biasedTouchPoints(),biasedTouchPoints(),biasedTouchPoints(),biasedTouchPoints(),biasedTrash(),biasedVac());
    document.getElementById("AvReturn").innerHTML= biasedVac();
    document.getElementById("AxReturn").innerHTML= biasedTrash();
    document.getElementById("AbReturn").innerHTML= biasedTrash();
    document.getElementById("DeReturn").innerHTML= biasedVac();
    document.getElementById("MtReturn").innerHTML= biasedVac();
    document.getElementById("KyReturn").innerHTML= biasedTouchPoints();
    document.getElementById("LxReturn").innerHTML= biasedTouchPoints();
    document.getElementById("JaReturn").innerHTML= biasedVac();
    
}

