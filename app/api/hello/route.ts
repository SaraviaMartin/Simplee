export async function GET(request: Request) {
  // Puedes acceder a parámetros de consulta
  const { searchParams } = new URL(request.url);
  const nombre = searchParams.get('nombre') || 'visitante';
  
  return new Response(`¡Hola, ${nombre}!`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
