const getTargetId = (e) => {
    const targetId = e.currentTarget.id;
    let targetElement = document.getElementById(targetId);
    return targetElement
}
const FirstValue = (parent) => {
    // const input = parent.children[1].children[2].children[0];
    // const value = parseInt(input.value);
    // return value
    const inputs = parent.querySelectorAll("input"); // Find all <input> elements inside the "triangle" div
    return parseFloat(inputs[0].value);

}
const SecondValue = (parent) => {
    
    // const input = parent.children[1].children[2].children[2];
    // const value = parseInt(input.value);
    // return value
    const inputs = parent.querySelectorAll("input"); // Find all <input> elements inside the "triangle" div
    return parseFloat(inputs[1].value);
}

// const card = (e) => {
//     targeTid = getTargetId(e);
//     changeColor(targeTid);

// }
const textFound = id => {
    if (!id.innerText == "")
    {
        id.classList.remove("hidden");
    }
}

const button = (e) => {
    const target = e.currentTarget;
    const parent = (target.parentNode);
    // console.log(parent.id);
    const warningMsg = document.getElementById("warning").querySelector("span");
    
    
    value1 = FirstValue(parent);
    value2 = SecondValue(parent);
    if ( isNaN(value1) || isNaN(value2) ) {
        console.log("please provide two valid input");
        warningMsg.innerText = "Please provide two valid input";
        textFound(warningMsg);

    }
    else if (value1 <= 0 || value2 <= 0)
    {
        console.log("Please provide a positive number");
        warningMsg.innerText = "Please provide a positive number";
        textFound(warningMsg);
    }
    else {
        changeColor(parent);
        const ans = Calculator(parent, value1, value2);
        warningMsg.innerText=""
        showAns(parent,ans)
    }
    
    


    // target.parent
}
// console.log("connected");
// console.log(document.getElementsByClassName("card"));