import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

export type blogCardProps = {

    imageSrc: string;
    
    imageAlt: string;

    title: string;

    briefDescription: string;

    author: string;

    content: string;

}

function BlogCard ({imageSrc, imageAlt, title, briefDescription, author, content}: blogCardProps) {
    return (
        <Link href={`/blog-page?content=${content}`}>
            <div>
                <Image width={12} height={12} className={''} src={imageSrc} alt={imageAlt}/>
                <h1 className={''}>{title}</h1>
                <h1 className={''}>{briefDescription}</h1>
                <h1 className={''}>{author}</h1>
            </div>
        </Link>
    );
}


export default BlogCard;