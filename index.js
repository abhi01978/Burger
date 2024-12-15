// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const path = require('path'); // Import path module
// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true
// }));

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');

// // Sample Data with Image URLs
// let products = [
//     { id: 1, name: 'Product 1', price: 100, image: '/image/logo.webp' },
//     { id: 2, name: 'Product 2', price: 200, image: '/image/logo1.png' },
// ];

// // Routes
// app.get('/', (req, res) => {
//     res.render('index', { products: products, cart: req.session.cart, message: req.session.message });
//     delete req.session.message; // Clear message after rendering
// });
// app.get('/product/:id', (req, res) => {
//     const product = products.find(p => p.id == req.params.id);
//     res.render('product', { product: product });
// });

// // // Add to Cart
// // app.post('/cart/add/:id', (req, res) => {
// //     const productId = req.params.id;
// //     const product = products.find(p => p.id == productId);

// //     if (!req.session.cart) {
// //         req.session.cart = [];
// //     }

// //     req.session.cart.push(product);
// //     res.redirect('/');
// // });

// // Add to Cart
// app.post('/cart/add/:id', (req, res) => {
//     const productId = req.params.id;
//     const product = products.find(p => p.id == productId);

//     if (!req.session.cart) {
//         req.session.cart = [];
//     }

//     // Check if the product is already in the cart
//     const existingProduct = req.session.cart.find(item => item.id === product.id);
//     if (existingProduct) {
//         // If the product is already in the cart, send a message
//         req.session.message = 'Product already added to cart!';
//     } else {
//         // If not, add the product to the cart
//         req.session.cart.push(product);
//         req.session.message = 'Product added to cart successfully!';
//     }

//     res.redirect('/');
// });

// // View Cart
// app.get('/cart', (req, res) => {
//     let totalPrice = 0;
//     let totalCount = 0;

//     if (req.session.cart) {
//         totalCount = req.session.cart.length; // Total number of products
//         totalPrice = req.session.cart.reduce((sum, item) => sum + item.price, 0); // Total price calculation
//     }

//     res.render('cart', { cart: req.session.cart, totalPrice: totalPrice, totalCount: totalCount });
// });

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });









const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// Sample Data
let products = [
    { id: 1, name: 'burger', price: 100, image: '/image/bg1.png' },
    { id: 2, name: "Chilli", price: 80, image: '/image/ch1.jpg' },
    { id: 3, name: 'Momose', price: 40, image: '/image/mo1.png' },
    { id: 4, name: 'Frence Burger', price: 90, image: '/image/bg2.jpg' },
    
    { id: 5, name: 'Simple Chilli', price: 20, image: '/image/ch2.jpg' },
    { id: 1, name: 'Pizza', price: 90.10, image: '/image/pz1.jpg' },
    { id: 5, name: 'Simple dosa', price: 20, image: '/image/ds5.jpg' },


        /////section 2 img////
        { id: 1, name: 'Tikki Burger', price: 90.10, image: '/image/bg3.jpg' },
        { id: 2, name: "Spicy Chilli", price: 30.60, image: '/image/ch3.jpg' },
        { id: 3, name: 'Momose', price: 50, image: '/image/mo3.jpg' },
        { id: 2, name: "simple Pizza", price: 30.60, image: '/image/pz2.jpg' },

        { id: 5, name: 'Chese Momose', price: 20, image: '/image/mo4.jpg' },
        { id: 6, name: ' frence Chilli', price: 110, image: '/image/ch4.jpg' },

        { id: 4, name: 'Dosa', price: 70, image: '/image/ds4.jpg' },

        { id: 6, name: ' Chese Pizza', price: 110, image: '/image/pz6.jpg' },


        /////section 3 image

        { id: 6, name: 'Bag Momose', price: 60, image: '/image/mo2.jpg' },
        { id: 2, name: "Normail Pizza", price: 30.60, image: '/image/pz2.jpg' },
        { id: 4, name: 'Chese Burger', price: 70, image: '/image/bg4.jpg' },
        { id: 4, name: 'Chese Pizza', price: 70, image: '/image/pz4.jpg' },
        { id: 4, name: 'dosa', price: 70, image: '/image/ds3.jpg' },

        { id: 2, name: "Spicy Dhosa", price: 30.60, image:'/image/ds2.jpg' },

        { id: 6, name: ' Chese Momos', price: 110, image: '/image/mo6.jpg' },

        ////section 4 image 
        { id: 6, name: 'Bag Dosa', price: 60, image: '/image/ds1.jpg' },
        { id: 6, name: ' Chese Momos', price: 110, image: '/image/mo5.jpg' },
        { id: 5, name: 'Chese Burger', price: 20, image: '/image/bg5.jpg' },
        { id: 5, name: 'Spici Pizza', price: 20, image: '/image/pz5.jpg' },


        { id: 6, name: ' Chese dosa', price: 110, image: '/image/ds6.jpg' },
        { id: 6, name: '  Chilli', price: 110, image: '/image/ch2.jpg' },

];

// User Data

// Routes
app.get('/', (req, res) => {
    res.render('index', { products: products, cart: req.session.cart, message: req.session.message, user: req.session.user });
    delete req.session.message;
});
// User Data
let users = []; // Array to store user data

// User Registration
app.get('/register', (req, res) => {
    res.render('register', { message: req.session.message });
    delete req.session.message;
});

app.post('/register', (req, res) => {
    const { username, password, email, phone } = req.body;
    users.push({ username, password, email, phone }); // Store user data
    req.session.user = { username, email, phone }; // Store user in session
    req.session.message = 'Registration successful!';
    res.redirect('/');
});

// User Login
app.get('/login', (req, res) => {
    res.render('login', { message: req.session.message });
    delete req.session.message;
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = { username: user.username, email: user.email, phone: user.phone }; // Store user in session
        res.redirect('/');
    } else {
        req.session.message = 'Invalid username or password!';
        res.redirect('/login');
    }
});

// // Add to Cart
// app.post('/cart/add/:id', (req, res) => {
//     if (!req.session.user) {
//         req.session.message = 'You must be logged in to add items to the cart!';
//         return res.redirect('/login');
//     }

//     const productId = req.params.id;
//     const product = products.find(p => p.id == productId);

//     if (!req.session.cart) {
//         req.session.cart = [];
//     }

//     const existingProduct = req.session.cart.find(item => item.id === product.id);
//     if (existingProduct) {
//         req.session.message = 'Product already added to cart!';
//     } else {
//         req.session.cart.push(product);
//         req.session.message = 'Product added to cart successfully!';
//     }

//     res.redirect('/');
// });

// Add to Cart
app.post('/cart/add/:id', (req, res) => {
    if (!req.session.user) {
        req.session.message = 'You must be logged in to add items to the cart!';
        return res.redirect('/login');
    }

    const productId = req.params.id;
    const product = products.find(p => p.id == productId);

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const existingProduct = req.session.cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1; // Increment quantity
        req.session.message = 'Product quantity updated in cart!';
    } else {
        req.session.cart.push({ ...product, quantity: 1 }); // Add new product with quantity
        req.session.message = 'Product added to cart successfully!';
    }

    res.redirect('/');
});

// Update Cart Item Quantity
app.post('/cart/update/:id', (req, res) => {
    const productId = req.params.id;
    const { quantity } = req.body; // Get the new quantity from the form

    if (req.session.cart) {
        const product = req.session.cart.find(item => item.id == productId);
        if (product) {
            product.quantity = quantity; // Update the quantity
            req.session.message = 'Product quantity updated successfully!';
        }
    }

    res.redirect('/cart');
});

// Delete Cart Item
app.post('/cart/delete/:id', (req, res) => {
    const productId = req.params.id;

    if (req.session.cart) {
        req.session.cart = req.session.cart.filter(item => item.id != productId); // Remove the product
        req.session.message = 'Product removed from cart successfully!';
    }

    res.redirect('/cart');
});

// View Cart
app.get('/cart', (req, res) => {
    let totalPrice = 0;
    let totalCount = 0;

    if (req.session.cart) {
        totalCount = req.session.cart.length;
        totalPrice = req.session.cart.reduce((sum, item) => sum + item.price, 0);
    }

    res.render('cart', { cart: req.session.cart, totalPrice: totalPrice, totalCount: totalCount });
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});


// User Profile
app.get('/profile', (req, res) => {
    if (!req.session.user) {
        req.session.message = 'You must be logged in to view your profile!';
        return res.redirect('/login');
    }
    res.render('profile', { user: req.session.user, message: req.session.message });
    delete req.session.message; // Clear message after rendering
});
// User Profile Update Form
app.get('/profile/edit', (req, res) => {
    if (!req.session.user) {
        req.session.message = 'You must be logged in to edit your profile!';
        return res.redirect('/login');
    }
    res.render('profileEdit', { user: req.session.user, message: req.session.message });
    delete req.session.message; // Clear message after rendering
});

// Handle Profile Update
app.post('/profile/update', (req, res) => {
    const { username, email, phone } = req.body;

    // Update user information in the session
    if (req.session.user) {
        req.session.user.username = username;
        req.session.user.email = email;
        req.session.user.phone = phone;

        // Optionally, update the user data in the users array (if you are storing it)
        const userIndex = users.findIndex(u => u.username === req.session.user.username);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], username, email, phone };
        }

        req.session.message = 'Profile updated successfully!';
    }

    res.redirect('/profile');
});

// Checkout Page
app.get('/checkout', (req, res) => {
    if (!req.session.user) {
        req.session.message = 'You must be logged in to checkout!';
        return res.redirect('/login');
    }

    let totalPrice = 0;
    if (req.session.cart) {
        totalPrice = req.session.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    }

    res.render('checkout', { cart: req.session.cart, totalPrice: totalPrice, user: req.session.user });
});

// Handle Checkout
app.post('/checkout', (req, res) => {
    if (!req.session.user || !req.session.cart || req.session.cart.length === 0) {
        req.session.message = 'Your cart is empty or you are not logged in!';
        return res.redirect('/checkout');
    }

    // Here you would typically process the payment and save the order to a database
    const order = {
        user: req.session.user,
        items: req.session.cart,
        totalPrice: req.session.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
        date: new Date()
    };

    // Clear the cart after checkout
    req.session.cart = [];
    req.session.message = 'Order placed successfully!';

    // Render the order confirmation page
    res.render('orderConfirmation', { order: order });
});

// Admin: Show Add Product Form
app.get('/admin/add-product', (req, res) => {
    res.render('addProduct', { message: req.session.message });
    delete req.session.message; // Clear message after rendering
});


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));


// Admin: Show Add Product Form
app.get('/admin/add-product', (req, res) => {
    res.render('addProduct', { message: req.session.message });
    delete req.session.message; // Clear message after rendering
});

// Admin: Handle Add Product
app.post('/admin/add-product', (req, res) => {
    const { name, price, image, description } = req.body;
    const newProduct = {
        id: products.length + 1, // Simple ID generation
        name,
        price: parseFloat(price),
        image,
        description
    };
    products.push(newProduct);
    req.session.message = 'Product added successfully!';
    res.redirect('/admin/add-product');
});

// Route to get a specific product by ID
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.render('productDetail', { product });
    } else {
        res.status(404).send('Product not found');
    }
});


// Route to handle search requests
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase(); // Get the search query
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );

    res.render('productList', { products: filteredProducts, message: `Search results for "${query}":` });
});
































// Admin: Show Edit Product Form
app.get('/admin/edit-product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.render('editProduct', { product, message: req.session.message });
        delete req.session.message; // Clear message after rendering
    } else {
        res.status(404).send('Product not found');
    }
});

// Admin: Handle Edit Product
app.post('/admin/edit-product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price, image, description } = req.body;
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = { id: productId, name, price: parseFloat(price), image, description };
        req.session.message = 'Product updated successfully!';
    }
    res.redirect('/admin/products');
});


// Admin: Handle Delete Product
app.post('/admin/delete-product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    req.session.message = 'Product deleted successfully!';
    res.redirect('/admin/products');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});