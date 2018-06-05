<%-- 
    Document   : index
    Created on : 29 May, 2018, 5:26:19 PM
    Author     : mm6
    ModifiedBy : rkanetka
--%>

<%@ page import="java.util.*" %>
<%@ page import="developerworks.ajax.store.*" %>
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <!-- Have the browser fetch  javascript file photonTracker.js. -->
        <script type="text/javascript" language="javascript" src="ajax1.js"></script>
        <script type="text/javascript" language="javascript" src="cart.js"></script>
        <%-- To load javascript filr to initiate handshake--%>
        <script src="jquery.js"></script>
    </head>
        <!-- Whenever the page is loaded (on refresh) the latest value of cart will be displayed. -->
        <body onload="addToCart(0)">
        
        <div style="float: left; width: 500px">
            <h2>Catalog</h2>
            <table border="1">
                <thead><th>Name</th><th>Description</th><th>Price</th><th>Add</th><th>Remove</th></thead>
                <tbody>
                    
                    <%
                        for (Iterator<Item> I = new Catalog().getAllItems().iterator(); I.hasNext();) {
                            Item item = I.next();
                    %>
                    <tr><td><%= item.getName()%></td><td><%= item.getDescription()%></td><td><%= item.getFormattedPrice()%></td><td><button onclick="addToCart('<%= item.getCode()%>')">Add to Cart</button></td><td><button onclick="removeFromCart('<%= item.getCode()%>')">Remove from Cart</button></td></tr>
                    <% }%>
                    
                </tbody>
            </table>
            <div style="position: absolute; top: 0px; right: 0px; width: 250px">
                <h2>Cart Contents</h2>
                <ul id="contents">
                </ul>
                Total cost: <span id="total">$0.00</span>
            </div>
    </body>
</html>