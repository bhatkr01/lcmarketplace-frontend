export * from '../Shop/AddProducts.js';
import styles from "./Terms.module.css";
import Navbar from "../../components/Navbar/Navbar.js";
import { useRouter } from 'next/router';
import useSWR from "swr";
import Footer from "../../components/Footer/Footer.js";
import Link from 'next/link';

 

export default function Terms() {
	const router=useRouter()
	return (
		<><>
		<Navbar/>
		<div className={styles.centeralign}>
        <h1>Terms of Use</h1>
		<h3 className={styles.update}>Last updated: December 6, 2022</h3>
        <h2 className={styles.policy}>
		1. AGREEMENT TO TERMS <br></br><br></br>

These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and

("Company." "we."

"us," or "our"), concerning your access to and use of the

website as well as any other media form, media channel, mobile website or mobile application

related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use.
<br></br><br></br> IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. <br></br><br></br>

Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the

"Last updated" date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted

The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
		<br></br><br></br>
You are advised to review these Terms of Use periodically for any changes. Changes to these Terms of Use are effective when they are posted on this page.
<br></br><br></br>
<u>Contact Us</u>
<br></br><br></br>
If you have any questions about these Terms, You can contact us:
by phone number at +1 (563) 235-1363 or by email at musami01@luther.edu</h2></div>
		<Footer/></></>	
	)
}