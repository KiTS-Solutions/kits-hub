import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
})

export const getStripePlans = () => ({
  starter: {
    name: 'Starter',
    price: 'price_1234567890',
    features: [
      'Basic CRM features',
      'Up to 100 contacts',
      'Email support',
      'Basic analytics',
    ],
  },
  pro: {
    name: 'Professional',
    price: 'price_1234567891',
    features: [
      'Advanced CRM features',
      'Unlimited contacts',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    price: 'price_1234567892',
    features: [
      'All Pro features',
      'Custom development',
      'Dedicated support',
      'White-label options',
      'SLA guarantee',
    ],
  },
})
