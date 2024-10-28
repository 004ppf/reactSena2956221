const getList = async () =>{
    try {
        const characters = await new Promise ((resolve, reject)=>{
            fetch('https://rickandmortyapi.com/api/character')
            .then(response => resolve(response.json()))
            .catch(error => reject(error.mesagge))
        })
        const episode = await new Promise ((resolve, reject)=>{
            fetch('https://rickandmortyapi.com/api/episode')
            .then(response => resolve(response.json()))
            .catch(error => reject(error.mesagge))
        })

        console.log('los personajes son:', characters)
        console.log('los episodios son:', episode)

    } catch (error) {
        console.error('error, pa', error.mesagge)
    }
}
getList()