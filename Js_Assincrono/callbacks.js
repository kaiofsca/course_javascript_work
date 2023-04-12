{/* ------ JS Assíncrono ------ */}

// Callbacks
// Ex: Requisição para API para logar o usuário. SETTIMEOUT simula essa chamada (todo código dentro dele vai ser executado dps de 1 segundo e meio)
const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() =>{
        const error = false

        if (error) {
            return onError(new Error('error in login!'))
        }

        console.log('user logged!')
        onSuccess({email})
    }, 1500)
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback({title: 'video title'})
    }, 2500)
}

const user = loginUser('kaio@gmail.com', '123456', (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({videos})
        getVideosDetails(videos[0], (videoDetails) => {
            console.log({videoDetails})
        })
    })
}, (error) => {
    console.log({error})
})
// console.log({user})