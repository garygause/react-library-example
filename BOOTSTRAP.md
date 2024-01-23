# Bootstrap

Actions taken to bootstrap this project.

1. Setup vite project.

```
yarn create vite react-library-example
cd react-library-example
yarn
```

2. Add git repo.

```
git init
git add README.md
git commit -m "init"
git remote add origin git@github.com:garygause/react-library-example.git
git push -u origin main
```

3. Add to configuration.

Add author, description, license, git repo, etc.

```
npm init

or edit package.json
```

See package.json for contents.

4. Set build folder in package.json

```
"main": "./dist/react-library-example.umd.js",
  "module": "./dist/react-library-example.es.js",
  "exports": {
    ".": {
      "import": "./dist/react-library-example.es.js",
      "require": "./dist/react-library-example.umd.js"
    }
  },
```

5. Add test dependencies.

```
npm install @testing-library/dom @testing-library/react c8 eslint eslint-plugin-react jsdom react-test-renderer vitest --save-dev
```

and add to scripts in package.json:

```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest run",
    "watch": "vitest"
  },
```

6. Update vite.config.js

```
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src', 'src/components/index.jsx'),
      name: 'react-library-example',
      fileName: (format) => `react-library-example.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react()],
});
```

7. Create vitest.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: false,
    environment: 'jsdom'
  }
})
```

8. Create a placeholder file in src/components/index.jsx.

```
export default function Hello({message = 'World'}) {
  return <div>Hello, {message}!</div>;
}
```

9. Add a test.

```
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';
import Hello from './index';

describe('Hello component', () => {
  it('Hello component renders correctly', () => {
    const component = renderer.create(<Hello />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(' prop working', () => {
    const component = renderer.create(<Hello message={'Friend'} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

10. Run test, all should pass.

```
yarn test
```

11. Replace App.jsx with sample code.

```
import Hello from './components';

const App = () => {
  return <Hello message={'Friend'} />;
};

export default App;
```

12. Test it out.

```
yarn dev
```

13. Update README to be useful to devs. Documentation, usage examples, feature highlights.

14. Make sure all your code is pushed to git before publishing.

15. Create a build.

```
npm test
npm run build
```

## Issues Encountered

1. Got the dreaded "React is not defined error" on running tests. Forgot to include the import below in vitest.config.js

```
import react from '@vitejs/plugin-react';
```
