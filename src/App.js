import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import NavBarr from './components/Uitily/NavBarLogin';
import Footer from './components/Uitily/Footer' ; 
import LoginPage from "./page/authentication/Loginpage";
import Register from "./page/authentication/RegisterPage";
import AllCategoryPage from "./page/category/AllCategoryPage";
import AllBrand from "./page/Brand/AllBrandPage";
import ShopProductsPage from "./page/Products/ShopProductsPage";
import ProductDetalaisPage from "./page/Products/ProductDetalaisPage";
import CartPage from "./page/Cart/CartPage";
import ChooosePayMethodePage from "./page/checkout/ChooosePayMethodePage";
import AdminAllProductsPage from "./page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./page/Admin/AdminOrderDetalisPage ";
import AdminAddCategoryPage from "./page/Admin/AdminAddCategoryPage";
import AdminAddBrandPage from "./page/Admin/AdminAddBrandPage";
import AdminAddSubCategoryPage from "./page/Admin/AdminAddSubCategoryPage ";
import AdminAddProductsPage from "./page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./page/User/UserAllOrderPage";
import UserFavoriteProductsPage from "./page/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./page/User/UserAllAddresPage";
import UserAddAddressPage from "./page/User/UserAddAddressPage";
import UserEditAddressPage from "./page/User/UserEditAddressPage";
import UserProfilePage from "./page/User/UserProfilePage";


function App() {


  return (
    <div className="font">


      <BrowserRouter> 
      <NavBarr/>
          <Routes>   
              <Route index element={ <HomePage/>}/>
              <Route path="/login" element={ <LoginPage/>}/>
              <Route path="/register" element={ <Register/>}/>
              <Route path="/allCategory" element={ <AllCategoryPage/>}/>
              <Route path="/allBrand" element={ <AllBrand/>}/>
              <Route path="/products" element={ <ShopProductsPage/>}/>
              <Route path="/products/:id" element={ <ProductDetalaisPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/order/paymethoud" element={<ChooosePayMethodePage/>}/>
              <Route path="/admin/allproducts" element={<AdminAllProductsPage/>}/>
              <Route path="/admin/allorders" element={<AdminAllOrdersPage/>}/>
              <Route path="/admin/orders/23" element={<AdminOrderDetalisPage/>}/>
              <Route path="/admin/addbrand" element={<AdminAddBrandPage/>}/>
              <Route path="admin/addcategory" element={<AdminAddCategoryPage/>}/>
              <Route path="admin/addsubcategory" element={<AdminAddSubCategoryPage/>}/>
              <Route path="admin/addproduct" element={<AdminAddProductsPage/>}/>
              <Route path="user/allorders" element={<UserAllOrdersPage/>}/>
              <Route path="user/favoriteproducts" element={<UserFavoriteProductsPage/>}/>
              <Route path="user/addresses" element={<UserAllAddresPage/>}/>
              <Route path="/user/add-address" element={<UserAddAddressPage />} />
              
              <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
              <Route path="/user/profile" element={<UserProfilePage />} />



              
              

              


          </Routes>
      </BrowserRouter>

    <Footer/>
    </div>
  );
}
export default App;
