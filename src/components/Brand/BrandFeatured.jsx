import { Container, Row } from "react-bootstrap"
import SubTitle from "../Uitily/SubTitle"
import BrandCard from "./BrandCard";
// import brand1 from "../../images/brand1.png";
import HomeCategoryHook from "../../hook/Brand/HommeBrandHook";
import isloadingg from '../../images/isloading.gif'
const BrandFeatured = ({ title, btntitle }) => {
    const [BrandsData,isloading,tError]= HomeCategoryHook();
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle} pathText="/allBrand"/>
            <Row className='my-1 d-flex justify-content-between'>
                {
                    isloading ? (
                        <img src={isloadingg} alt="isloadinggg" className='mx-auto w-25 h-25' />
                    ):( 
                        tError ? (<p>this part in work </p>):(
                            <>
                            {BrandsData.data.slice(0,6).map((item, i )=>{
                                return <BrandCard key={ i } img={item.image}/>

                            })}
                        </>
                        )
                     )
                }
            </Row>
        </Container>
    )
}

export default BrandFeatured ; 