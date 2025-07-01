-- Scenario 1: Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE accounts
  SET balance = balance + (balance * 0.01)
  WHERE account_type = 'SAVINGS';

  COMMIT;
END;
/


-- Scenario 2: Update Employee Bonus by Department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_id IN NUMBER,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department_id = dept_id;

  COMMIT;
END;
/



--  Scenario 3: Transfer Funds Between Accounts

CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account_id IN NUMBER,
  to_account_id IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  -- Check balance of source account
  SELECT balance INTO from_balance
  FROM accounts
  WHERE account_id = from_account_id
  FOR UPDATE;

  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account');
  ELSE
    -- Deduct from source account
    UPDATE accounts
    SET balance = balance - amount
    WHERE account_id = from_account_id;

    -- Add to destination account
    UPDATE accounts
    SET balance = balance + amount
    WHERE account_id = to_account_id;
  END IF;

  COMMIT;
END;
/
