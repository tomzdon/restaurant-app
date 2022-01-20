import React from 'react'
import Head from 'next/head'
import { hotelinfo } from '../Constants/hotelinfo'

const HeadTag = ({page}) => {
    return (
        <Head>
            <title>Restaurant </title>
            <link rel="icon" href="/favicon.jpg" />
            <meta name="title" content={hotelinfo.logoText} />
            <meta name="description" content={hotelinfo.greeting.subtitle} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={hotelinfo.logoText} />
            <meta property="og:description" content={hotelinfo.greeting.subtitle} />
            <meta property="og:image" content="" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={hotelinfo.logoText} />
            <meta property="twitter:description" content={hotelinfo.greeting.subtitle} />
            <meta property="twitter:image" content="" />
        </Head>
    )
}

export default HeadTag
