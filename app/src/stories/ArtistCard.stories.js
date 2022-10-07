import ArtistCard from "../components/ArtistCard/ArtistCard"

export default {
    title:'Artist Card',
    component: ArtistCard
   
}

const Template = args => <ArtistCard {...args}/>
export const Dark = Template.bind({})
Dark.args = {
    border:'3px solid #502f69',
    shadow:'0 0  10px 1px #502f69',
    image:"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
    name:'Daft Punk',
   
}
export const Light = Template.bind({})
Light.args = {
    border:'3px solid #a7e25f',
    shadow:'0 0  10px 1px #a7e25f',
    image:"https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
    name:'Daft Punk',

}