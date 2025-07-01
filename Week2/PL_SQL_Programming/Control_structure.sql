-- Scenario 1: Apply 1% Discount for Customers Over 60

BEGIN
  FOR cust IN (
    SELECT customer_id, loan_interest_rate
    FROM customers
    WHERE age > 60
  )
  LOOP
    UPDATE customers
    SET loan_interest_rate = loan_interest_rate - 1
    WHERE customer_id = cust.customer_id;
  END LOOP;

  COMMIT;
END;
/


-- Scenario 2: Promote Customers with Balance > $10,000 to VIP

BEGIN
  FOR cust IN (
    SELECT customer_id
    FROM customers
    WHERE balance > 10000
  )
  LOOP
    UPDATE customers
    SET IsVIP = 'TRUE'
    WHERE customer_id = cust.customer_id;
  END LOOP;

  COMMIT;
END;
/



--  Scenario 3: Loan Reminders for Due Dates Within 30 Days

DECLARE
  v_due_date DATE;
  v_customer_id NUMBER;
BEGIN
  FOR loan IN (
    SELECT customer_id, due_date
    FROM loans
    WHERE due_date <= SYSDATE + 30
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Customer ID ' || loan.customer_id ||
      ', your loan is due on ' || TO_CHAR(loan.due_date, 'DD-MON-YYYY')
    );
  END LOOP;
END;
/

