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
    return (
        <div>
            <Image className={''} src={imageSrc} alt={imageAlt}/>
            <h1 className={''}>{title}</h1>
            <h1 className={''}>{briefDescription}</h1>
            <h1 className={''}>{author}</h1>
        </div>
    );
}


export default BlogCard;