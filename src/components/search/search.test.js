import react from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Search from './index'
//Test of search component

test('renders content',() =>{
    const text='Test';

    const component=render(<Search text={text} />)

    component.getByPlaceholderText('Test');
})
