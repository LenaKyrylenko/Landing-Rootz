import {Input,Col, Row } from 'antd';

const Form = () => {
    return (
        <div className='Form'>
        <Row>
        
                <Col span={12}>
                    
                    col-8
                
                 <p className="Form__title">
        Get started today!
    </p>
    <p className="Form__text">
        Learn more about how you can save our planet's nature.
        From smart consumption to switching to renewable energy,
        each of us can do our part to save the planet.
        </p>
                </Col>
                <Col span={12}>
                    
                <div className="Login">
<p> Log in </p>
<form action=''>
        <Input size="large" placeholder="Name"  />
        <Input size="large" placeholder="Email"  />
        </form>
            </div>
        </Col>
        </Row>
        
        </div>
    )
}
  
          
export default Form