let inputfield=document.getElementById("inputfield")
let buttons=document.getElementsByTagName("button")
$("button").click(function() {
    if(this.id=="back"){
        let valueofin=inputfield.value;
        let newval=valueofin.slice(0,length-1)
        inputfield.value=newval
    }else if(this.id=="ac"){
        inputfield.value=""
    }
    else if(this.id=="equal"){
        let result=eval(inputfield.value)
        if(result===undefined){
            inputfield.value="Error"
        }else if(result=="function Error() { [native code] }"){
            inputfield.value="Error"
        }
        else{

            inputfield.value=result
        }
    }
    else if(this.id=="percentile"){
        let result= (+inputfield.value)/100
        if(isNaN(result)){
            inputfield.value="Error"
        }else{
        inputfield.value=result
        }
    }
    else if(this.id=="mul"){
        let b=document.getElementById(this.id)
        inputfield.value=inputfield.value+""+b.value
    }
    else{
        let b=document.getElementById(this.id)
        if(inputfield.value=="Error"){
            inputfield.value=""
            
        }
        inputfield.value=inputfield.value+""+b.innerText
    }
   
});
