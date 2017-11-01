import App 		from '../src/App';
import renderer 	from 'react-test-renderer';
import React 		from 'react';

test('Todo component renders the todo correctly', () => {
  const rendered = renderer.create(
    <App  />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
