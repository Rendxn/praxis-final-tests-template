import { expect } from 'chai'
import { browser } from 'protractor'

describe('when open Atsea Shop', () => {
  before(async () => {
    await browser.get('https://www.google.com/')
  })

  it('then should have a title', async () => {
    expect(await browser.getTitle()).to.equal('Google')
  })

  after(async () => {
    // Cleanup your test (delete any users, products, etc. that were created for this test).
  })
})
