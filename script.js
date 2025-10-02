//your JS code here. If required.
//your JS code here. If required.
const inputSize=6;
const form=document.getElementById("form")
for(let i=0;i<inputSize;i++){
	const input=document.createElement("input");
	input.classList.add("code");
	input.id=code-${i+1};
	input.maxLength="1";
	input.placeholder="0";
	form.appendChild(input);	
}
const allInputs=document.querySelectorAll(".code");
allInputs[0].focus();
for(let i=0;i<allInputs.length;i++){
	//for handling otp next
	allInputs[i].addEventListener("input",(e)=>{
		if(!isInputValid(e.target.value)){
			e.target.value="";
			alert("Not valid Input");
			return;
		}
		if(allInputs[i+1]){
			allInputs[i+1].focus();
		}
	});

	//for handling otp backspace
	allInputs[i].addEventListener("keydown",(e)=>{
		if(e.key=="Backspace"){
			e.preventDefault();
			if(allInputs[i].value==""){
				if(allInputs[i-1]){
					allInputs[i-1].focus();
				}
			}
			else{
				allInputs[i].value="";
			}
		}
	})
}

function isInputValid(str){
	if(str.charCodeAt()>="0".charCodeAt() && str.charCodeAt()<="9".charCodeAt()){
		return true;
	}
	return false;

		
}