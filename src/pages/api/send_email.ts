import { NextApiRequest, NextApiResponse } from "next";
import emailjs from '@emailjs/nodejs';

emailjs.init({
    publicKey: 'UmKaAQ9Cah4KKB30y',
    privateKey: 'm2vBPKrQnaSvnySvefxk8'
});

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST') {
        res.status(403)
        .setHeader("Content-Type", "application/json")
        .json({status: false, message: 'This endpoint allow just post requests'});
    }

    const params = {...req.body};

    try {
        const request = await emailjs.send('service_yh4bx2k', 'template_9998i0f', params);

        console.log(request);
        res.status(200)
        .setHeader("Content-Type", "application/json")
        .json({ status: true, message: 'Message sent' });
    } catch(e) {
        console.log(e);
        res.status(500)
        .setHeader("Content-Type", "application/json")
        .json({status: false, message: 'Error sending the message'});
    }
};

export default sendEmail;