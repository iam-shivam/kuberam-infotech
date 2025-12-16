// server/src/controllers/contactController.ts
import { Request, Response } from 'express';
import { sendEmail, generateContactEmailHTML } from '../utils/emailService';

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, message, company } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
    }

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      throw new Error('Admin email not configured');
    }

    await sendEmail(
      adminEmail,
      `New Contact Form Submission from ${name}`,
      generateContactEmailHTML({ name, email, message, company })
    );

    // Send confirmation email to user
    const userConfirmationHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0a1929, #112240); padding: 30px; text-align: center; }
          .logo { color: #FFD700; font-size: 28px; font-weight: bold; }
          .content { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .footer { margin-top: 30px; text-align: center; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">KUBERAM Infotech</div>
          </div>
          <div class="content">
            <h2>Thank You for Contacting Us!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and our team will get back to you within 24 hours.</p>
            <p>Here's a summary of your submission:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
            </ul>
            <p>If you have any urgent inquiries, please call us at: [Your Phone Number]</p>
            <p>Best regards,<br>The KUBERAM Infotech Team</p>
          </div>
          <div class="footer">
            <p>© ${new Date().getFullYear()} KUBERAM Infotech. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await sendEmail(
      email,
      'Thank You for Contacting KUBERAM Infotech',
      userConfirmationHTML
    );

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the form',
    });
  }
};