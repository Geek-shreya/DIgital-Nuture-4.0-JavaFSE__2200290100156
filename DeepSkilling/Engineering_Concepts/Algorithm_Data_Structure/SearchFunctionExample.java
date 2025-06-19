//  1. Asymptotic Notation (Big O)
// Big O Notation describes the upper bound of an algorithm's runtime as the input size grows. It helps us analyze the scalability and efficiency of algorithms.

// Examples:
// O(1) – Constant time (fastest)

// O(log n) – Logarithmic time (e.g., binary search)

// O(n) – Linear time (e.g., linear search)

// O(n log n) – Log-linear time (e.g., quicksort)

// O(n²) – Quadratic time (e.g., nested loops)



// 2. Search Case Analysis
// Linear Search:
// Best case: O(1) → Element is at the start.

// Average case: O(n/2) → Element is in the middle.

// Worst case: O(n) → Element is at the end or not found.

// Binary Search:
// Best case: O(1) → Element is in the middle.

// Average/Worst case: O(log n) → Keep halving the search space.

// Note: Binary search works only on sorted arrays.



// 3. Java Implementation
import java.util.Arrays;

// Product class
class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

public class SearchFunctionExample {

    // Linear Search by product name
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search by product name
    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(targetName);

            if (compare == 0) return products[mid];
            else if (compare < 0) left = mid + 1;
            else right = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "T-Shirt", "Clothing")
        };

        // Linear Search
        String searchTerm = "Watch";
        Product result1 = linearSearch(products, searchTerm);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        // Sort by product name for Binary Search
        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));

        //Binary Search
        Product result2 = binarySearch(products, searchTerm);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}



//  4. Time Complexity Comparison
// Algorithm	Time Complexity	Requires Sorted Data?
// Linear Search	O(n)	     No
// Binary Search	O(log n)	Yes



//  5. Which is More Suitable?
// For smaller or unsorted datasets (e.g., frequent updates, no sorting) → Use Linear Search

// For large datasets that are sorted or rarely changed → Use Binary Search for fast results.