Haldar Textile - Full Static Web App with Integrated Workers Admin Tab

Files included:
- firebase.js         - Firebase initialization and helpers (uses provided config)
- style.css           - Styles used by the app
- index.html          - Login page (worker code)
- app.html            - Main single-page app with sidebar: Overview, Products, New Product, Purchases, Sales, Stock, History, Workers (admin only)
- README.txt          - this file

How to deploy:
1. Place all files in a folder.
2. Deploy on Netlify (drag & drop) or any static hosting.
3. In Firestore, create collections used by the app:
   - workers (documents): { key: "<worker code>", name: "Name", role: "worker" or "admin" }
   - products (documents): { name, description, variants: [ { color, stock }, ... ] }
   - purchases, sales, stock_log (will be created by app when used)
4. For production, secure Firestore rules (require auth) and consider moving worker keys to Firebase Auth.

Notes:
- Workers tab (manage workers) is visible only to admin users.
- Admin can add/delete workers and change roles directly from the app.
- Profit chart is visible only to admin users.
