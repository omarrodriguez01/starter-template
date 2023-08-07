# starter-template
Starter Code for Monorepo

Install all dependencies with yarn
`yarn install`

To start backend only 
`yarn nx start:dev backend`

To start frontend only
`yarn nx start frontend`

To start all with nx
`yarn nx run-many --parallel --target=start --projects=frontend,backend`

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



