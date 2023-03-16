import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { fetcher } from "../../fetch/";
import useSWR from "swr";
import styles from "../Shop/Shop.module.css";
import Link from 'next/link'
import Image from 'next/image'
import Navbar from "../../components/Navbar/Navbar.js";

export default function UserProfile() {
	const [user_id, setUser_id] = useState(0)

 useEffect(() => {
if (typeof window !== 'undefined') {
	{localStorage.getItem('access_token')?setUser_id(jwt_decode(localStorage.getItem('access_token')).user_id):null}
}
  }, []); 

	const { data:products, error:product_error } = useSWR(["products/", "GET"], fetcher);
	const { data:user, error:user_error } = useSWR([`accounts/${user_id}`, "GET"], fetcher);
	
	if (!user ) return "I am loading";
	if (user_error) return "there is error";
console.log(products)
console.log(user)


	

	return (
		<>
		<Navbar/>
		{/* <h1>hi {user_id}</h1> */}
		{/* <h1>Welcome Back {user.email} !</h1> */}
		<br></br>
		<br></br>
		<br></br>
		<div className={styles.textheader}>
		<h1>Welcome Back {user.first_name} !</h1>
		<h2 className={styles.menufonts}>These are the items you have listed on Luther Marketplace</h2>
		</div>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<div className={styles.productgrid}>
		{products.map((product)=>(
			
			<Link className={styles.productlinkbox} href={`/shop/${product.id}`}>
			<div key={product.id} className={styles.productcard}>
			{product.product_author==user_id?
				<><Image
							src={`${product.product_picture}`}
							width={500}
							height={500} className={styles.productimage} /><div className={styles.productcontent}>
								<div>
									<div className={styles.productdetails}>
										<span>{product.product_name}</span>
									</div>
									<div className={styles.productcondition}>
										<p className={styles.productconditiontext}>{product.product_condition}</p>
									</div>
									<div className={styles.productbio}>
										{product.product_description}
									</div>
								</div>
								<div className={styles.productprice}>
									${product.product_price}
								</div>
							</div></>
				
				:""} </div>
						</Link>
						
					))}
		</div>			
		</>
		
			
	)
}
