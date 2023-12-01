import ProductPreview from "../components/ProductPreview"
import { useParams } from "react-router-dom"

export default function SingleProduct() {
    const { id } = useParams()
    return (
        <>
            <h1>single Product {id}</h1>
            {/* <ProductPreview /> */}
        </>
    )
}