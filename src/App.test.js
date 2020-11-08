import { render, screen } from '@testing-library/react';
import Progress from './components/progress';

test('renders Progress page', () => {
  render(<Progress />);
  const linkElement = screen.getByTestId("stepper");
  expect(linkElement).toBeInTheDocument();
});
