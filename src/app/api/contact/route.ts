import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Please provide your name (at least 2 characters).';
    } else if (name.trim().length > 100) {
      errors.name = 'Name must be under 100 characters.';
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!subject || subject.trim().length < 3) {
      errors.subject = 'Please provide a subject line (at least 3 characters).';
    } else if (subject.trim().length > 150) {
      errors.subject = 'Subject must be under 150 characters.';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Please provide a detailed message (at least 10 characters).';
    } else if (message.trim().length > 3000) {
      errors.message = 'Message must be under 3000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please check the inputs.',
          details: errors
        },
        { status: 400 }
      );
    }

    // Server-side processing
    // If external service (e.g. RESEND_API_KEY or FORMSPREE_ENDPOINT) is configured in .env, dispatch it here securely
    const sanitizedSubmission = {
      name: name?.trim(),
      email: email?.trim().toLowerCase(),
      subject: subject?.trim(),
      message: message?.trim(),
      timestamp: new Date().toISOString()
    };

    console.log('[Portfolio Contact Submission Received]:', sanitizedSubmission);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received! Dhyanesh will get back to you soon.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your request. Please try again later.'
      },
      { status: 500 }
    );
  }
}
