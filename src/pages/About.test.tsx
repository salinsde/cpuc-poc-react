import { render, screen } from '@testing-library/react';
import About from '@/pages/About';

describe('App', () => {
    test('renders headline', () => {
        render(<About />);
        const text = screen.getByText(/About/i);
        expect(text).toBeInTheDocument();
    });
    test('check mui styled component', async () => {
        render(<About />);
        const btn = screen.getByText(/MUI Button/i);
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveStyle('background: #000000');
    });
});
