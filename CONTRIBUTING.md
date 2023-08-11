Following are the steps to run the project locally:

1.  Go to preferred folder in your computer and paste the following command after forking our repository (Only one of it if you don't have ssh setup then go with HTTP command)

```
git clone https://github.com/<YOUR-USERNAME>/linter.git
```

2.  Navigate to the project folder

```
cd linter
```

3. Add a reference(remote) to the original repository.
```
git remote add upstream https://github.com/dear-digital/linter.git
```

4. Check the remotes for this repository.
```
git remote -v
```
5. Always take a pull from the upstream repository to your master branch to keep it at par with the main project:
```git pull upstream main```

6.  Install dependencies

```bash
npm i 
```

7.  Now go ahead and create a new branch and move to the branch

```bash
git checkout -b <NAME-YOUR-BRANCH>
```

8.  To run Frontend and Backend concurrently
```
npm run dev
``` 

*More Running Commands:*
- Runs only for Backend with Nodemon
```
npm run server
```
- Runs only for Frontend
```
npm run client
```

9.  After done you can now commit and push this changes to your created branch, for doing that follow the following command chain

- `git status -s` (Shows the changed files)
- `git add --all` (Will add all the files to staging area)
- `git commit -m "<EXPLAIN-YOUR_CHANGES>"`
- `git push -u origin <SAME-BRANCH-AS-ABOVE>`

10.  After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

11.  Now fill in the form template of the pull request and give the necessary description.

12.  Click on **Submit**

13. Hurray! You just made your first contribution to this project 🎉

14. Wait for your pull request to be reviewed and merged.
