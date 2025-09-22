//your JS code here. If required.
  const form = document.getElementById("otp-form")
            const inputBoxLength = 6;

           ( function  (){

                for(let i =0;i<inputBoxLength; i++){
    
                    const input = document.createElement("input")
                    // input.value = i
                    input.classList.add("otp-input")
                    input.maxLength = "1"
                    input.type = "text"
    
    
                    form.appendChild(input)
    
                }
                
            })()


            // All inputs 

            const allInputs = document.querySelectorAll(".otp-input")
            allInputs[0].focus()
            for(let i =0;i<allInputs.length;i++){

                // Handle entering otp
                allInputs[i].addEventListener("input",(e)=>{

                    if(!isOtpInputValid(e.target.value)){
                        e.target.value = ""
                        return
                    }


                    if(allInputs[i+1]){
                        allInputs[i+1].focus()
                    }
                })
           
           
                // Handle backspace
                allInputs[i].addEventListener("keydown",(e)=>{

                    if(e.key=="Backspace"){
                        e.preventDefault()

                        if(allInputs[i].value){
                            allInputs[i].value= ""
                        }else{
                            if(allInputs[i-1]){
                                allInputs[i-1].focus()
                            }
                        }


                        console.log("user clicked backspace")
                    }
                })
           
                // Handle paste
                allInputs[i].addEventListener("paste",(e)=>{
                    const pastedValue = e.clipboardData.getData("text")

                    // If otp invalid give alert
                    if(!isOtpValid(pastedValue)){
                        alert("Invalid OTP")
                    }else{
                        for(let i = 0;i<pastedValue.length;i++){
                            allInputs[i].value = pastedValue[i]
                        }

                        allInputs[pastedValue.length-1].focus()
                    }

                })
            
            }


            // Check if otp input is valid
            function isOtpInputValid(string){
                const stringCharCode = string.charCodeAt()

                if(stringCharCode >= "0".charCodeAt() && stringCharCode <= "9".charCodeAt()){
                    return true
                }

                return false

            }


            // [i1,i2,i3,i4,i5,i6]
            function isOtpValid(string){

                // if(string.length==6) {
                //     return true
                // }


                for(let i =0;i<string.length;i++){
                    if(!Number(string[i])){
                        return false
                    }
                }

                return true
            }