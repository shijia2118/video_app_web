import { useState } from 'react'
import { FaBoxOpen, FaInfoCircle, FaFileAlt } from 'react-icons/fa' // 引入产品展示和关于我们的 Icon

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const menuItems = [
    { name: '首页', path: '/' },
    { name: '产品展示', path: '#products' },
    { name: '关于我们', path: '#about' },
    { name: '用户协议', path: '#agreement' },
    { name: '联系我们', path: '#contact' },
  ]

  const products = [
    {
      id: 1,
      title: '第一次来乌兰察布怎么玩🔥',
      cover: '/images/1.png',
      description: '凉城',
      videoUrl: '/videos/1.mp4',
    },
    {
      id: 2,
      title: '腕间生莲，福运连连！',
      cover: '/images/2.png',
      description: '腕间生莲，福运连连！',
      videoUrl: '/videos/2.mp4',
    },
    {
      id: 3,
      title: '集宁夜景',
      cover: '/images/3.png',
      description: '集宁夜景',
      videoUrl: '/videos/3.mp4',
    },
  ]

  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div>
      {/* 绿色导航栏 */}
      <nav
        style={{ backgroundColor: 'green', width: '100%', padding: '10px 0' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '50px',
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                textDecoration: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* 图片横幅 */}
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/images/carousel.png"
          alt="轮播图片"
          layout="responsive"
          width={1920}
          height={600}
        />

        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '84px',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '10px 20px',
          }}
        >
          乌盟人有才艺
        </div>
      </div>

      {/* 产品展示区域 */}
      <div
        id="products"
        style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaBoxOpen style={{ fontSize: '32px', color: 'green' }} />
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
            产品展示
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{ width: '30%', cursor: 'pointer' }}
              onClick={() => setSelectedVideo(product.videoUrl)}
            >
              <Image
                src={product.cover}
                alt={product.title}
                width={500}
                height={300}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <p style={{ fontSize: '16px', marginTop: '10px' }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <video controls style={{ width: '80%', maxHeight: '80vh' }}>
              <source src={selectedVideo} type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '5px',
              }}
            >
              关闭视频
            </button>
          </div>
        )}
      </div>

      {/* 关于我们 */}
      <div
        id="about"
        style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaInfoCircle style={{ fontSize: '32px', color: 'green' }} />
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
            关于我们
          </h2>
        </div>
        <p
          style={{
            fontSize: '16px',
            color: '#555',
            marginTop: '10px',
            lineHeight: '1.8',
          }}
        >
          乌兰察布市，一个充满活力和文化魅力的地方。我们致力于展示当地的艺术、表演和美景，让更多人了解这里的独特风情。
          通过精心策划的内容，我们希望为游客提供最佳的旅行体验，让他们深入了解乌兰察布的风土人情。
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#555',
            marginTop: '10px',
            lineHeight: '1.8',
          }}
        >
          我们的团队由一群热爱乌兰察布的年轻人组成，他们用镜头记录下这座城市的美丽瞬间，并通过视频和图文的方式与大家分享。
          无论你是本地人，还是第一次来到这里，我们都希望能为你提供有价值的信息，带你感受乌兰察布的独特魅力。
        </p>
      </div>

      {/* 用户协议区域 */}
      <div
        id="agreement"
        style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <FaFileAlt style={{ fontSize: '32px', color: 'green' }} />{' '}
          {/* Add the icon */}
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
            用户协议
          </h2>
          <Link
            href="/agreement"
            style={{
              textDecoration: 'underline',
              fontSize: '16px',
              color: 'green',
              cursor: 'pointer',
            }}
          >
            查看详情
          </Link>
        </div>
      </div>

      {/* 联系我们 */}
      <div
        id="contact"
        style={{ maxWidth: '1200px', margin: '50px auto', padding: '20px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaInfoCircle style={{ fontSize: '32px', color: 'green' }} />
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
            联系我们
          </h2>
        </div>
        <p
          style={{
            fontSize: '16px',
            color: '#555',
            marginTop: '20px',
            lineHeight: '1.8',
          }}
        >
          <strong>联系方式：</strong> 18647442386
        </p>
        <div>
          <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
            <strong>官方微信：</strong>
          </p>
          <Image
            src="/images/wx_qr.png"
            alt="微信二维码"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* 备案信息 */}
      <footer
        style={{
          textAlign: 'center',
          padding: '20px 0',
          backgroundColor: '#bdbdbd',
          color: '#ffffff',
          fontSize: '18px',
          marginTop: '50px',
        }}
      >
        ICP主题备案号：蒙ICP备17004825
      </footer>
    </div>
  )
}
