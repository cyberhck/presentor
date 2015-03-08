echo "Cloning Presentor!!"
git clone https://github.com/cyberhck/presentor.git --depth 1
echo "Entering into presentor"
sleep 1
cd presentor
pwd
sleep 1
echo "Executing npm install"
npm install
echo "removing .tempFile from presentation"
rm presentation/.tempFile
echo "cloning reveal.js"
sleep 1
git clone https://github.com/hakimel/reveal.js.git presentation --depth 1
echo "copying presentor.js inside respective directory"
cp presentor.js presentation/presentor.js
echo "Done!"
