import { Link } from "react-router-dom";
import "./articlelist.css";
import { memo } from "react";

const Articlelist = memo((props) =>
{
    return(
        <>
        <div id="articlelist">
            <div className="list_wrapper">
               <Link className="link" to={`/article/${props.article._id}`}>
                    <h3>{props.article.title}</h3>
               </Link> 
                <div>
                    <span>{props.article.categories}</span> <span>---</span><span>{new Date(props.article.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}</span>
                </div>       
            </div>
        </div>
        </>
    );
});

export default Articlelist;