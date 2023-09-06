import ProductList from "./ProductList";
import { mount} from "enzyme";

describe('rendering ProductsList',()=>{
    let wrapper
    let props

    beforeEach(()=>{
        props={
            Products:[{
                "ID": 1,
                "Price": "$200",
                "Product_Name": "MOTO",
                "Quantity": 3
            },
            {
                "ID": 2,
                "Price": "$290",
                "Product_Name": "REDMI",
                "Quantity": 4
            },
            {
                "ID": 3,
                "Price": "$260",
                "Product_Name": "SONY",
                "Quantity": 6
            }
        ]
        }

        wrapper=mount(<ProductList Products={props.Products}/>)
    })
    it('render the length of the th',()=>{
        expect(wrapper.find('th').length).toEqual(4)
    })

    it('renders 1st th as ID',()=>{
        expect(wrapper.find('th').at(0).text()).toBe("ID")
    })

    it('renders 3rd th as Quantity',()=>{
        expect(wrapper.find('th').at(2).text()).toEqual("QUANTITY")
    })

    it('rendering ProductList',()=>{
        expect(wrapper).toMatchSnapshot();
    })

})