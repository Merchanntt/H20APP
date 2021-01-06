import WaterCalculator from '../../utils/CalculatorFunction';

describe('Calculator function', () => {
  it('Should be able to calculate daily water, cups and percentage', async () => {
    const {formatedCups, percentage, totalWater} = await WaterCalculator(250, 2000, 2000);

    expect(formatedCups).toBe(7)
    expect(percentage).toBe(12)
    expect(totalWater).toBe(1750)
  })

  it('Should be able to not send less than 0 cups', async () => {
    const { formatedCups } = await WaterCalculator(250, 0, 2000);

    expect(formatedCups).toBe(0)
  })
})
