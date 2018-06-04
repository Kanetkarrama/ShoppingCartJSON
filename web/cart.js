

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
    //Step1: Open an HTTP POST connection to the shopping cart. The servlet mapped to 
    //the URL cart.do. "true" means the request is asynchronous
    req.open("POST", "cart.do", true);
    //Step2: set a heaser on the XMLHttpRequest saying that the content of the request is form-coded data.
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //Step3: send the request with form-encoded data as the body stating that I want to add the specided item to the cart
    req.send("action=add&item=" + itemCode);
}

function removeFromCart(itemCode) {
    //To obtain a XLMHttpRequest object 
    var req = newXMLHttpRequest();
    //register a callback function to receive callback notifications from the request object
    req.onreadystatechange = getReadyStateHandler(req, updateCart);
    //Step1: Open an HTTP POST connection to the shopping cart. The servlet mapped to 
    //the URL cart.do. "true" means the request is asynchronous
    req.open("POST", "cart.do", true);
    //Step2: set a heaser on the XMLHttpRequest saying that the content of the request is form-coded data.
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //Step3: send the request with form-encoded data as the body stating that I want to add the specided item to the cart
    req.send("action=remove&item=" + itemCode);
}

/* The parameter of updateCart function is json object 
 * Update the the shopping cart presented in the web page by parsing the json object
 */


function updateCart(cartJSON){
    var cart = JSON.parse(cartJSON);
   
    var generated =cart.generated;
    
    if(generated > lastCartUpdate){
        lastCartUpdate = generated;
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
