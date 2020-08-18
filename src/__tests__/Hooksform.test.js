import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import Counter from '../components/Hooksform';

afterEach(cleanup)
describe('learning and testing the counter component', () => {
    it('component should render', () => {
        const { container, getByText, getByTestId } = render(<Counter />);
        expect(container).toMatchSnapshot();
    });

    it("should have the counter number the on load", ()=>{
        const {getByTestId} = render(<Counter/>)
        expect(getByTestId('countertag')).toHaveTextContent("0")
    })

    it("should increment when button clicked", ()=>{
        const {getByTestId, getByText} = render(<Counter/>)
        const incrementButton = getByText("Increase")

        fireEvent.click(incrementButton)
        expect(getByTestId('countertag')).toHaveTextContent("1")
    })

    it("should decrement when button clicked", async ()=>{
        const {getByTestId, getByText} = render(<Counter/>)
        const decrementButton = getByText("Decrease")
        fireEvent.click(decrementButton)
        const reponse = await waitForElement(()=> getByText("-1"))
        expect(reponse).toHaveTextContent("-1")
    })
});
