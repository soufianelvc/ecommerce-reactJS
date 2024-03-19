import React from 'react'
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../Category/CategoryCard';

import isloadingg from '../../images/isloading.gif'



const CategoryContainer = ({categorys ,isloading,  tError, colors}) => {

  return (
    <Container>
    <div className='admin-content-text mt-2'>allCategory</div>
    <Row className='my-2 d-flex justify-content-between'>
                        {
                    isloading ? (
                        <img src={isloadingg} alt="isloadinggg" className='mx-auto w-25 h-25' />
                    ):( 
                        tError ? (<p>this part in work </p>):(
                            <>
                            {categorys.data.slice(0,6).map((item, i )=>{
                                return <CategoryCard title={item.name} img={item.image} background={colors[ i ]} key={ i }/>
                            })}
                        </>
                        )
                     )
                }
    </Row>
</Container>
  )
}

export default CategoryContainer ; 
