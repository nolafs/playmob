import React from "react";

const NewsPreview = ({ entry, widgetFor }) => {
    const title = entry.getIn(['data', 'title'])

    return (<div  className="container mx-auto prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-primary">
       <h1>{title}</h1>
        {widgetFor("body")}
    </div>)
}



export default NewsPreview;