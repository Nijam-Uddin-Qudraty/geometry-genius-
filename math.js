const MultiplyValue = (num1, num2) => num1 * num2


const Calculator = (parent,num1,num2) => {
    const parentId = parent.id;
    if ((parentId == "triangle") || (parentId == "rhombus") || (parentId == "triangle"))
    {
        const ans = 0.5 * MultiplyValue(num1, num2);
        return ans;
    }
    else if(parentId == "ellipse"){
        const ans = Math.PI * MultiplyValue(num1, num2);
        return ans;
    }
    else {
        const ans = MultiplyValue(num1, num2);
        return ans;
    }
    
}





console.log("hello");