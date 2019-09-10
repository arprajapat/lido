import { Node } from './Node';
import { MIN_HEAP_ERRORS } from './Error'

export class MinHeap <T> {
    private heap: Node<T>[];
    private capacity: number;

    private hm: Map<T, Node<T>>;

    constructor(capacity: number) {
        this.setCapacity(capacity);
        this.hm = new Map<T, Node<T>>();
        this.heap = [];
    }

    private setCapacity(capacity: number) {
        if(capacity<1) throw new Error(MIN_HEAP_ERRORS.CAPACITY)
        this.capacity = capacity;
    }

    public add(key: T, val: number) {
        if(this.isNewKey(key) && this.getSize() < this.capacity) {
            const node = new Node(key, val, this.heap.length);
            this.heap.push(node);
            this.hm.set(key, node);
            this.heapifyUP(this.heap, this.heap.length-1);
            return true;
        }
        else if(this.isNewKey(key)) { // new Key + capacity Full;
            if(this.peek() < val) {
                const old = this.heap[0];
                const node = new Node(key, val, 0);
                this.heap[0] = node;
                this.hm.delete(old.getKey());
                this.hm.set(node.getKey(), node);
                this.heapifyDown(this.heap, 0);
                return true;
            }
            return false;
        }
        else {
            const node = this.hm.get(key);
            node.setValue(val);
            this.heapifyDown(this.heap, node.getIndex());
            return true;
        }
    }
    public peek () {
        return this.heap[0].getValue();
    }
    private isNewKey (key: T) {
        return !this.hm.has(key);
    }

    private getSize () {
        return this.heap.length;
    }

    private heapifyDown(arr: Node<T>[], idx: number) {
        const l = idx*2+1;
        const r = idx*2+2;
        let smallest = idx;

        if(l<arr.length && arr[l].getValue() < arr[smallest].getValue()) {
            smallest = l;
        }
        if(r<arr.length && arr[r].getValue() < arr[smallest].getValue()) {
            smallest = r;
        }

        if(smallest !== idx) {
            this.swap(arr, smallest, idx);
            this.heapifyDown(arr, smallest);
        }
    }

    private heapifyUP(arr: Node<T>[], idx: number) {
        const p = Math.floor((idx-1)/2);

        if(p >= 0 && arr[p].getValue() > arr[idx].getValue()) {
            this.swap(arr, p, idx);
            this.heapifyUP(arr, p);
        }
    }

    private swap (arr: Node<T>[], i: number, j: number): void {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        arr[i].setIndex(i);
        arr[j].setIndex(j);
    }
    public print () {
        console.log(this.heap);
    }

    public getTopProduct()  {
        return this.heap.map((node) => { 
            return {
                key: node.getKey(),
                frequency: node.getValue()
            };
        });
    }
}
