{/* ------ JS Assíncrono ------ */}

// Async Await - uma outra forma de consumir uma promise pois na dia a dia vc não criar promises só vai consumi-las. e não prceisa ficar colocanco vários .then consequentemente ficando mais fácil.
const axios = require('axios')

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


const displayUser = async () => {
    try {
        const user = await loginUser('kaio@gmail.com', '123456')
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideosDetails(videos[0])
        // console.log({user})
        // console.log({videos})
        console.log({videoDetails})
    } catch (error) {
        console.log({error})
    }
}

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log(response)
})

// displayUser();
