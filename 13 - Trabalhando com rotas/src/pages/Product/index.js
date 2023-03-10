import { useParams } from "react-router-dom";

export default function Product(){
    const { id } = useParams();
    return(
        <h2>produto: {id}</h2>
    );
}