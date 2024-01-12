/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: process.env.brandName || 'Radiant Destiny',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Discover a diverse range of high-quality products at Surat Emporium. From fashion and electronics to home essentials, we offer the best deals in Surat city. Shop now and experience the joy of shopping!',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full" alt={product.name} />
            </Link>

            <div
              className="absolute flex justify-between transform 
               -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                href={`#slide-${index === 0 ? featuredProducts.length - 1 : index - 1
                  }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide-${index === featuredProducts.length - 1 ? 0 : index + 1
                  }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-4xl py-2 mb-8 tracking-tighter">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
      {/* ****************** Extra Code Need to create components for below sections ******************* */}
      <div className="container-xl my-16 justify-center flex">
        <div className="stats shadow mx-auto">
          <div className="stat">
            <div className="stat-figure">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title tracking-tighter">Orders Delivered</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Aug 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title tracking-tighter">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div className="stat-title tracking-tighter">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div className="toast toast-end">
        <div className="alert bg-gray-950 text-white">
          <span className="countdown">
            Live Visitors: <span className='ml-1'>84</span>
          </span>
        </div>
      </div>
    </>
  )
}
