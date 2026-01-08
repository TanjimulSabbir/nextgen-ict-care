import { Metadata } from 'next';
import FrequentlyAskQuest from './faq';


export const metadata: Metadata = {
    title: "সাধারণ জিজ্ঞাসা (FAQ) | NextGen ICT Care",
    description: "ব্যাচ টাইম, কোর্স ফি, ডেমো ক্লাস এবং রিফান্ড পলিসি সম্পর্কে আপনার মনে থাকা সব প্রশ্নের উত্তর পান এক জায়গায়।",
};

export default function Page() {
    return <FrequentlyAskQuest />;
}