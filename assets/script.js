let inputfield = document.getElementById("inputfield")
let buttons = document.getElementsByTagName("button")
$("button").click(function () {

    let valueofin = inputfield.value;
    if (this.id == "back") {
       
        let newval = valueofin.slice(0, valueofin.length - 1)
        inputfield.value = newval
    } else if (this.id == "ac") {
        inputfield.value = ""
    }
    else if (this.id == "equal") {
        let result = eval(inputfield.value)
        if (result === undefined) {
            inputfield.value = "Error"
        } else if (result == "function Error() { [native code] }") {
            inputfield.value = "Error"
        }
        else {

            inputfield.value = result
        }
    }
    else if (this.id == "percentile") {
        let result = (+inputfield.value) / 100
        if (isNaN(result)) {
            inputfield.value = "Error"
        } else {
            inputfield.value = result
        }
    }
    else if (this.id == "mul" || this.id == "div" || this.id == "sub" || this.id == "add") {
        let b = document.getElementById(this.id)
        if(inputfield.value[inputfield.value.length-1]=="+" || inputfield.value[inputfield.value.length-1]=="-" || inputfield.value[inputfield.value.length-1]=="*" || inputfield.value[inputfield.value.length-1]=="/"){
            
            inputfield.value=valueofin.slice(0, valueofin.length - 1)
            inputfield.value = inputfield.value + "" + b.value
        }
        if(!(inputfield.value[inputfield.value.length-1]==b.value)){
            inputfield.value = inputfield.value + "" + b.value
        }
        
    }
    else {
        let b = document.getElementById(this.id)
        inputfield.value = inputfield.value + "" + b.innerText
    }

});
