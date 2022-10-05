import MainCard from "../components/MainCard/MainCard"

export default {
    title:'Main Card',
    component: MainCard
}
const Template = args => <MainCard {...args}/>
export const Dark = Template.bind({})
Dark.args = {
    backgroundColor:'#382447',
    artist:'Daft Punk',
    title: 'Artist',
    color: 'white',
    playcount:99999999,
    listeners:8888888
}

export const Light = Template.bind({})
Light.args = {
    backgroundColor:'#a7e25f',
    artist:'Daft Punk',
    title: 'Artist',
    color: 'white'
}