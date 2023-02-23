export * from './AddProducts.js';
import styles from "./Shop.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image'
import AddProducts from "./AddProducts.js";
import Link from 'next/link'
import Footer from "../../components/Footer/Footer.js";

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
		<><><div className={styles.Nav}>
			<div className={styles.NavbarContainer}>
				<div className={styles.NavLogo}>
					<Link href = "/">Luther Marketplace</Link>
				</div>
				<h1 className={styles.menufonts}><Link href = "/shop">What's New?</Link></h1>
				<h1 className={styles.signin} id="signin"><Link href = "/login">Login</Link></h1>
				<h1 className={styles.signin} id="signout"><Link href = "/login">Logout</Link></h1>
				<h1 className={styles.menufonts} id = "sell"><button className={styles.sellbtn} onClick={addProducts}>Sell my items</button></h1>
				<h1 className={styles.menufonts} id = "getstarted"><button className={styles.sellbtn} id = "getstarted"><Link href="/signup" target="_blank">Get Started</Link></button></h1>
			</div>
		</div>
<div>
		</div>
		</><div className={styles.headerimagecontainer}>
				<div className={styles.btns}>
					<button className={styles.btn}>Discover</button>
					<button className={styles.btn}>Furniture</button>
					<button className={styles.btn}>Electronics</button>
					<button className={styles.btn}>Books</button>
					<button className={styles.btn}>Appliances</button>
					<button className={styles.btn}>Kitchen</button>
					<button className={styles.btn}>Decor</button>
					<button className={styles.btn}>Clothing</button>
				</div>
				<div className={styles.textheader}>
					<h1 className={styles.parentheadtext}>Find out what the <br></br>community is selling</h1>
					<h3 className={styles.subheadtext}>Millions of people trust Luther Marketplace everyday<br></br>Explore and get the goods you need for cheap</h3>
				</div>
				<div className={styles.searchbtns}>
					<form method="get" action="">
						<input className={styles.btn} type="text" placeholder="Search" required></input>
					</form>
				</div>
			</div>
			<div className={styles.dropdown}>
				<button className={styles.dropbtn}>Filters</button>
				<div className={styles.dropdowncontent}>
					<Link href="#" onClick={priceascendingProducts}>Price Low to High</Link>
					<Link href="#">Price High to Low</Link>
					<Link href="#">New to Old</Link>
					<Link href="#">Old to New</Link>
				</div>
			</div>
			<div className={styles.dropdown2}>
				<button className={styles.dropbtn2}>Popular</button>
				<div className={styles.dropdowncontent2}>
					<Link href="#">High to Low</Link>
					<Link href="#">Low to High</Link>
				</div>
			</div>
			<div>
				<div className={styles.imagegrid}>
				 {data.map((product) => (
						<div key={product.id}>
							<Image
								src={`${product.product_picture}`}
								width={500}
								height={500} className={styles.imageformat}/>
							<div className={styles.productlayer}>
								<p className = {styles.productdescription}>{product.product_description}</p>
								<p className = {styles.condbtn}><h1 className = {styles.condbtntxt}>{product.product_condition}</h1></p>
							    <p className = {styles.pricebtn}>${product.product_price}</p>
							</div>
							
						</div>
					))}
				</div>
			</div><Footer/></>
			
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


