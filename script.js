function showMore(){
	document.getElementById("txt").classList.remove("hidden");
	document.getElementById("less").classList.remove("hidden");
	document.getElementById("more").classList.add("hidden");
}

function showLess(){
	document.getElementById("txt").classList.add("hidden");
	document.getElementById("less").classList.add("hidden");
	document.getElementById("more").classList.remove("hidden");
}	

function showMores(){
	document.getElementById("txts").classList.remove("hidden");
	document.getElementById("lesses").classList.remove("hidden");
	document.getElementById("mores").classList.add("hidden");
}

function showLesses(){
	document.getElementById("txts").classList.add("hidden");
	document.getElementById("lesses").classList.add("hidden");
	document.getElementById("mores").classList.remove("hidden");
}	


function showResults(){
	let one=document.getElementById("q-one").value;
	let two=document.getElementById("q-two").value;
	let three=document.getElementById("q-three").value;
	let four=document.getElementById("q-four").value;
	let resoneP=document.getElementById("res-one");
	let restwoP=document.getElementById("res-two");
	let resthreeP=document.getElementById("res-three");
	let resfourP=document.getElementById("res-four");
	let scoreP=document.getElementById("score");
	let sectionResult=document.getElementById("results");
	let total=0;
	
	if(one=="img"){
		resoneP.innerHTML= "Question 1- Correct";
		total+=1;
	}
	else{
		resoneP.innerHTML= "Question 1- Incorrect";
	}
	
	if(two=="It creates a new line"){
		restwoP.innerHTML= "Question 2- Correct";
		total+=1;
	}
	else {
		restwoP.innerHTML= "Question 2- Incorrect";
	}
	
	if(three=="showOrder()"){
		resthreeP.innerHTML= "Question 3- Correct";
		total+=1;
	}
	else {
		resthreeP.innerHTML= "Question 3- Incorrect";
	}
	
	if(four=="display:flex;"){
		resfourP.innerHTML= "Question 4- Correct";
		total+=1;
	}
	else{
		resfourP.innerHTML= "Question 4- Incorrect";
	}

	scoreP.innerHTML="Score:" + total;

	sectionResult.classList.remove("hidden");
}

setInterval(changeSlide,1000);

function changeSlide(){
	let friendsElem=document.getElementById("friends");
	let num=friendsElem.getAttribute("data-num");
	
	if(num==1){
		friendsElem.src="images/dog.jpg";
		friendsElem.setAttribute("data-num", "2");
	}
	else if(num==2){
		friendsElem.src="images/parents.jpg";
		friendsElem.setAttribute("data-num", "3");
	}
	else if(num==3){
		friendsElem.src="images/cat.jpg";
		friendsElem.setAttribute("data-num", "4");
	}
	else if (num==4){
		friendsElem.src="images/friends.jpg";
		friendsElem.setAttribute("data-num", "1");
	}
}
