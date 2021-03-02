import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton= ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_51IQNKjHvE4IdQwmAwz5xPHiCMKMGm1oNcOLWIfoaPkw130ekDQoVXsGYfmG9aFXBZpztqcNb0EP3jAjPSW91uuza00WBnBHEu7'
  
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
    
  return (
    <StripeCheckout
      label='Pay Now'
      name='crwn-clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUZ.svg'
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
