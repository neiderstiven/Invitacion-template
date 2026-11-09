// BASE_URL termina en '/', así que respeta el subpath de GitHub Pages
// (/Invitacion-template/) y la raíz en local o en un dominio propio.
const base = import.meta.env.BASE_URL

export const THEME = `${base}images/themes/minimalism-dark-brown`

export const invitation = {
  event: {
    logo: '15 Años',
    title: '15 AÑOS',
    subtitle: 'Asociación Sur de Bogotá',
    phrase: 'Celebremos juntos',
    dateLong: 'Diciembre 12, 2026',
    paragraph:
      'La Asociación Sur de Bogotá tiene el privilegio de invitarte a celebrar juntos con gratitud 15 años de bondad, cuidado y misericordia.',
    closing:
      'Gracias por hacer parte de nuestra historia y por sumarte a esta gran celebración de gratitud.',
    verse: {
      reference: '1 Tesalonicenses 5:18',
      text: '«Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús».',
    },
  },
  date: {
    iso: '2026-12-12T00:00:00-05:00',
    day: '12',
    dayNumber: 12,
    month: 'DICIEMBRE',
    monthName: 'Diciembre',
    monthIndex: 11,
    year: '2026',
    yearNumber: 2026,
    long: 'Diciembre 12, 2026',
  },
  participation: {
    title: 'Invitación de participación',
    paragraph:
      'Queremos con gratitud que nos unamos en una ofrenda que sin duda fortalecera nuestra Asociación.',
    qrLabel: 'QR de donación',
  },
  calendarUrl:
    'https://www.google.com/calendar/render?action=TEMPLATE&text=15%20A%C3%B1os%20-%20Asociaci%C3%B3n%20Sur%20de%20Bogot%C3%A1&dates=20261212/20261213&details=La%20Asociaci%C3%B3n%20Sur%20de%20Bogot%C3%A1%20tiene%20el%20privilegio%20de%20invitarte%20a%20celebrar%20juntos%20con%20gratitud%2015%20a%C3%B1os%20de%20bondad%2C%20cuidado%20y%20misericordia.',
}

export const logoImage = encodeURI(`${base}Fotos/LOGO 15 AÑOS.png`)
export const qrImage = encodeURI(`${base}Fotos/Pago QR.png`)

export const photos = [
  { src: `${base}Fotos/fachadas/carmelo.jpg`, alt: 'Fachada de la Iglesia Adventista El Carmelo' },
  { src: `${base}Fotos/leyendo-biblia/asb4556.jpg`, alt: 'Hermano leyendo la Biblia' },
  { src: `${base}Fotos/orando/asb4804.jpg`, alt: 'Hermana orando' },
  { src: `${base}Fotos/bautizando/dsc01464.jpg`, alt: 'Bautismo en la iglesia' },
  { src: `${base}Fotos/zamar/dsc02205.jpg`, alt: 'Grupo Zamar' },

  { src: `${base}Fotos/fachadas/distrito-betania.jpg`, alt: 'Fachada de la Iglesia Adventista Distrito Betania' },
  { src: `${base}Fotos/leyendo-biblia/dsc01944.jpg`, alt: 'Biblia abierta durante la lectura' },
  { src: `${base}Fotos/orando/asb4805.jpg`, alt: 'Hermana orando' },
  { src: `${base}Fotos/bautizando/dsc04637.jpg`, alt: 'Pastor bautizando' },
  { src: `${base}Fotos/zamar/dsc02207.jpg`, alt: 'Grupo Zamar' },

  { src: `${base}Fotos/fachadas/palestina.jpg`, alt: 'Fachada de la Iglesia Adventista Palestina' },
  { src: `${base}Fotos/leyendo-biblia/dsc01968.jpg`, alt: 'Hermano leyendo la Biblia' },
  { src: `${base}Fotos/orando/dsc04494.jpg`, alt: 'Hermana orando' },
  { src: `${base}Fotos/bautizando/dsc04639.jpg`, alt: 'Pastor bautizando' },
  { src: `${base}Fotos/zamar/dsc02209.jpg`, alt: 'Grupo Zamar' },

  { src: `${base}Fotos/leyendo-biblia/img-4633.jpg`, alt: 'Biblia abierta' },
  { src: `${base}Fotos/orando/dsc04496.jpg`, alt: 'Hermano orando' },
  { src: `${base}Fotos/leyendo-biblia/img-9723.jpg`, alt: 'Manos sosteniendo la Biblia' },
]

export const envelopePhoto = `${base}Fotos/fachadas/carmelo.jpg`
