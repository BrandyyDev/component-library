import config from '../config/config';

 const { apiBaseUrl, endpoints  } = config


export const useTracking = () => {
  const track = async (component: string, variant: string, action: string) => {
    await fetch(`${apiBaseUrl}${endpoints.components.track}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        component,
        variant,    
        action,
        timestamp: new Date().toISOString(),
      }),
    })
  }

  return { track }
}