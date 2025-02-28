// ================================
// Grade Calculator Logic
// ================================

/**
 * Populates the dropdowns with values from 70 to 100
 */
function populateDropdowns() {
    const test1 = document.getElementById('test1');
    const test2 = document.getElementById('test2');

    // Loop from 70 to 100 for the scores
    for (let i = 70; i <= 100; i++) {
        // Create option elements
        const option1 = document.createElement('option');
        option1.value = i;
        option1.text = i;
        test1.add(option1);

        const option2 = document.createElement('option');
        option2.value = i;
        option2.text = i;
        test2.add(option2);
    }
}

/**
 * Determines the grade based on the sum of Test 1 and Test 2
 */
function calculateGrade() {
    const score1 = parseInt(document.getElementById('test1').value);
    const score2 = parseInt(document.getElementById('test2').value);

    // Sum of the scores
    const total = score1 + score2;

    // Determine the grade
    let grade;
    if (total >= 180) {
        grade = "A";
    } else if (total >= 160) {
        grade = "B";
    } else if (total >= 140) {
        grade = "C";
    } else if (total >= 120) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display the grade
    document.getElementById('grade').value = grade;
}

/**
 * Clears the grade and resets the dropdowns
 */
function clearGrade() {
    document.getElementById('test1').selectedIndex = 0;
    document.getElementById('test2').selectedIndex = 0;
    document.getElementById('grade').value = "";
}

// ================================
// Attach Event Listeners
// ================================

// Attach event listener for Display button
document.getElementById('displayBtn').addEventListener('click', calculateGrade);

// Attach event listener for Clear button
document.getElementById('clearBtn').addEventListener('click', clearGrade);

// Populate dropdowns on page load
window.onload = populateDropdowns;

/* 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
// github.com/rmccune85 */
