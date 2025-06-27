import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import ProductTabs from './ProductTabs'
import RelatedProducts from './RelatedProducts'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const dummyProduct = {
      id,
      name: 'Embroidered Satin Saree',
      price: 5500,
      oldPrice: 4795,
      stock: 4473,
      description:
        'This luxurious embroidered satin saree features vibrant floral motifs and a soft satin finish. Perfect for weddings, parties, and festive occasions.',
      images: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60'
      ],
      reviews: [
        'Beautiful material and embroidery!',
        'Loved it — exactly as shown in pictures.',
        'Super fast delivery and great quality.'
      ],
      relatedProducts: [
        {
          name: 'Floral Georgette Saree',
          image: 'https://source.unsplash.com/random/300x400?dress'
        },
        {
          name: 'Designer Silk Saree',
          image: 'https://source.unsplash.com/random/300x400?silk'
        },
        {
          name: 'Classic Red Saree',
          image: 'https://source.unsplash.com/random/300x400?red-dress'
        },
        {
          name: 'Casual Cotton Saree',
          image: 'https://source.unsplash.com/random/300x400?cotton-dress'
        }
      ]
    }

    setTimeout(() => {
      setProduct(dummyProduct)
    }, 500)
  }, [id])

  if (!product)
    return (
      <div className="text-center py-10 text-lg font-medium">
        Loading product details…
      </div>
    )

  return (
    <div className="border container mx-auto px-4 py-12">
      {/* Product details layout */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <ProductGallery images={product.images} />
        </div>
        <div className="w-full md:w-1/2">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Description + Reviews */}
      <div className="mt-12">
        <ProductTabs
          description={product.description}
          reviews={product.reviews}
        />
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <RelatedProducts relatedProducts={product.relatedProducts} />
      </div>
    </div>
  )
}

export default ProductDetails
