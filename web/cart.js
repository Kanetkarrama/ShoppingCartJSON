

// Timestamp of cart that page was last updated with
var lastCartUpdate = 0;

/*
 * Adds the specified item to the shopping cart, via Ajax call
 * itemCode - product code of the item to add
 * The function serves as a Onclick Handler Function responsible for updating the 
 * state of the cart through an Ajax call. 
 */
function addToCart(itemCode) {
    //To obtain a XLMHttpRequest object 
    var req = newXMLHttpRequest();
    
    //register a callback function to receive callback notifications from the request object
    req.onreadystatechange = getReadyStateHandler(req, updateCart);
    
    /* 
    The POST request method requests that a web server accepts 
    the data enclosed in the body of the request message
    */
    //The servlet mapped to cart.do. "true" means the request is asynchronous
    req.open("POST", "cart.do", true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //set action to add when addtoCart method is called
    req.send("action=add&item=" + itemCode);
}

function removeFromCart(itemCode) {
    //To obtain a XLMHttpRequest object 
    var req = newXMLHttpRequest();
    //register a callback function to receive callback notifications from the request object
    req.onreadystatechange = getReadyStateHandler(req, updateCart);
    //The servlet mapped to cart.do. "true" means the request is asynchronous
    req.open("POST", "cart.do", true);
    // the request is form-coded data.
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //set action to remove when removeFromCart method is called
    req.send("action=remove&item=" + itemCode);
}

/* Udated the cart with json passed to the function
 * This is called form either addToCart of removeFromCart functions
 */


function updateCart(cartJSON){
    var cart = JSON.parse(cartJSON);
   
    var generated =cart.generated;
    
    if(generated > lastCartUpdate){
        lastCartUpdate = generated;// capture the json generated tag for recent updated time.
        // Clear the HTML list used to display the cart contents
        var contents = document.getElementById("contents");
        
        contents.innerHTML = "";
      
         var item = cart.Items;
         
         for (var i=0;i<item.length;i++){
             var name = item[i].Name;
             var quantity = item[i].Quantity;
             
             // Create and add a list item HTML element for this cart item
            var listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(name + " x " + quantity));
            contents.appendChild(listItem);
         }
        
    }
    
    // Update the cart's total using the value from the cart document
    document.getElementById("total").innerHTML = cart.Total;  
}
