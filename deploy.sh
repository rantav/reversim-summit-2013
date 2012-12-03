set -e
yeoman build
git add .
git ci -am "Add all forgotten files..."
git co gh-pages
rm dist/dist
cp -r dist/* .
git add .
git ci -am "another day another page"
git push
