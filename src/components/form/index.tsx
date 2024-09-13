"use client";
import React, {useEffect, useState} from "react";
import styles from "./form.module.css";
import {Button, Form, FormField} from "semantic-ui-react";
import * as emailJs from 'emailjs-com';
import * as _ from 'lodash';

const form = () => {
    const [eventType, setEventType] = useState('OneWay');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault();

            const messageStuff = [...e.target].map((item) => {
                return { value: item.value, key: item.name };
            });

            const message = messageStuff.reduce((acc, cur) => {
                if (!cur.key || !cur.value) return acc;
                return `${acc}\n${_.startCase(cur.key)}: ${cur.value}`;
            }, '');

            const groupedStuff = _.keyBy(messageStuff, 'key');

            const {text} = await emailJs.send(
                "service_d3lnilw",
                "template_l6yrbv3",
                {
                    from_name: groupedStuff['Full Name'].value,
                    reply_to: groupedStuff['Email'].value,
                    to_name: 'Jamie',
                    message
                },
                "user_zR874qWdWi7VJoA8hbPfi"
            );

            setSubmitted(text === 'OK');
        } catch (e) {
            setSubmitted(false);
        }
    };

    useEffect(() => {
        console.log(eventType)
    }, [eventType]);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Form onSubmit={handleSubmit} className={styles.form}>
                    <FormField className={`${styles.formGroup} ${styles.firstName}`}>
                        <label htmlFor="firstName">Full Name</label>
                        <input type="text" id="firstName" name="Full Name" required/>
                    </FormField>
                    <FormField className={`${styles.formGroup} ${styles.email}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="Email" required/>
                    </FormField>
                    <FormField className={`${styles.formGroup} ${styles.message}`}>
                        <label htmlFor="message">Additional Details For Your Trip</label>
                        <textarea id="message" name="Additional Details For Your Trip" rows={4}></textarea>
                    </FormField>
                    <Button disabled={submitted} type="submit" className={styles.submitButton}>
                        {submitted ? 'Submitted' : 'Submit 🍭'}
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default form;
