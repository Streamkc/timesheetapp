cd src/frontend
npm run build
cp dist/main.bundle.js ../main/resources/static/ 
cd ../..
gradle clean
gradle build
