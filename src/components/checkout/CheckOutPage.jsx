import './CheckOutPage.css';

const CheckOutPage = () => {
    return (
        <div className='checkout__container'>
            
            <div className="checkout__left">
                <div className='checkout__first'>
                     <h6>BILLING DETAILS</h6>   
                     <div className="checkout__inputs">
                        <input type="text" placeholder='FULL NAME'/>
                        <input type="text" placeholder='ADDRESS'/>
                       <div className='checkout__input'>
                         <input type="text" placeholder="CITY"/>
                         <input type="text" placeholder="CITY"/>
                       </div> 
                        <input type="text" placeholder='COUNTER'/>
                     </div>
                </div>

                <div className='checkout__two'>
                      <h6>PAYMENT METHOD</h6>
                      <p>Credit Cart Details (Secure payment)</p>
                      <input type="text" placeholder='CARD NUMBER*---- ---- ---- ----'/> 
                      <input type="text" placeholder='YEAR (MM/YY)-MM/YY'/> 
                      <input type="text" placeholder='CARDCOD*  CHO'/>
                       <button>Submit</button>
                </div>
            </div>

            <div className="checkout__right">
                   <h6>ORDER SUMMERY</h6>
                   <div className='checkout__right1'>
                       <img width={"80px"} height={"110px"} src="../../../public/shop/cart/cart-1.jpg" alt="" />
                       <div className="checkout__right-text">
                        <p>Ambassador Here Age 1921</p>
                          <span className='right__num'>1*$249</span>
                         <span className='right__remove'>Remove</span>
                       </div>
                   </div>
                   <p className='right__p'>Have Discount? <span>Enter it here.</span></p>
                   <div className='right__text'>
                        <p>Subtotal</p>
                        <span>$150</span>
                   </div>
                   <div className='right__text right__line'>
                        <p>Shipping</p>
                        <span>Free</span>
                   </div>
                   <div className='rigth__total'>
                      <p>Total</p>
                      <span>$250</span>
                   </div>
                   <img width={"300px"} src="../../../public/shop/verified.png" alt="" />
            </div>

        </div>
    );
};

export default CheckOutPage;