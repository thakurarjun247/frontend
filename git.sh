#just run this file
# sh git.sh
git pull
git add .
git status
echo 'Enter the commit message:'
read commitMessage
git commit -m "$commitMessage"
git push
