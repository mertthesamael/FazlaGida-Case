import Loading from "../components/Loading/Loading"

export default {
    title:'Loading',
    component: Loading
}

const Template = args => <><Loading {...args}/><Loading/></>
export const Dark = Template.bind({})
Dark.args = {
    dropShadow:'drop-shadow(0 0 10px #11f86e)'
}

export const Light = Template.bind({})
Light.args = {
    dropShadow:'drop-shadow(0 0 10px #a83cfa)'
}