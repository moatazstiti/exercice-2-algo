const arr =[4,8,6,1,9,3,7,5,2];

const insertionSort = arr => {
    for (let i = 1 ; i < arr.length; i++) {
       let curr=arr [i];
       let j = i-1;
       while (j >= 0 && arr[j] > curr) {
        arr[j + 1]=arr[j];
        j--
        
       }
       arr[j + 1] = curr;
        
       }
       return arr;
        
    };

    insertionSort(arr);

    console.log(arr);


