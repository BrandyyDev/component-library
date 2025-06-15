
import { withAuth } from '../hoc/withAuth'
import { removeToken } from '../utils/auth'

import { useRouter } from 'next/router'

'use client'
import React, { useState } from 'react'
import { Button } from '../components/Button/Button'
import { Input } from '../components/Input/Input'
import { Modal } from '../components/Modal/Modal'
import { Card } from '../components/Card/Card'
import useSWR from 'swr'
import {
  PageWrapper,
  DemoContainer,
  Title,
  Section,
  SectionTitle,
  ControlGroup,
  StyledSelect,
  StyledCheckbox,
} from '../styles/home.styled'

import config from '../config/config'
const fetcher = (url: string) => fetch(url).then(res => res.json())

function Dashboard() {

  const { apiBaseUrl, endpoints: component } = config

  const [modalOpen, setModalOpen] = useState(false)
  const [inputVariant, setInputVariant] = useState<'default' | 'error' | 'success'>('default')
  const [btnVariant, setBtnVariant] = useState<'primary' | 'secondary' | 'danger'>('primary')
  const [btnLoading, setBtnLoading] = useState(false)
  const [cardBorder, setCardBorder] = useState(true)
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('large')
  const router = useRouter()

  const logout = () => {
    removeToken()
    router.push('/login')
  }
  const { data: stats } = useSWR(`${apiBaseUrl}${component.components.stats}`, fetcher, { refreshInterval: 3000 })

  return (
    <PageWrapper>
      <DemoContainer>
        <Title>Componentes</Title>

        <Section>
          <SectionTitle>Button</SectionTitle>
          <ControlGroup>
            <label>Variante:</label>
            <StyledSelect onChange={(e) => setBtnVariant(e.target.value as any)}>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="danger">Danger</option>
            </StyledSelect>
            <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <StyledCheckbox
                type="checkbox"
                checked={btnLoading}
                onChange={() => setBtnLoading(!btnLoading)}
              />
              Cargando
            </label>
            <Button variant={btnVariant} loading={btnLoading}>
              Click
            </Button>
          </ControlGroup>
        </Section>

        <Section>
          <SectionTitle>Input</SectionTitle>
          <ControlGroup>
            <StyledSelect onChange={(e) => setInputVariant(e.target.value as any)}>
              <option value="default">Default</option>
              <option value="error">Error</option>
              <option value="success">Success</option>
            </StyledSelect>
            <Input label="Nombre" placeholder="Ingresa tu nombre" variant={inputVariant} />
          </ControlGroup>
        </Section>

        <Section>
          <SectionTitle>Modal</SectionTitle>
          <ControlGroup>
            <label>Tamaño:</label>
            <StyledSelect
              onChange={(e) => setModalSize(e.target.value as 'small' | 'medium' | 'large')}
              value={modalSize}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </StyledSelect>
            <Button onClick={() => setModalOpen(true)} style={{ marginBottom: 12 }}>
              Abrir Modal
            </Button>
          </ControlGroup>

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            header={<h3 style={{ margin: 0, color: '#6366f1' }}>Encabezado Modal</h3>}
            body={<p style={{ margin: 0 }}>Este es el contenido del modal.</p>}
            footer={<Button onClick={() => setModalOpen(false)}>Cerrar</Button>}
            size={modalSize}
          />
        </Section>

        <Section>
          <SectionTitle>Card</SectionTitle>
          <ControlGroup>
            <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <StyledCheckbox
                type="checkbox"
                checked={cardBorder}
                onChange={() => setCardBorder(!cardBorder)}
              />
              Mostrar borde
            </label>
          </ControlGroup>
          <Card
            image="https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg"
            header="Demo Card"
            body="Este es el cuerpo de la card."
            footer="Pie de tarjeta"
            bordered={cardBorder}
          />
        </Section>

        <Section>
          <SectionTitle>📊 Estadísticas en tiempo real</SectionTitle>
          <pre style={{ background: '#f1f5f9', padding: '1rem', borderRadius: 12 }}>
            {JSON.stringify(stats, null, 2)}
          </pre>
        </Section>
      </DemoContainer>
      <Button variant="danger" onClick={logout}>Cerrar Sesión</Button>
    </PageWrapper>

  )
}

export default withAuth(Dashboard)
