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
                const value = item.id === 'eventDate' ? new Date(item.value).toLocaleDateString() : item.value;
                return { key: item.name, value };
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
                    <FormField className={`${styles.formGroup} ${styles.phone}`}>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="Phone" required/>
                    </FormField>
                    <FormField className={`${styles.formGroup} ${styles.address}`}>
                        <label htmlFor="address">Residential Address</label>
                        <input id="address" name="Residential Address" required/>
                    </FormField>
                    <FormField className={`${styles.formGroup} ${styles.date}`}>
                        <label htmlFor="eventDate">Event Date</label>
                        <input type="date" id="eventDate" name="Event Date" required/>
                    </FormField>
                    <FormField className={`${styles.formGroup} ${styles.amount}`}>
                        <label htmlFor="eventDate">Amount of Passengers</label>
                        <input type="number" id="passengers" name="Amount of Passengers" required/>
                    </FormField>
                    <FormField className={`${styles.formGroup} ${styles.type}`}>
                        <label htmlFor="eventType">Is this a</label>
                        <select id="eventType" name="Event Type" required
                                onChange={(e) => setEventType(e.target.value)}>
                            <option value="OneWay">One way</option>
                            <option value="Return">Return</option>
                            <option value="DriveAround">Drive around</option>
                            <option value="Other">Other</option>
                        </select>
                    </FormField>
                    {eventType === 'DriveAround' && (
                        <>
                            <FormField
                                className={`${styles.formGroup} ${styles.loc1}`}>
                                <label htmlFor="loc1">First Departure Location</label>
                                <input id="loc1" name="First Departure Location" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc1Time}`}>
                                <label htmlFor="loc1Time">First Departure Time</label>
                                <input id="loc1Time" name="First Departure Time" type="time" step="900" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc3}`}>
                                <label htmlFor="loc4">Final Arrival Location</label>
                                <input id="loc4" name="Final Arrival Location" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc3Time}`}>
                                <label htmlFor="loc5">Final Arrival Time</label>
                                <input id="loc5" name="Final Arrival Time" type="time" step="900" required />
                            </FormField>
                        </>
                    )}
                    {eventType === 'OneWay' && (
                        <>
                            <FormField
                                className={`${styles.formGroup} ${styles.loc1}`}>
                                <label htmlFor="loc1">First Departure Location</label>
                                <input id="loc1" name="First Departure Location" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc1Time}`}>
                                <label htmlFor="loc1Time">First Departure Time</label>
                                <input id="loc1Time" name="First Departure Time" type="time" step="900" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc2}`}>
                                <label htmlFor="loc2">First Arrival Location</label>
                                <input id="loc2" name="First Arrival Location" required/>
                            </FormField>
                        </>
                    )}
                    {(eventType === 'Return' || eventType === 'Other') && (
                        <>
                            <FormField
                                className={`${styles.formGroup} ${styles.loc1}`}>
                                <label htmlFor="loc1">First Departure Location</label>
                                <input id="loc1" name="First Departure Location" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc1Time}`}>
                                <label htmlFor="loc1Time">First Departure Time</label>
                                <input id="loc1Time" name="First Departure Time" type="time" step="900" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc2}`}>
                                <label htmlFor="loc2">First Arrival Location</label>
                                <input id="loc2" name="First Arrival Location" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc3}`}>
                                <label htmlFor="loc3">Second Departure Location</label>
                                <input id="loc3" name="Second Departure Location" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc3Time}`}>
                                <label htmlFor="loc3Time">Second Departure Time</label>
                                <input id="loc3Time" name="Second Departure Time" type="time" step="900" required/>
                            </FormField>
                            <FormField className={`${styles.formGroup} ${styles.loc4}`}>
                                <label htmlFor="loc4">Second Arrival Location</label>
                                <input id="loc4" name="Second Arrival Location" required/>
                            </FormField>
                        </>
                    )}

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
