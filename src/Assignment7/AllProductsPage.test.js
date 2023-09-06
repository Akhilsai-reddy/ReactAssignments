import AllProductsPAge from './AllProductsPage';
import { shallow } from 'enzyme';

describe('Allproducts page',()=>{
    
    it('renderding allproducts page',()=>{
        let wrapper=shallow(<AllProductsPAge/>)
       expect(wrapper.find("h1").text()).toBe('Products List')
      
    })
})