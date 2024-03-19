import { Container, Row } from "react-bootstrap"
import BrandCard from "./BrandCard";
// import brand1 from "../../images/brand1.png";

import isloadingg from '../../images/isloading.gif'

const BrandContainer = ({ brands, isloading ,tError}) => {

    return (
        <Container>
              <div className='admin-content-text mt-2'>allBrand</div>
            <Row className='my-1 d-flex justify-content-between'>
            {
                    isloading ? (
                        <img src={isloadingg} alt="isloadinggg" className='mx-auto w-25 h-25' />
                    ):( 
                        tError ? (<p>this part in work </p>):(
                            <>
                            {brands.data.slice(0,6).map((item, i )=>{
                                return  <BrandCard img={item.image} />
                            })}
                        </>
                        )
                     )
                }
               
            </Row>
        </Container>
    )
}

export default BrandContainer ; 