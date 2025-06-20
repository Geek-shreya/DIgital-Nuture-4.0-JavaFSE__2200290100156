//  1. What is Recursion?
// Recursion is a programming technique where a function calls itself to solve smaller subproblems. It’s useful when a problem can be divided into smaller, similar problems.

// Example:
// A simple recursive definition:

// f(n) = f(n-1) + some operation



//  2. Recursive Future Value Formula
// Suppose:

// FV(n) = future value after n years

// PV = present value

// r = annual growth rate (e.g., 0.05 for 5%)

// Then:

// FV(n) = FV(n-1) * (1 + r)
// Base Case: FV(0) = PV



// 3. Java Implementation
public class FinancialForecasting {

    // Recursive method 
    public static double futureValueRecursive(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValueRecursive(presentValue, rate, years - 1) * (1 + rate);
    }

    // Optimized 
    public static double futureValueMemo(double presentValue, double rate, int years, double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != 0) return memo[years];

        memo[years] = futureValueMemo(presentValue, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }

    public static void main(String[] args) {
        double presentValue = 1000.0; // Initial investment
        double rate = 0.08;           // 8% annual growth rate
        int years = 10;               // Forecast for 10 years

        // Basic recursive
        double futureValue = futureValueRecursive(presentValue, rate, years);
        System.out.printf("Future Value (Recursive): ₹%.2f\n", futureValue);

        // Memoized version
        double[] memo = new double[years + 1];
        double futureValueFast = futureValueMemo(presentValue, rate, years, memo);
        System.out.printf("Future Value (Memoized): ₹%.2f\n", futureValueFast);
    }
}



// 4. Time Complexity Analysis
// Recursive (without memoization)
// Time Complexity: O(n)

// Space Complexity: O(n) for call stack

// Memoized Recursion
// Time Complexity: O(n)

// Space Complexity: O(n) for memo array

// Much faster because we avoid redundant calculations



// 5. Optimization Discussion
// To optimize recursive solutions, use:

// Method	Benefit
// Memoization	Store already computed results
// DP Iterative	Convert to bottom-up approach (no stack)
// Tail Recursion	Enables compiler optimization (Java lacks TCO though)
