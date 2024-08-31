import './Product.css'

const Product = () => {
    return (
        <div className='product'>
            <h2>PRODUCT CATEGORY</h2>
           <div className="product__container">

                <div className="photo__container">
                    <div className='first'>
                        <img className="img1" width={"620px"} height={"400px"} src="../../../public/shop/category/category-1.jpg" alt="" />
                        <img className="img2" width={"620px"} height={"400px"} src="../../../public/shop/category/category-2.jpg" alt="" />
                    </div>
                </div>

                <div className='two'>
                    <img width={"630px"} height={"825px"} className='img3' src="../../../public/shop/category/category-3.jpg" alt="" />
                </div>

           </div>

        </div>
    );
};

export default Product;