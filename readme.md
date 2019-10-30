# Git commands

git init - Create a new repo
git status - View changes to the code
git add - Add files to staging area
git commit - create a new commit with files from the staging area
git log - view recent commits



Install package 

	$ yarn add <package_name>@<version_if_version_enforced_otherwise_last_one>
	
Install package for dev only

	$ yarn add <package_name>@<version_if_version_enforced_otherwise_last_one> --dev

Build package dependencies

    $ yarn install

Build package dependencies for production (ignores devDependencies), that is what heroku will during deployment

    $ yarn install


Build for development

	$ yarn build:dev

Start dev server

	$ yarn run dev-server



Launch test

    $ yarn test --watch



Build for production

	$ yarn build:prod

Start live server (Use to be yarn run live-server when the live-server package was installed and the script configured)

	$ node server/server.js

	
	
Push deploy to heroku

	$ git push heroku

Login to heroku providing email and password

	$ heroku login

Push deploy to Heroku

	$ git push heroku		