import axios from "axios"
import { useState } from "react"

const useHttp = (url) => {
const [data, setData] = useState([])
const [artists, setArtists] = useState([])
const [topAlbums, setTopAlbums] = useState([])
const [topTracks, setTopTracks] = useState([])
const [artist, setArtist] = useState([])
const [loading, setLoading] = useState(true)
const fetchData = async (page) => {
    setLoading(true)
    const data = await axios(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&page=${page}&limit=10&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)
    setData(data.data.artists)
    setArtists(data.data.artists.artist)
    setLoading(false)

}

const fetchArtist = async (artist) => {
    setLoading(true)

    const data = await axios(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)
    setTopAlbums(data.data.topalbums.album)
    const data2 = await axios(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)
    const data3 = await axios(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=09552f93366111d15ebd8bef72e1330b&format=json`)
    setData(data.data.artists)
    setTopTracks(data2.data.toptracks?.track)
    setArtist(data3.data.artist)
    setLoading(false)
}

return{
    data,
    fetchData,
    artists,
    fetchArtist,
    topAlbums,
    topTracks,
    artist,
    loading
}
}


export default useHttp;    