const getTargetId = (e) => {
    const targetId = e.currentTarget.id;
    let targetElement = document.getElementById(targetId);
    return targetElement
}
const FirstValue = (parent) => {
    const input1 = parent.children[1].children[2].children[0];
    const value1 = parseInt(input1.value);
    return value1
}
const SecondValue = (parent) => {
    
    const input2 = parent.children[1].children[2].children[2];
    const value2 = parseInt(input2.value);
    return value2
}

// const card = (e) => {
//     targeTid = getTargetId(e);
//     changeColor(targeTid);

// }
const button = (e) => {
    const target = e.currentTarget;
    const parent = (target.parentNode);
    // console.log(parent.id);
    value1 = FirstValue(parent);
    value2 = SecondValue(parent);
    const ans = Calculator(parent,value1,value2)
    console.log(ans);
    // target.parent
}
// console.log("connected");
// console.log(document.getElementsByClassName("card"));