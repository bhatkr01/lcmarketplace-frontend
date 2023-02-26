import styles from "./Product.module.css";
import Navbar from "../../components/Navbar/Navbar.js";
import { useRouter } from 'next/router';
import useSWR from "swr";
import Footer from "../../components/Footer/Footer.js";
import Link from 'next/link';

 

export default function Product() {
	const router=useRouter()
	return (
		<><>
		<Navbar/>
		
		<div className={styles.productcontainer}>
			<div className={styles.productmainimage}>
				<img className={styles.productmainphoto} src="http://localhost:3000/_next/image?url=https%3A%2F%2Fseniorproject-mvp.herokuapp.com%2Fmedia%2Fimages%2Fpexels-screen-post-4526407_IjGMpLy.jpg&w=1080&q=75">

				</img>
			</div>
			<div className={styles.productdetails}>
				<div className={styles.productcategory}>Home / Electronics</div>
				<div className={styles.producttitle}>Galaxy Buds Pro Duo</div>
				<div className = {styles.productcondition}>
					<p className = {styles.productconditiontext}>USED-GOOD</p>
				</div>
				<div className={styles.productprice}>$50.00</div>
				<button className={styles.contactbutton}>Contact Seller</button>
				<div className={styles.productdetailsheading}>
					Product Details: 
				</div>
				<div className={styles.productdetails}>
				Lorem ipsum dolor sit amet, consectetur adipiscicupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscicupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscicupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>

		<Footer/></></>	
	)
}