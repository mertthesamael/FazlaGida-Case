import DarkMode from "../components/DarkMode/DarkMode"
import moon from "../assets/moon-svgrepo-com.svg"
import sun from "../assets/sun-svgrepo-com.svg"
export default {
    title:'Theme Button',
    component: DarkMode
}
const Template = args => <DarkMode {...args}/>
export const Dark = Template.bind({})
Dark.args = {
 border:"5px solid #502f69",
 img:`url(${moon})`,
 shadow: '0 0 10px 1px #502f69'
}

export const Light = Template.bind({})
Light.args = {
    border:"5px solid #a7e25f",
    img:`url(${sun})`,
    shadow: '0 0 10px 1px #a7e25f'
}