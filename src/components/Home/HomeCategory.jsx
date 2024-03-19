import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Uitily/SubTitle';
import CategoryCard from '../Category/CategoryCard';
import isloadingg from '../../images/isloading.gif';
import HomeCategoryHook from '../../hook/category/HomeCategoryHook';

const HomeCategory = () => {

        // get argument from hook home Category 
        const [categoryData,isloading,tError,colors] = HomeCategoryHook(); 

    return (
        <Container>
            <SubTitle title="Categories" btntitle="more.." pathText='/allCategory' />
            <Row className='my-2 d-flex justify-content-between'>
                {
                    isloading ? (
                        <img src={isloadingg} alt="isloadinggg" className='mx-auto w-25 h-25' />
                    ):( 
                        tError ? (<p>this part in work </p>):(
                            <>
                            {categoryData.data.slice(0,6).map((item, i )=>{
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

export default HomeCategory; 
