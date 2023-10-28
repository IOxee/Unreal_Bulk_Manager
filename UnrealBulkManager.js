(function() {
    const PRICE_CLASS = '.asset-price';
    const ASSET_CONTAINER_CLASS = '.asset-container';
    const ADD_CART_BTN_CLASS = '.add-cart-btn';
    const ADD_REVIEW_BTN_CLASS = '.add-review-btn';
    const ITEM_NAME_CLASS = '.mock-ellipsis-item';
    
    const DELAY = 500;  // Delay in milliseconds
    const MAX_CLICKS = 50;

    let currentIndex = 0;
    let clickCount = 0;

    const priceElements = document.querySelectorAll(PRICE_CLASS);

    function clickNextItem() {
        if (currentIndex >= priceElements.length || clickCount >= MAX_CLICKS) {
            if (clickCount >= MAX_CLICKS) {
                console.log('Reached the maximum of 50 clicks. Please interact with the site and run the script again if needed.');
            }
            return;
        }

        const priceElement = priceElements[currentIndex];
        const assetContainer = priceElement.closest(ASSET_CONTAINER_CLASS);
        const addToCartButton = assetContainer.querySelector(ADD_CART_BTN_CLASS);
        const reviewButton = assetContainer.querySelector(ADD_REVIEW_BTN_CLASS);

        if (priceElement.textContent.trim() === 'Free' && !reviewButton) {                
            if (addToCartButton) {
                addToCartButton.click();
                clickCount++;
                
                const itemNameElement = assetContainer.querySelector(ITEM_NAME_CLASS);
                const itemName = itemNameElement ? itemNameElement.textContent.trim() : 'Unknown Item';
                
                console.log('Item added to cart:', itemName);
            } else {
                console.error('Could not find the "Add to Cart" button for a free item.');
            }
        } else if (reviewButton) {
            console.log('Skipped item because it has a "Write a Review" button.');
        }

        currentIndex++;
        setTimeout(clickNextItem, DELAY);
    }

    clickNextItem();
})();
