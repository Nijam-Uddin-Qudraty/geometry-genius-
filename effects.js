

const changeColor = (e) => {
    e.classList.add("bg-info");
}
console.log("connected");

const showAns = (parent, ans) => {
    const listId = document.getElementById("list");

    // Construct the ID of the list item to update (e.g., 'triangle1' for the triangle shape)
    const listItemId = `${parent.id}1`; 

    // Find the list item by its ID
    const listItem = document.getElementById(listItemId);
    
    if (listItem && listItem.innerText === "") {  // Only update if the list item is empty
        listItem.innerText = `Area of ${parent.id} is ${ans}`;  // Update the list item with the result
        console.log(`Updated item: ${listItem.innerText}`);
    } else if (listItem) {
        console.log("Item already has text, not updating.");
    } else {
        console.log("List item not found.");
    }
};

        // listItem.innerText = `Area of ${parent.id} is ${ans}`;
        // // console.log(listItem.innerText);
        // console.log(listItem);
        // listId.appendChild(listItem);
    
    // console.log(typeof(listItem.id));
    
