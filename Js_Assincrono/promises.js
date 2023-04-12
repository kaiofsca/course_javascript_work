{/* ------ JS Assíncrono ------ */}

// Promises
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false
        if (error) {
            reject(new Error('error in login!'))
        } else {
            console.log('user logged')
            resolve({email})
        }
        
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos')
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
}

const getVideosDetails = (video) => {
    return new Promise((resolve, reject) => {
        console.log('getVideosDetails')
        setTimeout(() => {
            resolve({title: 'video title'})
        }, 2500)
    })
}

// o then vai ser executado se cair nesse resolve aqui, then=então - vai fazer o login do usuário então...
// o .catch lida com o erro da promise
loginUser('kaio@gmail.com', '1234567')
    .then((user) => getUserVideos(user.email))
    .then((videos) => getVideosDetails(videos[0]))
    .then((videoDetails) => console.log({videoDetails}))
    .catch((error) => console.log({error}));

// Promise.all - Executa várias promises ao mesmo tempo
const yt = new Promise(resolve => {
    setTimeout(() => {
        resolve('videos from youtube')
    }, 2000)
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        resolve('posts from facebook')
    }, 2000)
})

Promise.all([yt, fb]).then((result) => {
    console.log({result})
});
