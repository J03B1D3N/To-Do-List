let arr = [1, 2, 3, 4, 5]

 export function test (k) {
    for(let i = 0; i < k; i++) {
        (function log () {
            console.log(arr)
        })()
    }
}