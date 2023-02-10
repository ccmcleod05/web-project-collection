import Image from 'next/image'

import styles from '@/styles/Home.module.css'

export type blogCardProps = {

    imageSrc: string;
    
    imageAlt: string;

    title: string;

    briefDescription: string;

    author: string;

}

function BlogCard ({imageSrc, imageAlt, title, briefDescription, author}: blogCardProps) {

    const handleClick = () => {
        // route to blog page with blog loc path passed in by props (need to figure out where to store the blog - make it mardown, where should i store the markdown?)
    }

    return (
        <button onClick={handleClick}>
            <Image className={''} src={imageSrc} alt={imageAlt}/>
            <h1 className={''}>{title}</h1>
            <h1 className={''}>{briefDescription}</h1>
            <h1 className={''}>{author}</h1>
        </button>
    );
}


export default BlogCard;