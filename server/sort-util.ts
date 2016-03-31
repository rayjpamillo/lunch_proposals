

export default class SortUtil{

    constructor(){

    }

    sortObjectArrayByKey(arr, paramKey){
        if(arr.length <= 1) return arr;

        let pivot = Math.floor((arr.length -1)/2);
        let val = arr.splice(pivot, 1), less = [], more = [];

        arr.forEach((element, index, arr) => {
            element[paramKey] < val[paramKey] ? less.push(element) : more.push(element);
        });

        console.log('spliced:');
        console.log(val);
        let sortedArray = (this.sortObjectArrayByKey(less, paramKey)).concat([val],this.sortObjectArrayByKey(more, paramKey));
        console.log(sortedArray);
        return sortedArray;
    }
}