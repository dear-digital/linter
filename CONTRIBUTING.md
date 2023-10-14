## Contribution Points and Labels

We use a point system to reward contributions and also to determine who can work on particular issues.

#### Points System:

- Points for contributors are maintained in the `POINTS.md` file.
- Accumulate points by successfully closing issues and meeting the Acceptance Criteria.

#### Issue Labels:
- **L1 Issues**: These issues are good for first time contributors.
  - Only contributors with **less than 100 points** as per the `POINTS.md` file are eligible to work on L1 issues.
- **L2 Issues**: These issues are more challenging and require a certain level of experience with our project.
  - Only contributors with **more than or equal to 100 points** as per the `POINTS.md` file are eligible to work on L2 issues.
  
#### Want to work on an L2 issue?

1. First, check your points in the `POINTS.md` file.
2. If eligible, **comment** on the issue with the following format: `/attempt #[issue-id]`.  
   For example: `/attempt #123`.
3. **NOTE**: Failing to comment as specified, even if you provide a correct solution within the given time frame, will result in receiving only **half the points** for that issue.

### Submission and Point Allocation:

- If two or more contributors submit solutions for an issue that meets the Acceptance Criteria:
  1. The first contributor to submit will receive full points.
  2. Subsequent correct submissions will receive only half the points.

## Setup

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
```
git pull upstream main
```

7.  Install dependencies

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
