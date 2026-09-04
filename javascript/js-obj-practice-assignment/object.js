// ==========================================
// Task 1: Dynamic Property Access
// ==========================================

const user = {
    username: "srija_dev",
    email: "srija@example.com",
    city: "Hyderabad"
};

function getUserDetail(detailKey) {
    // Check if the key exists in the user object
    if (detailKey in user) {
        return user[detailKey]; // Use bracket notation for dynamic keys
    }
    return "Detail not available";
}

// ==========================================
// Task 2: Updating Object Values
// ==========================================

const marks = {
    math: 70,
    english: 65,
    science: 80
};

function updateMarks() {
    // Create a new object
    const updatedMarks = {};

    // Loop through the original marks object, increase each by 5, and assign
    for (let subject in marks) {
        updatedMarks[subject] = marks[subject] + 5;
    }

    return updatedMarks;
}

// ==========================================
// Task 3: Modifying Objects
// ==========================================

const book = {
    title: "The Mystery Box",
    author: "A. Writer",
    publishedYear: 2010,
    isAvailable: true
};

function modifyBook() {
    // 1. Change the title to "The secret key"
    book.title = "The secret key";

    // 2. Add a new property: genre: "Thriller"
    book.genre = "Thriller";

    // 3. Remove 'isAvailable' completely using the 'delete' keyword
    delete book.isAvailable;

    // 4. Remove 'author' completely using bracket notation
    delete book["author"];

    // Return the modified book object
    return book;
}

// ==========================================
// Task 4: Object Methods & `this` keyword
// ==========================================

function createProduct(name, price, discount) {
    return {
        name: name,
        price: price,
        discount: discount,

        // Method to calculate and return the price after discount
        calculateFinalPrice() {
            return this.price - this.discount;
        },

        // Method to update the discount and return the updated final price
        updateDiscount(newDiscount) {
            this.discount = newDiscount;
            return this.calculateFinalPrice(); // Reuse the calculate method
        }
    };
}

// ==========================================
// Exports (Compatible with Node and Browser)
// ==========================================
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        getUserDetail,
        updateMarks,
        modifyBook,
        createProduct
    };
}