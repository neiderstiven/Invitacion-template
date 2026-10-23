// BASE_URL termina en '/', así que respeta el subpath de GitHub Pages
// (/Invitacion-template/) y la raíz en local o en un dominio propio.
const base = import.meta.env.BASE_URL

export const THEME = `${base}images/themes/minimalism-dark-brown`

export const wedding = {
  couple: {
    first: 'Facundo',
    second: 'Delfina',
    firstFull: 'Facundo Lastra Quiroga',
    secondFull: 'Delfina Zubiría Alcorta',
    ampersand: '&',
  },
  hero: {
    kicker: 'Nuestra Boda',
    invitationLine: 'Les Invitamos Cordialmente',
  },
  date: {
    iso: '2027-09-18T17:30:00-03:00',
    day: '18',
    month: 'SEPTIEMBRE',
    year: '2027',
    weekday: 'SÁBADO',
    long: '18 de septiembre de 2027',
  },
  families: {
    left: {
      prefix: 'Sr. y Sra.',
      names: ['Facundo Lastra Quiroga', 'Luciana Lastra Quiroga'],
    },
    right: {
      prefix: 'Sr. y Sra.',
      names: ['Matías Zubiría Alcorta', 'Delfina Zubiría Alcorta'],
    },
    blessing:
      'Con la bendición de nuestras familias, queremos compartir con ustedes el día en que comenzamos nuestra vida juntos.',
  },
  ceremony: {
    label: 'CEREMONIA RELIGIOSA',
    place: 'Basílica de San Francisco',
    time: '17:30',
    timeLabel: 'A LAS 17:30',
  },
  reception: {
    label: 'RECEPCIÓN',
    place: 'Bodega Salentein',
    city: 'Mendoza',
    time: '19:00',
    timeLabel: 'A LAS 19:00',
    intro: 'La recepción se llevará a cabo a las:',
    welcomeTime: '16:30',
    receptionTime: '19:00',
  },
  map: {
    // OpenStreetMap embed keeps the section usable without a private API key.
    embedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-69.3200%2C-33.7600%2C-69.2300%2C-33.6900&layer=mapnik&marker=-33.7250%2C-69.2750',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bodega+Salentein,+Mendoza',
  },
  calendarUrl:
    'https://www.google.com/calendar/render?action=TEMPLATE&text=Boda%20de%20Facundo%20Lastra%20Quiroga%20y%20Delfina%20Zub%C3%ADr%C3%ADa%20Alcorta&dates=20270918T203000Z/20270919T040000Z&details=Tenemos%20el%20honor%20de%20invitarles%20a%20la%20boda%20de%20Facundo%20Lastra%20Quiroga%20y%20Delfina%20Zubir%C3%ADa%20Alcorta%20en%20Bodega%20Salentein%0AMendoza&location=Bodega%20Salentein%2C%20Mendoza',
  dressCode: {
    title: 'DRESS CODE',
    subtitle: 'Vestimenta para la fiesta',
    palette: ['#432b14', '#6b533c', '#e3cbb4'],
  },
  program: [
    { time: '17:30', label: 'Ceremonia religiosa' },
    { time: '19:00', label: 'Cóctel de bienvenida', icon: 'alcohol' },
    { time: '20:00', label: 'Entrada de los novios', icon: 'cake' },
    { time: '20:30', label: 'Cena', icon: 'bird' },
    { time: '21:30', label: 'Primer baile' },
    { time: '23:00', label: 'Fiesta' },
  ],
  gift: {
    paypalHandle: '@bodademo',
    paypalUrl: 'https://paypal.me/bodademo',
    note: 'Su presencia será el mejor regalo que podríamos recibir.',
  },
}

export const photos = [
  { src: `${base}images/photos/photo4.webp`, alt: 'Facundo y Delfina en el jardín' },
  { src: `${base}images/photos/photo1.webp`, alt: 'Los novios abrazados al atardecer' },
  { src: `${base}images/photos/photo2.webp`, alt: 'Retrato de los novios entre flores' },
  { src: `${base}images/photos/photo3.webp`, alt: 'Los novios caminando de la mano' },
]

export const envelopePhoto = `${base}images/photos/photo1.webp`

export type Wish = {
  id: string
  name: string
  message: string
  date: string
}

export const seedWishes: Wish[] = [
  {
    id: 'w1',
    name: 'Don Guillermo',
    message: 'Que su casa esté siempre llena de gente querida.',
    date: '23/3/2027, 9:00:00',
  },
  {
    id: 'w2',
    name: 'Gabriela y Tomás',
    message: 'Muchas felicidades. Se ganaron esta fiesta y mucho más.',
    date: '24/3/2027, 10:00:00',
  },
  {
    id: 'w3',
    name: 'Familia Arteaga',
    message: 'Ojalá la vida les dé la mitad de lo que ustedes dan a los demás.',
    date: '25/3/2027, 11:00:00',
  },
  {
    id: 'w4',
    name: 'Los tíos de Guadalajara',
    message: 'Brindamos por ustedes, hoy y siempre.',
    date: '26/3/2027, 12:00:00',
  },
  {
    id: 'w5',
    name: 'Lucía Hernández',
    message: 'Que lo bueno se multiplique y lo difícil se comparta.',
    date: '27/3/2027, 13:00:00',
  },
  {
    id: 'w6',
    name: 'Ricardo Ponce',
    message: 'Fue un día inolvidable. Gracias por tanto.',
    date: '28/3/2027, 14:00:00',
  },
  {
    id: 'w7',
    name: 'Familia Villalobos',
    message: 'Que sigan siendo ese equipo que todos admiramos.',
    date: '29/3/2027, 15:00:00',
  },
  {
    id: 'w8',
    name: 'Adriana y Óscar',
    message: 'Felicidades a las dos familias. Hoy ganamos todos.',
    date: '30/3/2027, 16:00:00',
  },
]

export const wishSuggestions = [
  'Que su amor siga creciendo con cada amanecer compartido.',
  'Gracias por invitarnos a celebrar algo tan bonito. ¡Salud!',
  'Que nunca les falten motivos para reír juntos.',
  'Hoy empieza la mejor parte de su historia.',
  'Brindamos por ustedes y por todos los días que vienen.',
]
