import { yearRange } from '../dateRangeHelper'

describe('Date range helper', () => {
  it('Should calculate year ranges correctly', () => {
    const test = yearRange(2010)
    expect(test).toEqual([2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010])
  })
})
