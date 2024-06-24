import { Link } from "react-router-dom";
import "./articlelist.css";
import { memo } from "react";
import moment from "moment";

const Articlelist = memo((props) =>
{
    return(
        <>
        <div id="articlelist">
            <div className="list_wrapper">
               <Link className="link" to={`/article/${props.article.id}`}>
                    <h3>{props.article.title}</h3>
               </Link> 
                <div>
                    <span>{props.article.categories}</span> <span>---</span><span>{moment(props.article.created_at.toDate()).fromNow()}</span>
                </div>       
            </div>
        </div>
        </>
    );
});

export default Articlelist;