if [ $# -ne 1 ]
then
  echo "Usage:"
  echo "       `basename $0` 'commit message'"
  exit 1
fi


set -e
yeoman clean
yeoman build
# this looks like a bug (in confess.js or in yeoman?) but the urls of the images are with a hostname and that's bad
sed -i.bak 's/http:\/\/localhost:3501//g' dist/manifest.appcache
grep  -v spreadsheets.google.com dist/manifest.appcache | tee dist/manifest.appcache
git add .
set +e
git ci -am "$1"
set -e
git co gh-pages
[[ -e dist/dist ]] && rm dist/dist
cp -r dist/* .
git pull
set +e
git add .
git ci -am "$1"
set -e
git push origin gh-pages
git co gh-pages-source
