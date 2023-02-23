export * from '../Shop/AddProducts.js';
import styles from "./Navbar.module.css";

import { useRouter } from 'next/router';
import useSWR from "swr";
import Link from 'next/link';

 

export default function Privacypolicy() {
	const router=useRouter()
	return (
	<>
		<div className={styles.Nav}>
			<div className={styles.NavbarContainer}>
				<div className={styles.NavLogo}>
					<Link href = "/">Luther Marketplace</Link>
				</div>
				<h1 className={styles.menufonts}><Link href = "/shop">What's New?</Link></h1>
				<h1 className={styles.signin} id="signin"><Link href = "/signin">Login</Link></h1>
				<h1 className={styles.signin} id="signout"><Link href = "/signin">Logout</Link></h1>
				<h1 className={styles.menufonts} id="sell"><button className={styles.sellbtn}><Link href = "http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Sell my items</Link></button></h1>
				<h1 className={styles.menufonts} id = "getstarted"><button className={styles.sellbtn} id = "getstarted"><Link href="/signup" target="_blank">Get Started</Link></button></h1>
			</div>
		</div>
		</>
	);
}
function sign() {
	if (typeof window !== 'undefined') {
		const storage = localStorage.getItem('access_token')
		if (storage !== null && storage !== 'undefined'){
			var div = document.getElementById('signout');
			if (div !== null){
				div.style.display="block";
			}
			var div2 = document.getElementById('signin');
			if (div2 !== null){
				div2.style.display="none";
				}
		}
		else{
			var div = document.getElementById('signin');
			if (div !== null){
			div.style.display="block";
			}
			var div2 = document.getElementById('signout');
			if (div2 !== null){
			div2.style.display="none";
			}
			}
		}
	  }

setInterval(sign, 1);
function shop_nav_sign() {
	if (typeof window !== 'undefined') {
		const storage = localStorage.getItem('access_token')
		if (storage !== null && storage !== 'undefined'){
			var div = document.getElementById('sell');
			if (div !== null){
				div.style.display="block";
			}
			var div2 = document.getElementById('getstarted');
			if (div2 !== null){
				div2.style.display="none";
				}
		}
		else{
			var div = document.getElementById('getstarted');
			if (div !== null){
			div.style.display="block";
			}
			var div2 = document.getElementById('sell');
			if (div2 !== null){
			div2.style.display="none";
			}
			}
		}
	  }

setInterval(shop_nav_sign, 1);