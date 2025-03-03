// Figyelő a görgetéshez
window.addEventListener('scroll', function() {
    const body = document.body;
 
    // Ha a görgetés elér egy bizonyos pontot (pl. 1 pixel), akkor cseréljük a háttérképet
    if (window.scrollY > 0) {
        // Beállítjuk az alap háttérképet (a kofal.jpg-ot)
        body.style.backgroundImage = "url('../src/Components/assets/kofal.jpg')";
    } else {
        // Beállítjuk a Castle háttérképet és teljesen lefedi a képernyőt
        body.style.backgroundImage = "url('../src/Components/assets/Castle.png')";
        body.style.backgroundSize = "cover"; // A kép teljesen kitölti a képernyőt
        body.style.backgroundPosition = "center"; // A kép középre lesz igazítva
    }
});