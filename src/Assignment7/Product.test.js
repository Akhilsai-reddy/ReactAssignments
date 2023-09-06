import Product from "./Product";
import { shallow } from "enzyme";

describe('Products page render correctly',()=>{
    let wrapper
    beforeEach(()=>{
       wrapper=shallow(<Product ID="1" Name="Redmi" Quantity="3" Price="2344"/>)
    })

    it('checking td length',()=>{
        let td=wrapper.find('td')
        expect(td.length).toEqual(4)
    })

    it('rendering 1st td',()=>{
      expect(wrapper.find('td').at(0).text()).toEqual("1")
    })

    it('rendering 3rd td',()=>{
        expect(wrapper.find('td').at(2).text()).toEqual("3")
      })
    
})
  