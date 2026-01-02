'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import type { Stripe } from '@stripe/stripe-js'
import { Button } from '@/components/ui/button'
import { getStripePlans } from '@/lib/stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutButtonProps {
  priceId: string
  children?: React.ReactNode
  className?: string
}

export function CheckoutButton({ priceId, children, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      })

      const { sessionId, error } = await response.json()

      if (error) {
        console.error('Error creating checkout session:', error)
        return
      }

      const stripe = await stripePromise
      if (!stripe) {
        console.error('Stripe failed to load')
        return
      }

      const result = await (stripe as any).redirectToCheckout({
        sessionId,
      })
      
      if (result.error) {
        console.error('Error redirecting to checkout:', result.error)
      }
    } catch (error) {
      console.error('Error during checkout:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleCheckout} disabled={loading} className={className}>
      {loading ? 'Processing...' : children || 'Subscribe'}
    </Button>
  )
}

export function PricingCards() {
  const plans = getStripePlans()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {Object.entries(plans).map(([key, plan]) => (
        <div
          key={key}
          className={`rounded-lg border p-8 ${
            key === 'pro'
              ? 'border-blue-500 shadow-lg scale-105'
              : 'border-gray-200'
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold">
              {key === 'starter' && '$9'}
              {key === 'pro' && '$29'}
              {key === 'enterprise' && '$99'}
            </span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <CheckoutButton
            priceId={plan.price}
            className={`w-full ${
              key === 'pro'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-900 hover:bg-gray-800'
            }`}
          >
            Get Started
          </CheckoutButton>
        </div>
      ))}
    </div>
  )
}
