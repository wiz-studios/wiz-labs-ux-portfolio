import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    // Log environment check
    console.log("SMTP_USER exists:", !!process.env.SMTP_USER)
    console.log("SMTP_HOST:", process.env.SMTP_HOST)
    
    const { name, email, company, budget, timeline, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Verify required environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP credentials in environment variables")
      return NextResponse.json(
        { error: "Email service not properly configured" },
        { status: 500 }
      )
    }

    // Create transporter using the provided SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify SMTP connection
    try {
      await transporter.verify()
    } catch (error) {
      console.error("SMTP Verification failed:", error)
      return NextResponse.json(
        { error: "Failed to connect to email service" },
        { status: 500 }
      )
    }

    // Email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission - Wiz Labs</title>
  <style>
    body { font-family: 'Courier New', monospace; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #00d4ff, #9333ea); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #00d4ff; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #00d4ff; }
    .value { margin-top: 5px; padding: 8px; background: white; border-radius: 4px; border: 1px solid #e0e0e0; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🚀 New Project Inquiry - Wiz Labs</h1>
    <p>A new contact form submission has been received</p>
  </div>
  
  <div class="content">
    <div class="field">
      <div class="label">const clientName =</div>
      <div class="value">"${name}"</div>
    </div>
    
    <div class="field">
      <div class="label">const clientEmail =</div>
      <div class="value">"${email}"</div>
    </div>
    
    ${
      company
        ? `
    <div class="field">
      <div class="label">const company =</div>
      <div class="value">"${company}"</div>
    </div>
    `
        : ""
    }
    
    ${
      budget
        ? `
    <div class="field">
      <div class="label">const budget =</div>
      <div class="value">"${budget}"</div>
    </div>
    `
        : ""
    }
    
    ${
      timeline
        ? `
    <div class="field">
      <div class="label">const timeline =</div>
      <div class="value">"${timeline}"</div>
    </div>
    `
        : ""
    }
    
    <div class="field">
      <div class="label">const projectDetails =</div>
      <div class="value">"${message}"</div>
    </div>
  </div>
  
  <div class="footer">
    <p>This email was sent from the Wiz Labs UX portfolio contact form</p>
    <p>Respond directly to this email to contact the client</p>
  </div>
</body>
</html>
    `

    // Send email
    await transporter.sendMail({
      from: `"Wiz Labs Portfolio" <${process.env.SMTP_USER || process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "wiz.dev.studios@gmail.com",
      replyTo: email,
      subject: `🚀 New Project Inquiry from ${name} - Wiz Labs`,
      html: emailContent,
      text: `
New Contact Form Submission - Wiz Labs

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${budget ? `Budget: ${budget}` : ""}
${timeline ? `Timeline: ${timeline}` : ""}

Message:
${message}

---
This email was sent from the Wiz Labs portfolio contact form.
Reply directly to this email to contact the client.
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
