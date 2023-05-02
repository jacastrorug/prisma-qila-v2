import { NextApiRequest, NextApiResponse } from "next";
import emailjs from '@emailjs/nodejs';

emailjs.init({
    publicKey: 'CgktGXHkb4Rwd-A90',
    privateKey: process.env.PRIVATE_KEY
});

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(403)
            .setHeader("Content-Type", "application/json")
            .json({ status: false, message: 'This endpoint allow just post requests' });
    }

    const params = { ...req.body };

    try {
        const request = await emailjs.send('service_z1b9lnb', 'template_2xfnhed', params);

        console.log(request);
        res.status(200)
            .setHeader("Content-Type", "application/json")
            .json({ status: true, message: 'Message sent' });
    } catch (e) {
        console.log(e);
        res.status(500)
            .setHeader("Content-Type", "application/json")
            .json({ status: false, message: 'Error sending the message' });
    }
};

export default sendEmail;