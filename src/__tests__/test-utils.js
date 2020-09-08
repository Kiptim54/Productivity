import React from 'react';
import ThemeContextProvider from '../Context/ThemeContext';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const AppProviders = ({ children }) => {
    return (
        <ThemeContextProvider value="light">{children}</ThemeContextProvider>
    );
};

const customRender = (ui, options) => {
    return render(ui, { wrapper: AppProviders, ...options });
};

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
export { customRender as render };
