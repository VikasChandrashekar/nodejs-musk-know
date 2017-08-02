const util = require('util');

(async function() {

    const callbackFun = (i, cb) => {
        console.log('i: ', i)

        if ( i<1 ) cb('i should > 1')
        else cb(null, i-1)
    }
    
    const promiseFun = util.promisify(callbackFun);

    const res = await promiseFun(2)
    console.log('res: ', res)

    try{
        await promiseFun(0)
    } catch(err){
        console.log('err: ', err)
    }
}())
