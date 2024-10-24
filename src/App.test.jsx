import { render, screen } from '@testing-library/react'
import App from './App'
import { expect } from 'vitest'

describe('App', () => {
    it('renders the App component', () => {
        render(<App />)
        expect(screen.getByText(/We/i)).toBeInTheDocument();
        // screen.debug(); 
    })
})