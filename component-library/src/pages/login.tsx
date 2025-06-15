'use client'
import { useState } from 'react'
import { Input } from '../components/Input/Input'
import { Button } from '../components/Button/Button'
import { AuthWrapper, AuthCard, Title, ContainerButtons } from '../styles/auth.styled'
import { useRouter } from 'next/router'
import { saveToken } from '../utils/auth'
import config from '../config/config'
const { apiBaseUrl, endpoints } = config

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const res = await fetch(`${apiBaseUrl}${endpoints.auth.login}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    if (res.ok) {
      saveToken(data.token)
      router.push('/dashboard')
    } else {
      alert(data.message || 'Error al iniciar sesión')
    }
    setLoading(false)
  }

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <AuthWrapper>
      <AuthCard>
        <Title>Iniciar Sesión</Title>
        <Input
          label="Email"
          placeholder="usuario@demo.com"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          label="Contraseña"
          placeholder="••••••••"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <ContainerButtons>
        <Button loading={loading} onClick={handleSubmit} style={{ marginTop: 16, width: '100%' }}>
          Entrar
        </Button>
        <Button loading={loading} onClick={handleRegister} style={{ marginTop: 16, width: '100%' }}>
          Registrarse
        </Button>
        </ContainerButtons>

      </AuthCard>
    </AuthWrapper>
  )
}
