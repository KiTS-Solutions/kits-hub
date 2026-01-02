import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const { priceId, plan } = await request.json()

    if (!plan) {
      return NextResponse.json({ error: 'Plan is required' }, { status: 400 })
    }

    // Create a one-time payment session for testing
    const stripe = getStripe()
    
    // Define amounts in cents (USD)
    const amounts = {
      starter: 900,    // $9.00
      pro: 2900,       // $29.00
      enterprise: 9900 // $99.00
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', // One-time payment instead of subscription
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
              description: `One-time payment for ${plan} plan`,
            },
            unit_amount: amounts[plan as keyof typeof amounts] || 2900,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/billing?canceled=true`,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
