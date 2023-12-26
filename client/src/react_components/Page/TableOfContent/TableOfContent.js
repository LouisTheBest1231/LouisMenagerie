import { useEffect, useState } from "react";
import "./TableOfContent.css"
import useHeaderData from "../../HelperModules/useHeaderData";



export default function TableOfContent() {


    const headers = useHeaderData()


    return (
        <div className="table_of_content">
            <div className="table_of_content_title">
                On this page
            </div>

            <div className="table_of_content_stuff">
                <Header headingList={headers} />

            </div>

        </div>
    );
}


function Header({ headingList }) {
    return (
        <ul>
            {headingList.map((heading) => (
                <li id={heading.id} className="table_of_content_stuff_parent_li">
                    <a href={`#${heading.id}`} className="table_of_content_stuff_parent"> {heading.innerText}</a>

                    {heading.items.length > 0 && (
                        <ul>
                        {heading.items.map((child)=>(
                                <li id={child.id}  className="table_of_content_stuff_child_li">
                                    <a href={`#${child.id}`} className="table_of_content_stuff_child">{child.innerText}</a>
                                </li>
                        ))
                        }
                        </ul>

                    )}
                </li>

            ))}
        </ul>
    )
}