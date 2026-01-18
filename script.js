function loadSection(id, url){
    fetch(url)
    .then(res => res.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}

// Load sections dynamically
// loadSection('header', 'header.html');
// loadSection('home', 'home.html');
// loadSection('about', 'about.html');
// loadSection('services', 'services.html');
// loadSection('products', 'products.html');
// loadSection('contact', 'contact.html');
// loadSection('footer', 'footer.html');
 loadSection('website', 'website.html');

