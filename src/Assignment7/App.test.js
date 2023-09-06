import App from "./App";
import { mount } from "enzyme";

describe('Rendering App',()=>{
    it('testing App',()=>{
        let wrapper=mount(<App/>)
        expect(wrapper).toMatchSnapshot();
    })
})