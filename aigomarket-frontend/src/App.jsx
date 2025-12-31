import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  
  const aiTools = [
    { id: 1, name: 'ChatGPT', category: 'Chatbot', description: 'Advanced AI conversation', price: 'Free/$20' },
    { id: 2, name: 'Midjourney', category: 'Image', description: 'AI image generation', price: '$10/mo' },
    { id: 3, name: 'Claude', category: 'Chatbot', description: 'Helpful AI assistant', price: 'Free/$20' },
    { id: 4, name: 'Runway', category: 'Video', description: 'AI video editing', price: '$15/mo' },
    { id: 5, name: 'Copy.ai', category: 'Writing', description: 'AI copywriting tool', price: 'Free/$36' },
    { id: 6, name: 'Synthesia', category: 'Video', description: 'AI video avatars', price: '$30/mo' },
  ]

  const filtered = aiTools.filter(tool => 
    tool.name.toLowerCase().includes(search.toLowerCase()) ||
    tool.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>🤖 AIgoMarket</h1>
      <p style={{ textAlign: 'center', color: '#94a3b8' }}>Discover the best AI tools</p>
      
      <input
        type="text"
        placeholder="Search AI tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: 'block', margin: '20px auto', padding: '12px 20px',
          width: '300px', borderRadius: '25px', border: 'none',
          fontSize: '16px'
        }}
      />

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px', maxWidth: '1000px', margin: '0 auto', padding: '20px'
      }}>
        {filtered.map(tool => (
          <div key={tool.id} style={{
            background: '#1e293b', borderRadius: '12px', padding: '20px',
            transition: 'transform 0.2s'
          }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{tool.name}</h3>
            <span style={{
              background: '#3b82f6', padding: '2px 10px', borderRadius: '12px',
              fontSize: '12px'
            }}>{tool.category}</span>
            <p style={{ color: '#94a3b8', margin: '15px 0' }}>{tool.description}</p>
            <p style={{ color: '#22c55e', fontWeight: 'bold' }}>{tool.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
