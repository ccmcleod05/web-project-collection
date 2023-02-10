import { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Post from './../blogs/camden-mcleod-1.mdx';

type blogPageProps = {
    
    blogLoc: string;

}

function BlogPage () {

    /*
    const [blogPost, setBlogPost] = useState();

    useEffect(() => {

    })

    const getBlog = async () => {
        return (
            <>
            </>
        );
    }

    const handleClick = () => {
        // route to go back to main page
    }
    */

    return (
        <>
            <MDXProvider>
                <Post/>
            </MDXProvider>
            {/*
            <button onClick={handleClick}>
                Back
            </button>
            */}
        </>
    );
}

export default BlogPage;