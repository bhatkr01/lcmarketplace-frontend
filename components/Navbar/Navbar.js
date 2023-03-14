export * from '../Shop/AddProducts.js';
import styles from "./Navbar.module.css";
import { useRouter } from 'next/router';
import useSWR from "swr";
import Link from 'next/link';

export function myFunction() {
	
	const hamburger_btn = document.querySelector(`.${styles.HamburgerButton}`);
    const hamburger_menu = document.querySelector(`.${styles.HamburgerMenu}`);

	hamburger_btn.addEventListener('click', function() {	
	});

	hamburger_btn.classList.toggle(`${styles.isactive}`);
	hamburger_menu.classList.toggle(`${styles.isactive}`);
}

export default function Privacypolicy() {
	const router=useRouter()
	return (
	<>
	<div className={styles.HamburgerMenu}>
		<a className={styles.HamPage} href = "/">About</a>
		<a className={styles.HamPage} href = "/privacypolicy" >Policy</a>
		<a className={styles.HamPage} href = "/terms">Terms of Use</a>

		{/*
		TO-DO
		Switch display of this nav to 'none' upon login*/}
		<div className={styles.HamSignInPrompt}>
			<div>👇 Sign-in to buy/sell products 👇</div>
		</div>

		{/*
		TO-DO
		Switch display of this nav to 'block' upon login*/}
		<div className={styles.HamSignOut}>
			<a href= "/"><div>Sign-out</div></a>
		</div>

		{/*
		TO-DO
		Switch out Inner HTML of this button to Sell Items upon login*/}
		<div className={styles.hamsellbtn}><a href = "http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Sign In</a></div>
	</div>
	<div className={styles.Nav}>
		<div className={styles.NavbarContainer}>
			<div className={styles.NavLogo}>
				<a href = "/">Luther Marketplace</a>
			</div>
			<div className={styles.NavPageContainer}>
				<a className={styles.NavPage} href = "/">About</a>
				<a className={styles.NavPage} href = "/privacypolicy">Policy</a>
				<a className={styles.NavPage} href = "/terms">Terms of Use</a>
			</div>

			{/*
			TO-DO
			Switch display of this nav to 'none' upon login*/}
			<div className={styles.NavSignInPrompt}>
				<div>Sign-in to buy/sell products </div>
				<div className={styles.NavSignInPromptArrow}> → </div>
			</div>

			{/*
			TO-DO
			Switch display of this nav to 'block' upon login*/}
			<div className={styles.NavSignOut}>
				<a href= "/"><div>Sign-out</div></a>
			</div>

			{/*
			TO-DO
			Switch out Inner HTML of this button to Sell Items upon login*/}
			<div className={styles.menufonts}><button className={styles.sellbtn}><a href = "http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Sign In</a></button></div>
		</div>
		<button className={`${styles.HamburgerButton}`} onClick={myFunction}>
			<div className={styles.HamburgerBar}></div>
			<div className={styles.HamburgerMenu}></div>
		</button>
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