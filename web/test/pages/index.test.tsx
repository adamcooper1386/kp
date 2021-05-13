import React from 'react'
import { render } from '../testUtils'
import AllPostsDataMock from '../__mocks__/allPostsDataMock'
import Home from '../../src/pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />)
    //allPostsData={AllPostsDataMock.emptyAllPostsData}/>, {})
    expect(asFragment()).toMatchSnapshot()
  })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })
})
