import { TopViewedProduct } from '../app'

test('Top Viewed Products', () => {
    const topProducts = new TopViewedProduct<number>(5);
    topProducts.processData([1,2,3,4,5,3,4,5,6,6,5,6,5,4,5,6,4,3,2,4,6,6,7,7,7,8]);
    const topThreeProducts = topProducts.getTopViewedProduct(3);
    expect(topThreeProducts).toMatchSnapshot();
    expect(topThreeProducts.length).toEqual(3);
});



