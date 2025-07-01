import com.example.Calculator;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup - runs before each test
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup done.");
    }

    // Teardown - runs after each test
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown done.");
    }

    @Test
    public void testAddition() {
        // Arrange is already done in setUp()

        // Act
        int result = calculator.add(5, 3);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange is already done in setUp()

        // Act
        int result = calculator.subtract(10, 4);

        // Assert
        assertEquals(6, result);
    }
}
