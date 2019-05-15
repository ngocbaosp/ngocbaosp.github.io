
function job(state) {

    return new Promise(function(resolve, reject) {

        if (state) {

            resolve('success !!!');

        } else {

            reject('error !!!');

        }

    });

}

let promise = job(false);

promise.then(function(data) {

    console.log(data);

    return job(false);})

    .catch(function(err) {

        console.log(err);

        console.log(err);
        //return job(true);

        return 'Error caught';

    });