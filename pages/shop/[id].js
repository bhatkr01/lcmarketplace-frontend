import { useRouter } from "next/router";
import { fetcher } from "../../fetch/";
import useSWR from "swr";
import Image from 'next/image'
import Navbar from "../../components/Navbar/Navbar.js";
import styles from "./[id].module.css";
import Footer from "../../components/Footer/Footer.js";

const Post = () => {
	const router = useRouter();
	const { id } = router.query;
	const { data, error } = useSWR([`products/${id}`, "GET"], fetcher);
	if (!data) return "I am loading";
	if (error) return "there is error";

	const editProduct = (event) => {
		event.preventDefault();
		router.push({
			pathname:'/add-products',
			query:{id:id},
		})
	};
	const deleteProduct = (event) => {
		event.preventDefault();

		const response = fetcher(`products/${id}`, "DELETE", '','');
		router.push({
			pathname:'/shop',
		})
	};
	return (
		<><>
		<Navbar/>
		
		<div className={styles.productcontainer}>
			<div className={styles.productmainimage}>
				<img className={styles.productmainphoto} src={`${data.product_picture}`}>

				</img>
			</div>
			<div className={styles.productdetails}>
				<div className={styles.productcategory}>Home / Electronics</div>
				<div className={styles.producttitle}>{data.product_name}</div>
				<div className = {styles.productcondition}>
					<p className = {styles.productconditiontext}>USED-GOOD</p>
				</div>
				<div className={styles.productprice}>$50.00</div>
				<button className={styles.contactbutton}>Contact Seller</button>
				<div className={styles.productdetailsheading}>
					Product Details: 
				</div>
				<div className={styles.productdetails}>
				{data.product_description}
				</div>
			</div>
		</div>

		<Footer/></></>	
	
	)
};

export default Post;
