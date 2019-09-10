import { MinHeap } from './MinHeap';
export class TopViewedProduct <T> {
    private hm: Map<T, number>;
    private minHeap: MinHeap<T>;
    constructor(capacity) {
        this.hm = new Map<T, number>();
        this.minHeap = new MinHeap<T>(capacity);
    }

    public processData(arr: T[]) {
        for (let i = 0; i < arr.length; i++) {
            if(!this.hm.has(arr[i])) {
                this.hm.set(arr[i], 0);
            }
            
            this.hm.set(arr[i], this.hm.get(arr[i])+1);
            this.minHeap.add(arr[i], this.hm.get(arr[i]));  
        }
    }

    public getTopViewedProduct (k: number) {
        const arr = this.minHeap.getTopProduct();
        arr.sort((a, b) => b.frequency-a.frequency);
        const min = Math.min(k, arr.length);
        arr.length = min;
        return arr;

    }
}
