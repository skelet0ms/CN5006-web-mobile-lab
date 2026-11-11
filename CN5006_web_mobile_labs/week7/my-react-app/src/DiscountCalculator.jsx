const Discount = ({ productName, price }) => {

    const calculateDiscount = () => {
         const discountRate = document.getElementById("discountRate").value;

         const priceWithDiscount = Number(price) - (Number(price) * Number(discountRate) / 100);

         document.getElementById("discountMessage").innerHTML =
         `<b style="color:yellow">Price including Discount: £${priceWithDiscount}</b>`;
    };

    return (
        <div>
            <h2>{productName}</h2>

            <p>Price: £{price}</p>

            <label>Enter Discount rate (%): </label>

            <input type="number" id="discountRate"/>
            <br/><br/>

            <button onClick={calculateDiscount}>
                Calculate discount
            </button>

            <p id="discountMessage"></p>
        </div>
    );
};

export default Discount;