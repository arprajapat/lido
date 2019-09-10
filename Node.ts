export class Node<T> {
    private val: number;
    private index: number;
    private key: T
    constructor(key: T, val: number, index: number) {
        this.setKey(key);
        this.setValue(val);
        this.setIndex(index);
    }

    private setKey(key) {
        this.key = key;
    }
    public getKey() {
        return this.key;
    }
    public setValue(val) {
        this.val = val;
    }
    public getValue() {
        return this.val;
    }
    public setIndex(index) {
        this.index = index;
    }
    public getIndex() {
        return this.index;
    }
}