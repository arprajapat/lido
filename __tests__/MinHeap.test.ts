import { MinHeap } from '../MinHeap'
import { MIN_HEAP_ERRORS } from '../Error'

test('Min Heap', () => {
    const minHeap = new MinHeap<number>(4);
    minHeap.add(1, 3);
    minHeap.add(2, 1);
    minHeap.add(3, 7);
    minHeap.add(4, 2);
    minHeap.add(5, 9);
    const top = minHeap.getTopProduct();
    expect(top).toMatchSnapshot();
});

test('Min Heap', () => {
    try {
        new MinHeap<number>(0);
    } catch (error) {
        let isExpectedErr = error instanceof Error
        expect(isExpectedErr).toBeTruthy()
        expect(error.message).toBe(MIN_HEAP_ERRORS.CAPACITY)
    }
});