"use client"
import Link from "next/link";

export default function Game() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5rem',
        marginBottom: '40px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        游戏中心
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link 
          href="/game/2048" 
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '30px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#333',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: '2px solid transparent',
            display: 'block'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
            e.target.style.borderColor = '#667eea';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'none';
            e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            e.target.style.borderColor = 'transparent';
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎮</div>
          <h3 style={{ margin: '10px 0', fontSize: '1.5rem', color: '#333' }}>2048</h3>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>经典数字益智游戏</p>
        </Link>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          color: '#666',
          opacity: '0.7',
          cursor: 'not-allowed'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🃏</div>
          <h3 style={{ margin: '10px 0', fontSize: '1.5rem' }}>更多游戏</h3>
          <p style={{ fontSize: '0.9rem' }}>即将上线</p>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          div:first-child {
            padding: 15px !important;
          }
          h1 {
            font-size: 2rem !important;
            margin-bottom: 30px !important;
          }
          div > div {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          a, div > div > div {
            padding: 20px !important;
          }
          div > div > div > div {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem !important;
          }
          a, div > div > div {
            padding: 15px !important;
          }
          h3 {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </div>
  )
}