set -e
yeoman build
git add .
set +e
git ci -am "Add all forgotten files..."
set -e
git co gh-pages
[[ -e dist/dist ]] && rm dist/dist
cp -r dist/* .
set +e
git add .
git ci -am "another day another page"
set -e
git push
