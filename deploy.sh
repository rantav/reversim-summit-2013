# Usage:
#   ./deploy.sh "commit message"

set -e
yeoman build
git add .
set +e
git ci -am "$1"
set -e
git co gh-pages
[[ -e dist/dist ]] && rm dist/dist
cp -r dist/* .
set +e
git add .
git ci -am "$1"
set -e
git push
