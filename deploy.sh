if [ $# -ne 1 ]
then
  echo "Usage:"
  echo "       `basename $0` 'commit message'"
  exit 1
fi

function remove_from_manifest() {
  local remove=$1
  grep -v "$remove" dist/manifest.appcache > dist/manifest.appcache.tmp
  mv dist/manifest.appcache.tmp dist/manifest.appcache
}

set -e
yeoman clean
yeoman build
# this looks like a bug (in confess.js or in yeoman?) but the urls of the images are with a hostname and that's bad
sed -i.bak 's/http:\/\/localhost:3501//g' dist/manifest.appcache
rm dist/manifest.appcache.bak
remove_from_manifest "spreadsheets.google.com"
remove_from_manifest "sharethis"
remove_from_manifest "static.ak.fbcdn.net"
remove_from_manifest "connect.facebook.net"
remove_from_manifest "(undefined, #undefined)"
remove_from_manifest "apis.google.com"
echo "# git rev: `git rev-parse HEAD`" >> dist/manifest.appcache
echo "<!-- Built on `date`,     git rev: `git rev-parse HEAD` -->" >> dist/index.html
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
