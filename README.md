# Aasj Trading Services (React + Firebase)

Quick start:
1. npm install
2. Add Firebase CLI: npm install -g firebase-tools
3. (Optional) firebase login
4. npm run build
5. firebase deploy --only hosting

Firebase hosting config is included (firebase.json & .firebaserc). The app uses Firestore collections:
- constructionServices
- products
- users
- orders

To seed construction services run:
npm run seed

(See /src/data/seedServicesGenerator.js)
