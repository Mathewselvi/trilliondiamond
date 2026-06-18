import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trilliondiamondtrilliondiamond@gmail.com',
            pass: 'xxebsvikprylejvm'
        }
    });

    try {
        await transporter.sendMail({
            from: '"Trillion Diamond Website" <trilliondiamondtrilliondiamond@gmail.com>',
            to: 'trilliondiamondtrilliondiamond@gmail.com',
            replyTo: email,
            subject: `New Inquiry: ${subject || 'General'} from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
            html: `
                <h3>New Inquiry from Trillion Diamond Website</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.toString() });
    }
}
