
function job(state,aaa) {

    return new Promise(function(resolve, reject) {

        if (state) {

            resolve('success !!!'+aaa);

        } else {

            reject('error !!!'+aaa);

        }

    });

}

let promise = job(true,1);

promise.then(function(data) {

    console.log(data);

    return job(false,2);})

    .catch(function(err) {

        console.log(err);

        return job(true,3);

        //return 'Error caught';

    })
    .then(newresult=>console.log(newresult));