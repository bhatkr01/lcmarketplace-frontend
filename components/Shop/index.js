export * from './AddProducts.js';
import styles from "./Shop.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import { useEffect } from "react";
import Image from 'next/image'
import AddProducts from "./AddProducts.js";
import Link from 'next/link'
import Footer from "../../components/Footer/Footer.js";
import Navbar from "../../components/Navbar/Navbar.js";

export function Shop() {
	const router=useRouter()
	
	const { data, error } = useSWR(["products/","GET"], fetcher);
	if (!data) return "I am loading"
	if (error) return "there is error"

	const addProducts = (event) => {
		event.preventDefault();
		router.push('/add-products')
	};

	const priceascendingProducts = (event) => {
		data.slice().sort((a, b) => b.product_date - a.product_date);
	};

	return (
		<><>
		<Navbar/>

		</><div className={styles.headerimagecontainer}>
				<div className={styles.textheader}>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<h1 className={styles.parentheadtext}>Find out what the <br></br>community is selling</h1>
					<h3 className={styles.subheadtext}>Your friends and professors trust Luther Marketplace everyday.<br></br>Explore and get the goods you need for cheap.</h3>
				</div>
				<div className={styles.searchbar}>
					<form method="get" action="">
						<input className={styles.searchfield} type="text" placeholder="Search" required></input>
					</form>
				</div>
			</div>
			<div className={styles.dropdowncontainer}>
				<div className={styles.dropdown}>
					<button className={styles.dropbtn}>Sort Products</button>
					<div className={styles.dropdowncontent}>
						<Link href="#" onClick={priceascendingProducts}>Price: Low to High</Link>
						<Link href="#">Price: High to Low</Link>
						<Link href="#">Condition: New to Old</Link>
						<Link href="#">Condition: Old to New</Link>
					</div>
				</div>
				<div className={styles.dropdown2}>
					<button className={styles.dropbtn2}>Popularity</button>
					<div className={styles.dropdowncontent2}>
						<Link href="#">High to Low</Link>
						<Link href="#">Low to High</Link>
					</div>
				</div>
			</div>


			<div className={styles.productgrid}>
				{data.map((product) => (
					<>
					
					<Link className={styles.productlinkbox} href={`/shop/${product.id}`}>
					
					
						<div className={styles.productcard} key={product.id}>
							<Image src={`${product.product_picture}`} width={500} height={500} className={styles.productimage}/>	
							<div className={styles.productcontent}>
								<div>
									<div className={styles.productdetails}>
										<span>{product.product_name}</span>									
									</div>
									<div className = {styles.productcondition}>
										<p className = {styles.productconditiontext}>{product.product_condition}</p>
									</div>	
									<div className={styles.productbio}>
										{product.product_description}
									</div>
								</div>
								<div className={styles.productprice}>
									${product.product_price}
								</div>
							</div>
						</div>
					
				  </Link>
					</>
				))}
			</div>
			
			
			<Footer/></>
			
	)

	
}

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

function add_or_get_started() {
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

setInterval(add_or_get_started, 1);


if (typeof window !== "undefined") {
	var hamburgerbtn = document.getElementById('HamBtn');
	//const nav_menu = document.querySelector(`.${styles.mobilenav}`)
	if (hamburgerbtn) {
		console.log("FOUND");
		hamburgerbtn.addEventListener("click", function () {
			console.log("here");
			hamburgerbtn.classList.add(`${styles.isactive}`);
			console.log(hamburgerbtn);
			});
			//nav_menu.classList.toggle(`${styles.isactive}`);
			
		;}
	else {console.log("Not Found");}
}


