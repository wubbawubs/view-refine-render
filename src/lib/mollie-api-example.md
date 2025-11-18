# Mollie API Integration Guide

This document shows how to implement the backend API endpoint that the frontend calls.

## Frontend Implementation
The checkout pages call: `POST /api/create-mollie-payment`

### Request Body:
```json
{
  "amount": "99.00",
  "description": "KlikKlaar Basis - Maandelijks opzegbaar",
  "planType": "basis", // or "pro"
  "billingPeriod": "monthly", // "quarterly", or "biannual"
  "price": 99
}
```

### Expected Response:
```json
{
  "paymentUrl": "https://www.mollie.com/payscreen/select-method/7UhSN1zuXS"
}
```

## Backend Implementation Example (Node.js/Express)

```javascript
const { createMollieClient } = require('@mollie/api-client');

const mollieClient = createMollieClient({ 
  apiKey: process.env.MOLLIE_API_KEY // Your test/live key
});

app.post('/api/create-mollie-payment', async (req, res) => {
  try {
    const { amount, description, planType, billingPeriod, price } = req.body;
    
    const payment = await mollieClient.payments.create({
      amount: {
        currency: 'EUR',
        value: amount, // e.g., '99.00'
      },
      description: description,
      redirectUrl: `${req.headers.origin}/payment-success`,
      webhookUrl: `${req.headers.origin}/api/mollie-webhook`,
      metadata: {
        planType,
        billingPeriod,
        price: price.toString()
      },
    });

    res.json({
      paymentUrl: payment.getCheckoutUrl()
    });
  } catch (error) {
    console.error('Mollie payment creation failed:', error);
    res.status(500).json({ error: 'Payment creation failed' });
  }
});
```

## Webhook Handler Example

```javascript
app.post('/api/mollie-webhook', async (req, res) => {
  try {
    const paymentId = req.body.id;
    const payment = await mollieClient.payments.get(paymentId);
    
    if (payment.isPaid()) {
      // Process successful payment
      console.log(`Payment ${paymentId} is paid!`);
      // Update your database, send confirmation email, etc.
    } else if (payment.isCanceled()) {
      // Handle cancelled payment
      console.log(`Payment ${paymentId} was cancelled`);
    }
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).send('Error');
  }
});
```

## Frontend Routes
- Success: `/payment-success`
- Cancelled: `/payment-cancelled`

The frontend is now ready to work with your backend Mollie integration!