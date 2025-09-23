import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Basic validation
    const { firstName, lastName, email, company, employees, message } = body
    
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send to your CRM (HubSpot, Salesforce, etc.)
    // 2. Send to email service (SendGrid, Mailgun, etc.)
    // 3. Store in database
    // 4. Send notification emails
    
    // For now, we'll just log the submission
    console.log('Form submission:', {
      firstName,
      lastName,
      email,
      company,
      employees,
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // In production, you might want to integrate with:
    // - Tally Forms: https://tally.so/
    // - Formspree: https://formspree.io/
    // - Netlify Forms
    // - Your own email service

    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission. We will get back to you within 24 hours.',
    })

  } catch (error) {
    console.error('Form submission error:', error)
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}