//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let x = input_ar0[1];
        let v = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            v[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.findFloor(v, n, x));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
*/

class Solution {
    
    findFloor(arr, n, x)
    {
        //your code here
        let start = 0;
        let end = n - 1;
        
        while(start <= end) {
            let mid = parseInt(start + (end - start) / 2);
            
            if(arr[mid] < x) {
                start = mid + 1;
            }
            
            else if(arr[mid] > x) {
                end = mid - 1;
            }
            
            else {
                return mid;
            }
        }
        return end;
    }
}