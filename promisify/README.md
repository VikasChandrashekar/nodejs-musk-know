# util.promisify
Takes a function following the common Node.js callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises.

## Callback Function
Custom callback function need to be function`function(err, something)`
```
    const callbackFun = (i, cb) => {
        console.log('i: ', i)

        if ( i<1 ) cb('i should > 1')
        else cb(null, i-1)
    }
    
    const promiseFun = util.promisify(callbackFun);
```

## Reference
 - [https://nodejs.org/api/util.html#util_util_promisify_original](https://nodejs.org/api/util.html#util_util_promisify_original)