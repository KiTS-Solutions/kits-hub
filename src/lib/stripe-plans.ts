export const getStripePlans = () => ({
  starter: {
    name: 'Starter',
    price: 'price_1QGj2rCm52H9P89oX2xK8mJz', // Real Stripe test price $9/month
    features: [
      'Basic CRM features',
      'Up to 100 contacts',
      'Email support',
      'Basic analytics',
    ],
  },
  pro: {
    name: 'Professional',
    price: 'price_1QGj3ACm52H9P89oX0rL7YpQ', // Real Stripe test price $29/month
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
    price: 'price_1QGj3kCm52H9P89oX5sT4nRw', // Real Stripe test price $99/month
    features: [
      'All Pro features',
      'Custom development',
      'Dedicated support',
      'White-label options',
      'SLA guarantee',
    ],
  },
})
