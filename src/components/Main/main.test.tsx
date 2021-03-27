import { screen, render } from 'utils/test-utils'

import Main from './'

describe('<Main/>', () => {
  it('Should have a heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /start page/i })
    ).toBeInTheDocument()
  })
})
