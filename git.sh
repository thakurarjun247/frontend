#just run this file
# sh git.sh
echo '\n\ngit pull...'
git pull
git add .
echo '\n\ngit status...'
git status
echo '\n\nenter a commit message:'
read commitMessage
git commit -m "$commitMessage"
echo '\n\ngit push...'
git push
echo '\n\n'
