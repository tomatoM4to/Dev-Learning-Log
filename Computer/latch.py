# Initialize the latch state
Q = 0
Q_not = 1

def nor_gate(a, b):
    return int(not(a or b))

def not_gate(a):
    return int(not(a))

def nor_latch(Set, Reset):
    global Q, Q_not

    # Calculate new values using NOR gates
    Q_new = nor_gate(Reset, Q_not)
    Q_not_new = nor_gate(Set, Q)

    # Update the latch state
    Q = Q_new
    Q_not = Q_not_new

    return Q, Q_not

# Test the latch
print(nor_latch(0, 1))  # Should output (0, 1), Reset the latch
print(nor_latch(1, 0))  # Should output (1, 0), Set the latch
print(nor_latch(0, 0))  # Should output (1, 0), No change
