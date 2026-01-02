"use client"
import { faqData } from '@/data';
import React, { useState, useRef, useEffect } from 'react';
import frentlyAskQuestIllustration from '@/public/media/frequently-ask-question/faq.8116aa7d.svg';
import Image from 'next/image';

export default function FrequentlyAskQuest() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        if (openIndex === index) setOpenIndex(null);
        else setOpenIndex(index);
    };

    useEffect(() => {
        faqData.forEach((_, i) => {
            if (contentRefs.current[i]) {
                contentRefs.current[i].style.maxHeight =
                    openIndex === i ? `${contentRefs.current[i].scrollHeight}px` : "0px";
            }
        });
    }, [openIndex]);

    return (
        <div className="container max-w-screen-2xl mx-auto mt-10 font-siliguri text-gray-200 rounded-xl">
            <div className="flex flex-col md:flex-row gap-16">
                {/* Left Side */}
                <div className="md:w-[40%] flex flex-col items-center md:items-start justify-center">
                    <div className="mb-6">
                        {/* Illustration Placeholder */}
                        <div className="w-48 h-48 bg-sky-700 rounded-full flex items-center justify-center mb-6">
                            <Image src={frentlyAskQuestIllustration} alt="Frequently Asked Questions Illustration" width={192} height={192} />
                        </div>
                        <h2 className="text-3xl font-bold mt-16 text-white">সচরাচর জানতে চাওয়া</h2>
                        <h2 className="text-3xl text-blue-400 font-bold mb-5">প্রশ্নের উত্তর</h2>
                        <p className="text-gray-400 leading-relaxed">
                            আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিখে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেওয়ার অনুরোধ থাকলো।
                            তাইলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবে না এবং আপনার মূল্যবান সময় বেঁচে
                            যাবে।
                        </p>
                    </div>
                </div>

                {/* Right Side - FAQ Accordion */}
                <div className="md:w-[60%] space-y-3">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                            >
                                <span className="font-medium">{faq.question}</span>
                                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="overflow-hidden transition-all duration-300 ease-in-out bg-gray-900 text-gray-300 px-4"
                                style={{ maxHeight: "0px" }}
                            >
                                <p className="py-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
