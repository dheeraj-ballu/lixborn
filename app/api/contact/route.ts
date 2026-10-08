import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the incoming Get Quote payload for server logs
    console.log('[API /api/contact] Received Get Quote Payload:', body);

    // Validate required fields: Full Name*, Email*, Country*, Message*
    if (!body.fullName || !body.email || !body.country || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: Full Name, Email, Country, and Message are required.' },
        { status: 400 }
      );
    }

    // Success response placeholder
    return NextResponse.json(
      {
        success: true,
        message: 'Your quote request has been received. Our trade desk will get in touch shortly.',
        data: {
          submittedAt: new Date().toISOString(),
          referenceId: `LA-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API /api/contact] Error processing quote request:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing quote request.' },
      { status: 500 }
    );
  }
}
