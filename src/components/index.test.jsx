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
