package developerworks.ajax.store;

import java.util.*;

/**
 * This is the catalog class which display all the catalog items from which we can select item to add into out cart
 * This is catalog code from mccarthy article.
 */
public class Catalog {

    private static Map<String, Item> items;

    static {
        items = new HashMap<String, Item>();
        items.put("hat001", new Item("hat001", "Hat", "Stylish bowler hat (SALE!)", 1999));
        items.put("dog001", new Item("dog001", "Dog", "Chocolate labrador puppy", 7999));
        items.put("sou001", new Item("sou001", "Soup", "Can of tasty tomato soup", 199));
        items.put("cha001", new Item("cha001", "Chair", "Swivelling office chair", 4999));
        items.put("str001", new Item("str001", "String", "Metric tonne of bailing twine", 1999));
        items.put("qua001", new Item("qua001", "Quark", "Everyone's favorite sub-atomic particle", 49));
        items.put("tab001",new Item("tab001","Table","Sturdy and elegant Coffee table", 10099));
        //added extra item in the catalog
    }

    //Returns a Collection view of the values contained in this map
    public Collection<Item> getAllItems() {
        return items.values(); 
    }

    //Returns true if this map contains a mapping for the specific key
    public boolean containsItem(String itemCode) {
        return items.containsKey(itemCode); 
    }

    //Returns the value to which the specified key is mapped, 
    //or null if this map contains no mapping for the key.
    public Item getItem(String itemCode) { 
        return items.get(itemCode);
    }

}
