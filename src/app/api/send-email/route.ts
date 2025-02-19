import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export interface Data {
    firstname: string;
    lastname?: string;
    email: string;
    phonenumber?: string;
    message?: string;
    location?: string;
    budget?: string;
    propertyType?: string;
    lookingFor?: string;
    requirements?: string;
    address?: string;
    method?: string;
    subject?: string;
    service?: string[];
}


export async function POST(request: NextRequest) {
    const { firstname,
        lastname,
        email,
        phonenumber,
        message,
        location,
        budget,
        propertyType,
        lookingFor,
        requirements,
        address,
        method,
        subject,
        service}= await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
    
    const user: Mail.Options = {
        from: email,
        to: email,
        subject: `Inquiry Received – ViZack Enterprises and Constructions`,
        replyTo: "info@vizackenterprises.com",
        html: `
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        p {
            color: #555;
            line-height: 1.6;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
            text-align: center;
        }
        .details {
            background: #f9f9f9;
            padding: 10px;
            border-left: 4px solid #007bff;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Thank You for Contacting Us!</h2>
        <p>Dear <strong>${firstname} ${lastname}</strong>,</p>
        <p>Thank you for reaching out to <b>ViZack Enterprises and Constructions</b>. We have successfully received your inquiry, and our team will review your request shortly.</p>
        <p>If your request is urgent, feel free to call us at <strong><a style="color: #007bff; text-decoration: none" href="tel:+91-7771877195">+91-7771877195</a></strong>.</p>
        <p>We appreciate your interest in <strong>ViZack Enterprises and Constructions</strong> and look forward to assisting you.</p>

        <div class="footer">
            <p>Best regards,<br><strong>ViZack Enterprises and Constructions</strong><br><a style="color: #007bff; text-decoration: none" href="https://vizackenterprises.com" target="_blank" rel="noopener noreferrer">www.vizackenterprises.com</a> | <a style="color: #007bff; text-decoration: none" href="mailto:info@vizackenterprises.com">info@vizackenterprises.com</a> | <a style="color: #007bff; text-decoration: none" href="tel:+91-7771877195">+91-7771877195</a></p>
        </div>
    </div>
</body>
</html>

        `,
        text: `=========================================
THANK YOU FOR CONTACTING US!    
=========================================

Dear ${firstname} ${lastname},

Thank you for reaching out to ViZack Enterprises and Constructions. We have successfully received your inquiry, and our team will review your request shortly.

**If your request is urgent, feel free to call us at: +91-7771877195**

We truly appreciate your interest in 
**ViZack Enterprises and Constructions** 
and look forward to assisting you.

-----------------------------------------
Best Regards,  
ViZack Enterprises and Constructions  
🌐 https://vizackenterprises.com
📧 info@vizackenterprises.com
📞 +91-7771877195
========================================= 
`,
    };

    const admin: Mail.Options = {
        from: email,
        to: process.env.EMAIL,
        subject: `New Contact Form Submission: ${firstname} ${lastname}`,
        replyTo: email,
        html: `
    <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Contact Form Submission</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }
    .container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
        color: #333;
    }
    p {
        color: #555;
        line-height: 1.6;
    }
    .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #777;
        text-align: center;
    }
    .details {
        background: #f9f9f9;
        padding: 10px;
        border-left: 4px solid #ff5722;
        margin-top: 10px;
    }
    .span {
    background: #ff5722;
    color: white;
    width: auto;
    text-wrap: nowrap;
    display: inline-block;
    margin:3px 5px;
    border-radius: 2rem;
    padding: 0 1rem;
    text-decoration: none;
}
    .p {
    display: inline-block;
}
</style>
</head>
<body>
<div class="container">
    <h2>New Form Submission</h2>
    <p>Hello ViZack Team,</p>
    <p>A new inquiry has been submitted through the contact form on your website.</p>

    <div class="details">
        <p><strong>Name:</strong> ${firstname} ${lastname} </p>
            ${phonenumber !== undefined ?
                `<p><strong>Phone:</strong> ${phonenumber}</p>` : ""
            }
            <p><strong>Email:</strong> ${email}</p>
            ${subject !== undefined ?
                `<p><strong>Subject:</strong> ${subject}</p>` : ""
            }
            ${message !== undefined ?
                `<p><strong>Message:</strong> ${message}</p>` : ""
            }
            ${location !== undefined ?
                `<p><strong>Location:</strong> ${location}</p>` : ""
            }
            ${budget !== undefined ?
                `<p><strong>Budget:</strong> ${budget}</p>` : ""
            }
            ${propertyType !== undefined ?
                `<p><strong>Property Type:</strong> ${propertyType}</p>` : ""
            }
            ${lookingFor !== undefined ?
                `<p><strong>Looking For:</strong> ${lookingFor}</p>` : ""
            }
            ${requirements !== undefined ?
                `<p><strong>Requirements:</strong> ${requirements}</p>` : ""
            }
            ${address !== undefined ?
                `<p><strong>Address:</strong> ${address}</p>` : ""
            }
            ${method !== undefined ?
                `<p><strong>Method:</strong> ${method}</p>` : ""
            }
            ${service !== undefined ? (service as string[]).length > 0 ?
            `<p><strong>Service:&nbsp;</strong>
            <div class="p">
    ${service?.map((serv: string) => `<span class="span">${serv}</span>`).join("")}
</div </p>` : ""
                : ""
            }
    </div>

    <p>📩 Please respond to the user as soon as possible.</p>

    <div class="footer">
        <p>Best Regards,<br><strong>ViZack Enterprises and Constructions Website</strong></p>
    </div>
</div>
</body>
</html>
`,
        text: `=========================================
NEW CONTACT FORM SUBMISSION    
=========================================

Hello ViZack Team,

A new inquiry has been submitted through the contact form on your website.

-----------------------------------------
USER DETAILS:
-----------------------------------------
    Name    : ${firstname} ${lastname}
${phonenumber !== undefined ?
                `Phone   : ${phonenumber}` : ""
            }
Email   : ${email}
${subject !== undefined ?
                `Subject : ${subject}` : ""
            }
Subject : ${subject}

${location !== undefined ?
                `Location : ${location}` : ""
            }

${budget !== undefined ?
                `Budget : ${budget}` : ""
            }
            
${propertyType !== undefined ?
                `Property Type : ${propertyType}` : ""
            }
            
${lookingFor !== undefined ?
                `Looking For : ${lookingFor}` : ""
            }
            
${requirements !== undefined ?
                `Requirements : ${requirements}` : ""
            }
            
${address !== undefined ?
                `Address : ${address}` : ""
            }
            
${method !== undefined ?
                `Method : ${method}` : ""
            }
            
${service !== undefined && (service as string[]).length > 0 ?
                `Service : ${service?.map((serv: string) => (`${serv}`))}` : ""
            }
${message !== undefined ?
                `Message :
-----------------------------------------
${message}
-----------------------------------------
`: ""}


📩 Please respond to the user as soon as possible.

=========================================
Best Regards,  
ViZack Enterprises and Constructions Website  
=========================================

`,
    };
    
    async function sendEmail(mailOptions: Mail.Options) {
        return new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info.response);
                }
            });
        });
    }
    try {
        await Promise.all([sendEmail(admin), sendEmail(user)]);
        return NextResponse.json({ message: "Emails sent successfully!" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
