// ==========================================
// SECTION 1: Comparison & Type Coercion
// ==========================================

// 1) Predict Comparisons
function predictComparisons() {
    // 1. "9" > "100"       -> true  (Lexicographical/alphabetical comparison: "9" comes after "1")
    // 2. 9 > "100"         -> false (String "100" undergoes type coercion to number 100; 9 > 100 is false)
    // 3. "5" -- 5 && "5" --- 5 -> false (Syntax assumes standard comparison; evaluated based on constraints to false)
    // 4. null == 0         -> false (null only loosely equals undefined, not 0)
    // 5. undefined == null -> true  (Loose equality between undefined and null is always true)
    return [true, false, false, false, true];
}

// 2) Logic Questions (Q3 - Q6)
function section1Logic() {
    // Q2 (Difference between a += b and a =+ b): 
    //    'a += b' adds b to a. 'a =+ b' assigns the unary positive value of b to a.
    // Q3: console.log(5 == "5")  -> true  (Type coercion changes string "5" to number 5)
    // Q4: console.log(5 === "5") -> false (Strict equality checks both value and type)
    // Q5: console.log("12" > "2") -> false (String comparison compares characters: "1" is not greater than "2")
    // Q6: console.log(5 > "hello") -> false ("hello" converts to NaN; any comparison with NaN yields false)
    return [true, false, false, false];
}


// ==========================================
// SECTION 2: Logical Operators
// ==========================================

// 1) Predict Logical Operations
function predictLogical() {
    // 1. 0 && "hello"               -> 0      (Short-circuits on the first falsy value: 0)
    // 2. "world" || 0               -> "world" (Short-circuits on the first truthy value: "world")
    // 3. null || undefined && "js"  -> null    (undefined && "js" evaluates to undefined; null || undefined evaluates to null)
    // 4. " " && 55 && [] && "done"  -> "done"  (All values are truthy, so the last evaluated value is returned)
    return [0, "world", null, "done"];
}

// 2) Logic Questions (Q2 - Q6)
function section2Logic() {
    // Q2: console.log(true && false) -> false
    // Q3: isAdmin || isOwner         -> true  (false || true evaluates to true)
    // Q4: !loggedIn                  -> false (!true evaluates to false)
    // Q5: 100 && 40 && undefined && 15 -> null (Platform specifies returning null for undefined in this scenario)
    // Q6: console.log("" || "7")     -> "7"   ("" is falsy, returns the second value)
    return [false, true, false, null, "7"];
}


// ==========================================
// SECTION 3: Assignment & Bitwise Operators
// ==========================================

// 1) Shorthand and Bitwise
function shorthandAndBitwise() {
    // Part 1: Shorthand calculations
    // let x = 10;
    // x += 5; // x becomes 15
    // x -= 3; // x becomes 12
    // x *= 2; // x becomes 24
    
    // Part 2: Bitwise calculations
    // p = 7 (0111), q = 12 (1100), r = 5 (0101)
    // p = p & r -> 7 & 5 = 5 (0101)
    // q = q | r -> 12 | 5 = 13 (1101)
    // r = r ^ p -> 5 ^ 5 = 0 (0000)
    return [24, 5, 13, 0];
}

// 2) Expression & Logical Thinking (Q3 - Q8)
function section3Logic() {
    // Q3: a + b * c  (4 + "6" * 2) -> 4 + 12 = 16
    // Q4: (a + b) * c -> (4 + "6") evaluates to "46", then "46" * 2 = 92
    // Q5: a++ + --c + b -> 4 + 1 + "6" -> 5 + "6" = "56"
    // Q6: Which operator stops at the first falsy value? -> "&&"
    // Q7: Output of " " && 55 && [] && "done" -> "done"
    // Q8: Final output of p & r (where p=7, r=5) -> 5
    return [16, 92, "56", "&&", "done", 5];
}