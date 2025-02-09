cd src/frontend
npm run build
echo "build main.bundle.js"
cp dist/main.bundle.js ../main/resources/static/ 
echo "copy file to sprint boot resource folder"
cd ../..
