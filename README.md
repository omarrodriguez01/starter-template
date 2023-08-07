# starter-template
Starter Code for Monorepo with Nest.js and Next.js pre-setup

Install all dependencies with yarn
`yarn install`

To start backend only 
`yarn nx start:dev api`

To start frontend only
`yarn nx dev web`

To start all with nx
`yarn nx run-many --parallel --target=start --projects=api,web`

To start all repo with docker
`docker-compose up`

To add new project
- move to the apps folder `cd apps`
- generate your new project with whichever command you wish i.e.\
`yarn create next-app yourAppName --ts`\
`nest new yourAppName --package-manager=yarn`\
*remember yarn is the package manager used in this template*


- In case of using React Native you can use this
[link](https://stackoverflow.com/questions/67463770/how-to-setup-react-native-with-yarn-and-typescript)
 as reference

To run your newly added or whatever project with NX from the project's root
`yarn nx {new projects start up command} {project's name}`

