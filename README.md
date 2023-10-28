# 🛍️ Unreal Engine Marketplace Bulk Manager
> Enhance your experience on the Unreal Engine Marketplace and effortlessly claim your Free of the Month assets.

Unlock the potential of Unreal Bulk Manager, custom-made for the Unreal Engine Marketplace. Running directly in your browser's console, this tool refines bulk interactions, from effortless additions of free items to cart to detailed asset data insights.

---

## 🚀 Kick-Starting

### 📋 Essentials
- **Unreal Engine Marketplace**: Have the desired page up and running in your browser.
- **Authentication**: Ensure you're signed into your Unreal Engine account.

### 📖 Script Execution
1. Summon your browser's developer toolkit. Usually, it's `Ctrl+Shift+I (F12)` or `Cmd+Option+I` for Mac aficionados.
2. Switch to the 'Console' segment.
3. Copy the entirety of [Unreal Bulk Manager script](UnrealBulkManager.js).
4. Embed the script into the console.
5. Hit `Enter`.

---

## ⚙️ Tailoring

Before deploying the script, ponder over its configurations:

- **Selectors**:
  - `PRICE_CLASS`: Pinpoints the asset's price tag.
  - `ASSET_CONTAINER_CLASS`: Identifies the main container of each asset.
  - `ADD_TO_CART_BUTTON_CLASS`: Locates the "Add to Cart" action button.
  - `REVIEW_BUTTON_CLASS`: Checks if an asset has a "Write a Review" button.
  - `ITEM_NAME_CLASS`: Retrieves the name of the asset.

> 📝 Tip: These selectors come pre-configured. However, adaptability is key. Stay alert for any structural shifts in the Marketplace's web layout.

- **Operational Dynamics**:
  - `DELAY_BETWEEN_ACTIONS`: Spaces out actions to ensure site harmony.
  - `MAX_ITEMS`: Acts as a ceiling to the script's operations, safeguarding against over-activity.

---

## 💌 Script Aftermath

Once set into motion, the script will:
- Process assets in an orderly fashion.
- Chronicle every interaction, successful or otherwise, for user transparency.

---

### ❗ Highlight

In the event of any interface metamorphosis on the Marketplace, reevaluate the script's configurations. This ensures sustained compatibility and peak performance.

---

### 🚫 Words of Caution

Designed for personal upliftment, Unreal Bulk Manager aims to augment user interactions on the Unreal Engine Marketplace. Adherence to the Marketplace's terms is paramount. The authors and curators distance themselves from any misuse or unintended aftermath stemming from this script's usage.

---

### 📜 License

MIT License

Copyright (c) 2023 IO

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
