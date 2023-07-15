'use client'
import React from 'react'
import { Carousel, Spinner } from 'react-bootstrap'
import Image from 'next/image'

export default function CarouselUse(images: any) {
    return (
        <>
            <Carousel>
                {images.images.map((x: string, i: number) => (
                    <Carousel.Item key={i} >
                        <Image style={{ borderRadius: '5px' }} width="350" height="300" src={x} alt='Feijão' />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
