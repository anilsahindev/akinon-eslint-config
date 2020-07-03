# Akinon Eslint Config

    npm i akinon-eslint-config
    
.**eslintrc**
```
...
  "extends": [
     "extends": "akinon-eslint-config",
    ],
 ...
```
**example git hooks file ;** 
```
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep ".jsx\{0,1\}$")
ESLINT="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"

if [[ "$STAGED_FILES" = "" ]]; then
  exit 0
fi

PASS=true

printf "\n Running Akinon Eslint Rules ⌛ \n"

# Check for eslint
if [[ ! -x "$ESLINT" ]]; then
  printf "\t\033[41mPlease install ESlint\033[0m (npm i --save-dev eslint)"
  exit 1
fi

for FILE in $STAGED_FILES
do
  "$ESLINT" "$FILE"

  if [[ "$?" == 0 ]]; then
    printf "\t\033[32m Test  Passed 🎉  $FILE\033[0m"
  else
    printf "\t\033[41m Test  Failed 🥺 $FILE\033[0m"
    PASS=false
  fi
done

printf "\n Validation completed ✨ ✨ ✨\n"

if ! $PASS; then
  printf "\033[41mCOMMIT FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
  exit 1
else
  printf "\033[42mCOMMIT SUCCEEDED 🎉  \033[0m\n"
fi

exit $?
```
