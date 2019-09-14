var availablePuzzles = [
	
	[ [1,2,0,"rw3"], [2,0,1,"rw3"] ], 

	[ [1,2,0,"rw3"], [3,1,2,"rr2"] ], 
	[ [1,2,0,"rw3"], [0,3,2,"rr2"] ], 
	[ [1,2,0,"rw3"], [0,1,3,"rr2"] ], 
	[ [2,0,1,"rw3"], [3,1,2,"rr2"] ], 
	[ [2,0,1,"rw3"], [0,3,2,"rr2"] ], 
	[ [2,0,1,"rw3"], [0,1,3,"rr2"] ],
	
	[ [1,2,0,"rw3"], [3,1,0,"rr1rw1"] ], 
	[ [1,2,0,"rw3"], [1,3,2,"rr1rw1"] ], 
	[ [1,2,0,"rw3"], [0,2,3,"rr1rw1"] ], 
	[ [2,0,1,"rw3"], [3,0,2,"rr1rw1"] ], 
	[ [2,0,1,"rw3"], [0,3,1,"rr1rw1"] ], 
	[ [2,0,1,"rw3"], [2,1,3,"rr1rw1"] ], 

	[ [1,2,0,"rw3"], [0,3,4,"rr1"] ],
	[ [1,2,0,"rw3"], [3,1,4,"rr1"] ],
	[ [1,2,0,"rw3"], [3,4,2,"rr1"] ],
	[ [2,0,1,"rw3"], [0,3,4,"rr1"] ],
	[ [2,0,1,"rw3"], [3,1,4,"rr1"] ],
	[ [2,0,1,"rw3"], [3,4,2,"rr1"] ],
	
	[ [1,2,0,"rw3"], [3,0,4,"rw1"] ],
	[ [1,2,0,"rw3"], [3,4,1,"rw1"] ],
	[ [1,2,0,"rw3"], [2,3,4,"rw1"] ],
	[ [2,0,1,"rw3"], [3,4,0,"rw1"] ],
	[ [2,0,1,"rw3"], [1,3,4,"rw1"] ],
	[ [2,0,1,"rw3"], [3,2,4,"rw1"] ],

	[ [0,2,1,"rr1rw2"], [3,1,2,"rr2"] ], 
	[ [0,2,1,"rr1rw2"], [0,3,2,"rr2"] ], 
	[ [0,2,1,"rr1rw2"], [0,1,3,"rr2"] ], 
	[ [1,0,2,"rr1rw2"], [3,1,2,"rr2"] ], 
	[ [1,0,2,"rr1rw2"], [0,3,2,"rr2"] ],
	[ [1,0,2,"rr1rw2"], [0,1,3,"rr2"] ], 
	[ [2,1,0,"rr1rw2"], [3,1,2,"rr2"] ], 
	[ [2,1,0,"rr1rw2"], [0,3,2,"rr2"] ], 
	[ [2,1,0,"rr1rw2"], [0,1,3,"rr2"] ], 

	[ [0,2,1,"rr1rw2"], [0,3,4,"rr1"] ],
	[ [0,2,1,"rr1rw2"], [3,1,4,"rr1"] ],
	[ [0,2,1,"rr1rw2"], [3,4,2,"rr1"] ],
	[ [1,0,2,"rr1rw2"], [0,3,4,"rr1"] ],
	[ [1,0,2,"rr1rw2"], [3,1,4,"rr1"] ],
	[ [1,0,2,"rr1rw2"], [3,4,2,"rr1"] ],
	[ [2,1,0,"rr1rw2"], [3,1,4,"rr1"] ], 
	[ [2,1,0,"rr1rw2"], [0,3,4,"rr1"] ], 
	[ [2,1,0,"rr1rw2"], [3,4,2,"rr1"] ],
	
	[ [3,1,2,"rr2"], [0,3,2,"rr2"] ], 
	[ [3,1,2,"rr2"], [0,1,3,"rr2"] ], 
	[ [0,3,2,"rr2"], [0,1,3,"rr2"] ],
	
	[ [3,0,1,"rw2"], [3,1,2,"rr2"] ], 
	[ [3,2,1,"rw2"], [0,3,2,"rr2"] ], 
	[ [3,2,1,"rw2"], [0,1,3,"rr2"] ], 
	[ [2,3,0,"rw2"], [0,1,3,"rr2"] ], 
	[ [3,1,2,"rr2"], [3,2,0,"rw2"] ], 
	[ [3,1,2,"rr2"], [2,3,0,"rw2"] ], 
	[ [3,1,2,"rr2"], [1,0,3,"rw2"] ], 
	[ [0,3,2,"rr2"], [1,3,0,"rw2"] ], 
	[ [0,3,2,"rr2"], [2,3,1,"rw2"] ], 
	[ [0,3,2,"rr2"], [1,0,3,"rw2"] ], 
	[ [0,1,3,"rr2"], [1,2,3,"rw2"] ], 
	[ [0,1,3,"rr2"], [2,0,3,"rw2"] ], 

	[ [3,1,2,"rr2"], [0,3,1,"rr1rw1"] ], 
	[ [3,1,2,"rr2"], [0,2,3,"rr1rw1"] ], 
	[ [0,3,2,"rr2"], [2,1,3,"rr1rw1"] ], 
	[ [3,0,2,"rr1rw1"], [0,1,3,"rr2"] ], 
	[ [3,1,0,"rr1rw1"], [0,3,2,"rr2"] ], 
	[ [1,3,2,"rr1rw1"], [0,1,3,"rr2"] ],
	
	[ [3,1,2,"rr2"], [0,3,4,"rr1"] ], 
	[ [3,1,2,"rr2"], [0,4,3,"rr1"] ], 
	[ [0,3,2,"rr2"], [3,1,4,"rr1"] ], 
	[ [0,3,2,"rr2"], [4,1,3,"rr1"] ], 
	[ [0,1,3,"rr2"], [3,4,2,"rr1"] ], 
	[ [0,1,3,"rr2"], [4,3,2,"rr1"] ], 

	[ [3,1,2,"rr2"], [4,0,3,"rw1"] ], 
	[ [3,1,2,"rr2"], [4,3,0,"rw1"] ], 
	[ [0,3,2,"rr2"], [1,4,3,"rw1"] ], 
	[ [0,3,2,"rr2"], [3,4,1,"rw1"] ],
	[ [0,1,3,"rr2"], [2,3,4,"rw1"] ], 
	[ [0,1,3,"rr2"], [3,2,4,"rw1"] ], 
	
	[ [3,0,2,"rr1rw1"], [4,1,3,"rr1"] ], 
	[ [3,1,0,"rr1rw1"], [4,3,2,"rr1"] ], 
	[ [0,3,1,"rr1rw1"], [3,4,2,"rr1"] ], 
	[ [1,3,2,"rr1rw1"], [0,4,3,"rr1"] ], 
	[ [0,2,3,"rr1rw1"], [3,1,4,"rr1"] ], 
	[ [2,1,3,"rr1rw1"], [0,3,4,"rr1"] ]
	
];
var currentPuzzle = JSON.parse(JSON.stringify(availablePuzzles[0]));

function shallowClonePrimitives(oldObject){ // needs fallback && singletonish
	var newObject = { ... oldObject };
	return newObject;
}

var initTimer = 0; 
var theReplacements = [
	[ "letter", ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] ],
	[ "number", [0,1,2,3,4,5,6,7,8,9] ],
	[ "pic", [
		"<img class='choiceButton' src='circle.jpg' alt='circle'>", 
		"<img class='choiceButton' src='square.jpg' alt='square'>", 
		"<img class='choiceButton' src='star.jpg' alt='star'>", 
		"<img class='choiceButton' src='triangle.jpg' alt='triangle'>", 
		"<img class='choiceButton' src='diamond.jpg' alt='diamond'>", 
		"<img class='choiceButton' src='gear.jpg' alt='gear'>"
		]
	]
];
var replacementType = "";
function makeButtons(){ // updates current puzzle at the same time
	if(initTimer){clearInterval(initTimer);}
	// var valueType = generateNewPuzzle();
	// buttonAndInputHTML = generateHTML(valueType);
	// return buttonAndInputHTML;
	
	// BUILD A SET OF RANDOMIZED REPLACEMENT VALUES OR ITEMS
	var replacementReference = theReplacements[ Math.floor( Math.random()*theReplacements.length ) ];
	replacementType = replacementReference[0];
	var whichReplacements = JSON.parse(JSON.stringify(replacementReference[1]));
	var theseReplacements = [];
	for(var i=0; i<6; i++){
		theseReplacements.push( (whichReplacements.splice( Math.floor(Math.random() * whichReplacements.length), 1 ))[0]);
	}
	console.log(theseReplacements);
	// MAKE A COPY OF A RANDOMLY CHOSEN PUZZLE
	var randomPuzzlePosition = Math.floor( Math.random()*availablePuzzles.length );
	currentPuzzle = JSON.parse(JSON.stringify(availablePuzzles[randomPuzzlePosition]));
	
	
	// currentPuzzle = [ [1,0,2,"rw3"],[0,3,4,"rr1"] ];
	// APPLY RANDOMIZED REPLACEMENTS TO CHOSEN PUZZLE COPY
	currentPuzzle[0][0] = theseReplacements[ currentPuzzle[0][0] ];
	currentPuzzle[0][1] = theseReplacements[ currentPuzzle[0][1] ];
	currentPuzzle[0][2] = theseReplacements[ currentPuzzle[0][2] ];
	
	currentPuzzle[1][0] = theseReplacements[ currentPuzzle[1][0] ];
	currentPuzzle[1][1] = theseReplacements[ currentPuzzle[1][1] ];
	currentPuzzle[1][2] = theseReplacements[ currentPuzzle[1][2] ];
	// BUILD INTERFACE HTML
	var hintHTML, hintHTML0, hintHTML1;
	if(replacementType !== "pic"){
		hintRows.style.width="275px;";
			hintHTML0 = '<div class="hintWrapper clearfix">';
			hintHTML0 += '<button class="onTheBoard">' + currentPuzzle[0][0] + '</button>';
			hintHTML0 += '<button class="onTheBoard">' + currentPuzzle[0][1] + '</button>';
			hintHTML0 += '<button class="onTheBoard">' + currentPuzzle[0][2] + '</button>';
			hintHTML0 += (currentPuzzle[0][3] ? 
				'<img src="' + currentPuzzle[0][3] + '.png" alt="' + currentPuzzle[0][3] + '">' 
				: ''
			);
			hintHTML0 += '</div>';
			hintHTML1 = '<div class="hintWrapper clearfix">';
			hintHTML1 += '<button class="onTheBoard">' + currentPuzzle[1][0] + '</button>';
			hintHTML1 += '<button class="onTheBoard">' + currentPuzzle[1][1] + '</button>';
			hintHTML1 += '<button class="onTheBoard">' + currentPuzzle[1][2] + '</button>';
			hintHTML1 += (currentPuzzle[1][3] ? 
				'<img src="' + currentPuzzle[1][3] + '.png" alt="' + currentPuzzle[1][3] + '">' 
				: ''
			);
			hintHTML1 += '</div>';
	}
	else{
		hintRows.style.width="320px;";
			hintHTML0 = '<div class="hintWrapper clearfix" style="height:80px; width:320px;">';
			hintHTML0 += currentPuzzle[0][0];
			hintHTML0 += currentPuzzle[0][1];
			hintHTML0 += currentPuzzle[0][2];
			hintHTML0 += (currentPuzzle[0][3] ? 
				'<img src="' + currentPuzzle[0][3] + '.png" alt="' + currentPuzzle[0][3] + '">' 
				: ''
			);
			hintHTML0 += '</div>';
			hintHTML1 = '<div class="hintWrapper clearfix" style="height:80px; width:320px;">';
			hintHTML1 += currentPuzzle[1][0];
			hintHTML1 += currentPuzzle[1][1];
			hintHTML1 += currentPuzzle[1][2];
			hintHTML1 += (currentPuzzle[1][3] ? 
				'<img src="' + currentPuzzle[1][3] + '.png" alt="' + currentPuzzle[1][3] + '">' 
				: ''
			);
			hintHTML1 += '</div>';
	}
	if(Math.round(Math.random())){
		hintHTML = hintHTML0 + hintHTML1;
	}
	else{ hintHTML = hintHTML1 + hintHTML0; }
	// RESET THE TIMER
	var handOff = setTimeout(function(){
		document.getElementById("liveMinutes").innerHTML = "0:";
		document.getElementById("liveSeconds").innerHTML = "00";
		s = 0;
		initTimer = setInterval(function(){incrementTimer()},1000);
	},1000);
	// RETURN THE INTERFACE HTML
	return hintHTML;
}

var s = 0;
function incrementTimer(){
	s++;
	var correctedSeconds = s%60 < 10 ? "0" + s%60 : s%60;
	document.getElementById("liveMinutes").innerHTML = Math.floor(s/60) + ":";
	document.getElementById("liveSeconds").innerHTML = correctedSeconds;
}

hintRows.innerHTML = makeButtons();
var textInputs = document.getElementsByTagName("INPUT");
var imageInputs = document.getElementsByTagName("IMG");
textInputs[0].focus();

hintRows.addEventListener("click",doStuff,false);
// clearPartialAnswer.addEventListener("click",clearStuff,false);
	
for(var i=0, imax=textInputs.length;i<imax; i++){
	textInputs[i].addEventListener("keyup",doOtherStuff,false);
}

function doStuff(e){
	if(e.target.tagName === "BUTTON" && e.target.className === "onTheBoard"){
		var replacementTypeElements = {
			number:textInputs,
			letter:textInputs,
			pic:imageInputs
		};
		var replacementTypeBools = {
			number: function(j){return textInputs[j].value == "";},
			letter: function(j){return textInputs[j].value == "";},
			pic: function(j){return imageInputs[j].src === "blank.png";}
		};
		var replacementTypeInput = { // mutates input
			number: function(thisElement){thisElement.value = e.target.innerHTML;},
			letter: function(thisElement){thisElement.value = e.target.innerHTML;},
			pic: function(thisElement){thisElement.src = e.target.src;}
		};
		for(var i=0, imax=replacementTypeElements[replacementType].length; i<imax; i++){
			if(replacementTypeElements[replacementType][i].value == e.target.innerHTML){
				// possibly do an animation on the input to show that it already exists in the answer
				break;
			}
			else if(replacementTypeBools[replacementType](i)){
				replacementTypeInput[replacementType](replacementTypeElements[replacementType][i]);
				break;
			}
		}
		var howManyFull = 0;
		for(i=0, imax=replacementTypeElements[replacementType].length; i<imax; i++){
			if(!replacementTypeBools[replacementType](i)){
				howManyFull++;
			}
		}
		if(howManyFull === 3){
			var handoff = setTimeout(function(){alert( checkAnswer() );},20);
		}
	}
}
function doOtherStuff(e){
	var thisInput = e.target;
	var whichKey = e.which;
	if(whichKey === 13){
		var handoff = setTimeout(function(){alert( checkAnswer() );},20);
	}
	else if(whichKey > 47 && !e.metaKey && !e.altKey && !e.ctrlKey ){
		var howManyFull = 0;
		for(var i=0, imax=textInputs.length; i<imax; i++){
			if(textInputs[i].value !== ""){
				howManyFull++;
			}
		}
		
		if(howManyFull === 3){
			var handoff = setTimeout(function(){alert( checkAnswer() );},20);
		}
		else{
			if(thisInput.id === "tinput1"){document.getElementById("tinput2").focus();}
			else if(thisInput.id === "tinput2"){document.getElementById("tinput3").focus();}
			else{document.getElementById("tinput1").focus();}
		}
	}
}
function clearStuff(){
	for(var i=0, imax=textInputs.length; i<imax; i++){
		textInputs[i].value = "";
	}
}

var patterns = {
	rr1: function rr1(iArr){ 
		return [
			[ iArr[0],null,null, [ iArr[1],iArr[2] ] ],
			[ null,iArr[1],null, [ iArr[0],iArr[2] ] ],
			[ null,null,iArr[2], [ iArr[0],iArr[1] ] ]
		];
	},
	rr2: function rr2(iArr){ 
		return [
			[ iArr[0],iArr[1],null, [iArr[2]] ],
			[ iArr[0],null,iArr[2], [iArr[1]] ],
			[ null,iArr[1],iArr[2], [iArr[0]] ]
		];
	},
	rr3: function rr3(iArr){ 
		return [
			[ iArr[0],iArr[1],iArr[2], [] ]
		];
	},
	rw1: function rw1(iArr){ 
		return [
			[ null,iArr[0],null, [ iArr[1],iArr[2] ] ],
			[ null,null,iArr[0], [ iArr[1],iArr[2] ] ],
			
			[ iArr[1],null,null, [ iArr[0],iArr[2] ] ],
			[ null,null,iArr[1], [ iArr[0],iArr[2] ] ],
			
			[ iArr[2],null,null, [ iArr[0],iArr[1] ] ],
			[ null,iArr[2],null, [ iArr[0],iArr[1] ] ]
		];
	},
	rw2: function rw2(iArr){ 
		return [
			[ null,iArr[0],iArr[1], [iArr[2]] ],
			[ null,iArr[2],iArr[0], [iArr[1]] ],
			[ null,iArr[2],iArr[1], [iArr[0]] ],
			
			[ iArr[1],null,iArr[0], [iArr[2]] ],
			[ iArr[1],iArr[0],null, [iArr[2]] ],
			[ iArr[1],iArr[2],null, [iArr[0]] ],
			
			[ iArr[2],null,iArr[0], [iArr[1]] ],
			[ iArr[2],null,iArr[1], [iArr[0]] ],
			[ iArr[2],iArr[0],null, [iArr[1]] ]			
		];
	},
	rw3: function rw3(iArr){ 
		return [
			[ iArr[2],iArr[0],iArr[1], [] ],
			[ iArr[1],iArr[2],iArr[0], [] ]
		];
	},
	rr1rw1: function rr1rw1(iArr){ 
		return [ 
			[ iArr[0],null,iArr[1], [iArr[2]] ],
			[ iArr[0],iArr[2],null, [iArr[1]] ],
			
			[ null,iArr[1],iArr[0], [iArr[2]] ],
			[ iArr[2],iArr[1],null, [iArr[0]] ],
			
			[ null,iArr[0],iArr[2], [iArr[1]] ],
			[ iArr[1],null,iArr[2], [iArr[0]] ]
		];
	},
	rr1rw2: function rr1rw2(iArr){ 
		return [
			[ iArr[0],iArr[2],iArr[1], [] ],
			[ iArr[2],iArr[1],iArr[0], [] ],
			[ iArr[1],iArr[0],iArr[2], [] ]
		];
	}
};
/* MY CURRENTLY SUGGESTED ORDERING OF CALLS TO THE ABOVE PATTERNS:
	rr3 (1 combo, with 3 known values and unknown values), 
	rw3 (2 combos, with 3 known values and 0 unknown values), 
	rr1rw2 (3 combos, with 3 known values and 0 unknown values), 
	rr2 (3 combos, with 2 known values and one known not-value), 
	rr1 (3 combos, with 1 known value and two known not-values), 
	rr1rw1 (6 combos, with 2 known values and 1 unknown value), 
	rw1 (6 combos, with 1 known value and 2 unknown values), 
	rw2 (9 combos, with 2 known values and one known not-value)
*/
var testOrder = {rr3:0, rw3:1, rr1rw2:2, rr2:3, rr1:4, rr1rw1:5, rw1:6, rw2:7};

function preOrderComparisons(arrays){
	// determine the order in which to compare the arrays to one another
	var tempSearchOrder = [], searchOrder = [], whichSO = 0;
	for(var i=0, imax=arrays.length; i<imax; i++){
		whichSO = testOrder[ arrays[i][ arrays[i].length-1 ] ];
		// console.log("whichSO: " + whichSO);
		(tempSearchOrder[ whichSO ] ? tempSearchOrder[ whichSO ].push(arrays[i]) : tempSearchOrder[ whichSO ] = [arrays[i]] );
	}
	for(var j=0; j<tempSearchOrder.length; j++){
		if(tempSearchOrder[j]){
			while(tempSearchOrder[j].length){
				searchOrder.push( tempSearchOrder[j].pop() );
			}
		}
	}
	// create a test array from the first row
	var whichPattern = searchOrder[0][ searchOrder[0].length-1 ];
	// avoid mutations; make a copy of the first array in the searchOrder
	var copyOfFirstArr = JSON.parse( JSON.stringify( searchOrder[0] ) ); //candidate for shallowClonePrimitives
	// remove the type data from the end of the copy of the first array in the searchOrder
	copyOfFirstArr.pop();
	// create a workingArr (a set of arrays) from that trimmed copyOfFirstArr
	var workingArr = patterns[whichPattern](copyOfFirstArr);
	// remove the first array from the searchOrder (because we've used it to make a workingArr and don't want to compare itself to its own workingArr!)
	searchOrder.shift();
	// then call the compare function using the current workingArr and the remaining set of arrays
	return compare(workingArr, searchOrder);
}

function preOrderComparisons2(arrays){
	// determine the order in which to compare the arrays to one another
	var tempSearchOrder = [], searchOrder = [], whichSO = 0;
	for(var i=0, imax=arrays.length; i<imax; i++){
		whichSO = testOrder[ arrays[i][ arrays[i].length-1 ] ];
		(tempSearchOrder[ whichSO ] ? tempSearchOrder[ whichSO ].push(arrays[i]) : tempSearchOrder[ whichSO ] = [arrays[i]] );
	}
	for(var j=0; j<tempSearchOrder.length; j++){
		if(tempSearchOrder[j]){
			while(tempSearchOrder[j].length){
				searchOrder.push( tempSearchOrder[j].pop() );
			}
		}
	}
	// create a test array from the first row
	var whichPattern = searchOrder[0][ searchOrder[0].length-1 ];
	// avoid mutations; make a copy of the first array in the searchOrder
	var copyOfFirstArr = JSON.parse( JSON.stringify( searchOrder[0] ) );  //candidate for shallowClonePrimitives
	// remove the type data from the end of the copy of the first array in the searchOrder
	copyOfFirstArr.pop();
	// create a workingArr (a set of arrays) from that trimmed copyOfFirstArr
	var workingArr = patterns[whichPattern](copyOfFirstArr);
	// remove the first array from the searchOrder (because we've used it to make a workingArr and don't want to compare itself to its own workingArr!)
	searchOrder.shift();
	// then call the compare function using the current workingArr and the remaining set of arrays
	return compare2(workingArr, searchOrder);
}

function compare(workingArr, compArrs){
	// workingArr is an array of arrays (its arrays represent combinations built from the initial preOrderComparisons determined array [which may have subsequently been trimmed during recursive compares])
	var i=0, j=0, k=0, m=0, n=0, p=0, imax=workingArr.length, jmax=0, kmax=0, mmax=0, nmax=0, pmax=0;
	var workingArrRemovals = [];
	var copyOfCompArr0, compArr0pattern;
	var newWorkingArr = [], intermediateWorkingArr = [], intermediateRemovals;
	var copyOfCurrentWArow = [], combinedArray = [];
	// loop through the workingArr
	for(;i<imax;i++){
		// get the type of the row from the first comparison array
		compArr0pattern = compArrs[0][ compArrs[0].length-1 ];
		// then make a copy of the first of the compArrs
		copyOfCompArr0 = JSON.parse( JSON.stringify( compArrs[0] ) );  //candidate for shallowClonePrimitives
		// trim the type element out of the copyOfCompArr0
		copyOfCompArr0.pop();
		// update the workingArrRemovals variable
		workingArrRemovals = workingArr[i][ workingArr[i].length-1 ];
		// if there are any workingArrRemovals, replace them with null wherever they appear in the copyOfCompArr0
		j=0, jmax = workingArrRemovals.length;
		for(;j<jmax;j++){
			k=0, kmax=copyOfCompArr0.length;
			for(;k<kmax;k++){
				if(copyOfCompArr0[k]===workingArrRemovals[j]){
					copyOfCompArr0[k] = null;
				}
			}
		}
		// then, send the remaining copyOfCompArr0 to its patterns function (use and strip its type)
		intermediateWorkingArr = patterns[compArr0pattern](copyOfCompArr0);
		// then, loop through the response from the patterns function
		m=0, mmax = intermediateWorkingArr.length;
		for(;m<mmax;m++){
			// make a copy of the current row from the initial workingArr
			copyOfCurrentWArow = JSON.parse( JSON.stringify( workingArr[i] ) );  //candidate for shallowClonePrimitives
			copyOfCurrentWArow.pop();
			// do the first of a set of tests for validity, which, if all passed, will then place a newly combined array into into the newWorkingArr
			p=0, pmax = copyOfCurrentWArow.length, combinedArray = [null,null,null];
			for(;p<pmax;p++){
				if(copyOfCurrentWArow[p] === intermediateWorkingArr[m][p]){
					combinedArray[p] = copyOfCurrentWArow[p];
				}
				else if( copyOfCurrentWArow[p] !== null && intermediateWorkingArr[m][p] === null ){
					combinedArray[p] = copyOfCurrentWArow[p];
				}
				else if( copyOfCurrentWArow[p] === null && intermediateWorkingArr[m][p] !== null ){
					combinedArray[p] = intermediateWorkingArr[m][p];
				}
				else{ combinedArray[p] = null; }
				
			}
			// continue testing the validity of the combined array
			if(combinedArray[0]!==null){
				if(combinedArray[1]!==null && combinedArray[0]!==combinedArray[1]){
					if(combinedArray[2]!==null && combinedArray[0]!==combinedArray[2] && combinedArray[1]!==combinedArray[2]){
						newWorkingArr.push(combinedArray);
					}
				}
			}
		}
	}
	if(newWorkingArr.length){
		if(newWorkingArr.length === 1){
			return newWorkingArr;
		}
		else{ return false; }
	}
	return  false;
}

function compare2(workingArr, compArrs){
	var i=0, j=0, k=0, m=0, n=0, p=0, imax=workingArr.length, jmax=0, kmax=0, mmax=0, nmax=0, pmax=0;
	var workingArrRemovals = [];
	var copyOfCompArr0, compArr0pattern;
	var newWorkingArr = [], intermediateWorkingArr = [], intermediateRemovals;
	var copyOfCurrentWArow = [], combinedArray = [];
	// loop through the workingArr
	for(;i<imax;i++){
		// get the type of the row from the first comparison array
		compArr0pattern = compArrs[0][ compArrs[0].length-1 ];
		// thisPre.innerHTML += "compArr0pattern: " + compArr0pattern + "<br>";// 
		// then make a copy of the first of the compArrs
		copyOfCompArr0 = JSON.parse( JSON.stringify( compArrs[0] ) ); //candidate for shallowClonePrimitives
		// trim the type element out of the copyOfCompArr0
		copyOfCompArr0.pop();
		// update the workingArrRemovals variable
		workingArrRemovals = workingArr[i][ workingArr[i].length-1 ];
		// if there are any workingArrRemovals, replace them with null wherever they appear in the copyOfCompArr0
		j=0, jmax = workingArrRemovals.length;
		for(;j<jmax;j++){
			k=0, kmax=copyOfCompArr0.length;
			for(;k<kmax;k++){
				if(copyOfCompArr0[k]===workingArrRemovals[j]){
					copyOfCompArr0[k] = null;
				}
			}
		}
		// then, send the remaining copyOfCompArr0 to its patterns function (use and strip its type)
		intermediateWorkingArr = patterns[compArr0pattern](copyOfCompArr0);
		// then, loop through the response from the patterns function
		m=0, mmax = intermediateWorkingArr.length;
		for(;m<mmax;m++){
			// make a copy of the current row from the initial workingArr
			copyOfCurrentWArow = JSON.parse( JSON.stringify( workingArr[i] ) );  //candidate for shallowClonePrimitives
			copyOfCurrentWArow.pop();
			
			// grab the intermediate removals from the current row of intermediateWorkingArr
			intermediateRemovals = intermediateWorkingArr[m][ intermediateWorkingArr[m].length-1 ];
			// if there are any intermediateRemovals, then replace them with null wherever they appear in the copyOfCurrentWArow
			
			n=0, nmax = intermediateRemovals.length;
			for(;n<nmax;n++){
				p=0, pmax=copyOfCurrentWArow.length;
				for(;p<pmax;p++){
					if(copyOfCurrentWArow[p]===intermediateRemovals[n]){
						copyOfCurrentWArow[p] = null;
					}
				}
			}
			
			// do the first of a set of tests for validity, which, if all passed, will then place a newly combined array into into the newWorkingArr
			p=0, pmax = copyOfCurrentWArow.length, combinedArray = [null,null,null];
			for(;p<pmax;p++){
				if(copyOfCurrentWArow[p] === intermediateWorkingArr[m][p]){
					combinedArray[p] = copyOfCurrentWArow[p];
				}
				else if( copyOfCurrentWArow[p] !== null && intermediateWorkingArr[m][p] === null ){
					combinedArray[p] = copyOfCurrentWArow[p];
				}
				else if( copyOfCurrentWArow[p] === null && intermediateWorkingArr[m][p] !== null ){
					combinedArray[p] = intermediateWorkingArr[m][p];
				}
				else{combinedArray[p] = null;} // this catches the case where copyOfCurrentWArow[p] !== intermediateWorkingArr[p]
			}
			// continue testing the validity of the combined array
			if(combinedArray[0]!==null){
				if(combinedArray[1]!==null && combinedArray[0]!==combinedArray[1]){
					if(combinedArray[2]!==null && combinedArray[0]!==combinedArray[2] && combinedArray[1]!==combinedArray[2]){
						newWorkingArr.push(combinedArray);
					}
				}
			}
		}
	}
	if(newWorkingArr.length){
		if(newWorkingArr.length === 1){
			return newWorkingArr;
		}
		else{ return false;}
	}
	return false;
}

var correctCount = 0, wrongCount= 0, bestStreak = 0, currentStreak = 0, avgTime, bestTime, worstTime;
function checkAnswer(){
	var correctAnswer = preOrderComparisons([ currentPuzzle[0], currentPuzzle[1] ])[0];
	if(!correctAnswer){
		var correctAnswer = preOrderComparisons2([ currentPuzzle[0], currentPuzzle[1] ])[0];
	}
	if(!correctAnswer){alert("something is amiss, my apologies.");}
	console.log("correctAnswer");
	console.log(correctAnswer);
	var replacementTypeBools = {
		number: function(j){return textInputs[j].value*1 !== correctAnswer[j]*1;},
		letter: function(j){return textInputs[j].value.toUpperCase() !== correctAnswer[j];},
		pic: function(j){return imageInputs[j].src !== correctAnswer[j];}
	};
	var replacementTypeElements = {
		number:textInputs,
		letter:textInputs,
		pic:imageInputs
	};
	for(var i=0, imax=replacementTypeElements[replacementType].length; i<imax; i++){
		if(replacementTypeBools[replacementType](i)){
			var handoff = setTimeout(function(){ clearStuff(); },20);
			var handoff2 = setTimeout(function(){ wrongCount++; document.getElementById("wrongCount").innerHTML = wrongCount; },20);
			replacementTypeElements[replacementType][0].focus();
			currentStreak = 0;
			document.getElementById("currentStreak").innerHTML = currentStreak;
			return "fail!";
		}
	}
	
	var handoff = setTimeout(function(){ clearStuff() ;},20);
	var handoff2 = setTimeout(function(){ correctCount++; document.getElementById("correctCount").innerHTML = correctCount; },20);
	if(avgTime){
		avgTime[1]++;
		avgTime[0] = Math.round( (avgTime[0]*(avgTime[1]-1) + s)/avgTime[1] );
	}
	else { avgTime = [s,1]; }
	bestTime = bestTime ? Math.min(bestTime, s) : s;
	worstTime = worstTime ? Math.max(worstTime, s) : s;
	hintRows.innerHTML = makeButtons();
	replacementTypeElements[replacementType][0].focus();
	currentStreak++;
	bestStreak = Math.max(currentStreak, bestStreak);
	var handoff2 = setTimeout(function(){ 
		document.getElementById("currentStreak").innerHTML = currentStreak;
		document.getElementById("bestStreak").innerHTML = bestStreak; 
		document.getElementById("avgTime").innerHTML = avgTime[0] + " seconds"/*, after " + avgTime[1] + (avgTime[1] === 1 ? " attempt." : " attempts.") */;
		document.getElementById("bestTime").innerHTML = bestTime + " seconds"; 
		document.getElementById("worstTime").innerHTML = worstTime + " seconds"; 
	},20);
	return "Success!!";
}