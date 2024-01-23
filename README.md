# React Library Example

Just an example of a library using React published to npm.

See [BOOTSTRAP.md](https://github.com/garygause/react-library-example/blob/main/BOOTSTRAP.md) for the full process taken to setup this project.

## Stack

React, vite, yarn.

## Publishing

yarn publish does not seem to work (OTP through security key is always invalid) so we use npm to publish.

1. Increment version number if necessary.

```
// package.json

"version": "0.0.2",
```

2. Make sure all code is updated on git.

```
git add .
git commit -m "<message>"
git push
```

3. Login to npm

```
npm login
```

4. Publish to npm

```
npm publish
```
