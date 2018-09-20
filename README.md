# play-with-peer-deps
Try to separate peer-deps outside of module bundle.

### How to develop

```
# build library
cd ./packages/my-react-lib
npm i
npm run build
npm link

# preapare app
cd -
cd ./example/app
npm i
npm link ../../packages/my-react-lib
npm run serve:server
npm run serve:client

# serve production
npm run build:server
npm run serve:servep
```