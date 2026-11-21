/* ==========================================================
   BASE DE DATOS MUNDIAL MASIVA: ÁFRICA, RUSIA, AUSTRALIA Y MÁS
   ========================================================== */
const BASE_DATOS_MUNDIAL = [
   // --- SUDAMÉRICA (AMPLIADO AL MÁXIMO) ---
    { id: 1, ciudad: "Buenos Aires", pais: "Argentina", continente: "América del Sur", categoria: "Cultura", coords: [-34.6037, -58.3816], fechas: "12 may. - 22 may.", escalas: "1 escala", precioUSD: 510, img: "https://images.unsplash.com/photo-1612294037637-ec32374e2846?w=600&q=80", desc: "El Obelisco, tango en San Telmo y arquitectura porteña.", transporte: "Subte histórico y colectivos.", comida: "Asado argentino y empanadas.", clima: "Templado." },
    { id: 2, ciudad: "Bariloche", pais: "Argentina", continente: "América del Sur", categoria: "Aventura", coords: [-41.1334, -71.3103], fechas: "10 jun. - 18 jun.", escalas: "1 escala", precioUSD: 540, img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80", desc: "Lagos cristalinos, bosques andinos y chocolates artesanales.", transporte: "Autobuses turísticos y remises.", comida: "Cordero patagónico y chocolates.", clima: "Fresco de montaña." },
    { id: 3, ciudad: "Bogotá", pais: "Colombia", continente: "América del Sur", categoria: "Cultura", coords: [4.7110, -74.0721], fechas: "10 mar. - 17 mar.", escalas: "Directo", precioUSD: 220, img: "https://images.unsplash.com/photo-1599818814765-4d33f7c465d7?w=600&q=80", desc: "Monserrate, Museo del Oro y la Candelaria colonial.", transporte: "TransMilenio.", comida: "Ajiaco santafereño.", clima: "Fresco de montaña." },
    { id: 4, ciudad: "Medellín", pais: "Colombia", continente: "América del Sur", categoria: "Ciudad", coords: [6.2476, -75.5658], fechas: "14 abr. - 21 abr.", escalas: "Directo", precioUSD: 240, img: "https://images.unsplash.com/photo-1591123202445-5613e2a70470?w=600&q=80", desc: "La ciudad de la eterna primavera, metrocable y flores.", transporte: "Metro y Metrocable.", comida: "Bandeja paisa y arepas.", clima: "Templado primaveral." },
    { id: 5, ciudad: "Río de Janeiro", pais: "Brasil", continente: "América del Sur", categoria: "Playa", coords: [-22.9068, -43.1729], fechas: "6 jun. - 15 jun.", escalas: "1 escala", precioUSD: 460, img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80", desc: "Cristo Redentor, Pan de Azúcar y Copacabana.", transporte: "Metro rápido.", comida: "Feijoada y churrasco.", clima: "Tropical húmedo." },
    { id: 6, ciudad: "São Paulo", pais: "Brasil", continente: "América del Sur", categoria: "Ciudad", coords: [-23.5505, -46.6333], fechas: "1 jul. - 9 jul.", escalas: "1 escala", precioUSD: 480, img: "https://images.unsplash.com/photo-1543489822-c49534f3c509?w=600&q=80", desc: "La gran metrópolis financiera, arte urbano y gastronomía mundial.", transporte: "Metro subterráneo.", comida: "Coxinha y feijoada paulista.", clima: "Subtropical." },
    { id: 7, ciudad: "Santiago", pais: "Chile", continente: "América del Sur", categoria: "Ciudad", coords: [-33.4489, -70.6693], fechas: "14 abr. - 21 abr.", escalas: "1 escala", precioUSD: 390, img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80", desc: "Moderna capital rodeada por la Cordillera de los Andes.", transporte: "Metro moderno.", comida: "Pastel de choclo y vinos.", clima: "Mediterráneo seco." },
    { id: 8, ciudad: "Lima", pais: "Perú", continente: "América del Sur", categoria: "Cultura", coords: [-12.0464, -77.0428], fechas: "5 may. - 12 may.", escalas: "Directo", precioUSD: 310, img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80", desc: "Capital gastronómica mundial con acantilados frente al mar.", transporte: "Metropolitano.", comida: "Ceviche peruano.", clima: "Subtropical árido." },
    { id: 9, ciudad: "Cusco", pais: "Perú", continente: "América del Sur", categoria: "Aventura", coords: [-13.5319, -71.9675], fechas: "15 ago. - 23 ago.", escalas: "1 escala", precioUSD: 350, img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80", desc: "Ombligo del mundo inca y puerta de entrada a Machu Picchu.", transporte: "Colectivos y trenes andinos.", comida: "Cuy chactado y sopa criolla.", clima: "Frío de altura." },
    { id: 10, ciudad: "Quito", pais: "Ecuador", continente: "América del Sur", categoria: "Cultura", coords: [-0.1807, -78.4678], fechas: "20 feb. - 27 feb.", escalas: "1 escala", precioUSD: 270, img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=80", desc: "Centro histórico colonial en las faldas del Pichincha.", transporte: "Trolebús.", comida: "Locro de papa.", clima: "Andino templado." },
    { id: 11, ciudad: "Montevideo", pais: "Uruguay", continente: "América del Sur", categoria: "Playa", coords: [-34.9011, -56.1645], fechas: "10 nov. - 18 nov.", escalas: "1 escala", precioUSD: 440, img: "https://images.unsplash.com/photo-1612257404901-f34e3226a27e?w=600&q=80", desc: "La rambla costera más larga y ambiente bohemio.", transporte: "Autobuses urbanos.", comida: "Chivito uruguayo.", clima: "Templado oceánico." },
    { id: 12, ciudad: "Caracas", pais: "Venezuela", continente: "América del Sur", categoria: "Cultura", coords: [10.4806, -66.9036], fechas: "12 jul. - 20 jul.", escalas: "1 escala", precioUSD: 380, img: "https://images.unsplash.com/photo-1580655650638-3f5f3e9b14f0?w=600&q=80", desc: "Valle tropical custodiado por el Ávila.", transporte: "Metro.", comida: "Pabellón criollo.", clima: "Tropical de sabana." },
    { id: 13, ciudad: "La Paz", pais: "Bolivia", continente: "América del Sur", categoria: "Cultura", coords: [-16.5000, -68.1500], fechas: "3 ago. - 10 ago.", escalas: "1 escala", precioUSD: 410, img: "https://images.unsplash.com/photo-1528701800487-ba01fea490c0?w=600&q=80", desc: "La metrópolis más alta del mundo con teleféricos.", transporte: "Mi Teleférico.", comida: "Salteñas bolivianas.", clima: "De alta montaña." },
    { id: 14, ciudad: "Asunción", pais: "Paraguay", continente: "América del Sur", categoria: "Cultura", coords: [-25.2637, -57.5759], fechas: "15 sep. - 22 sep.", escalas: "1 escala", precioUSD: 395, img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80", desc: "Ciudad verde con casonas históricas junto al río.", transporte: "Buses urbanos.", comida: "Sopa paraguaya.", clima: "Tropical cálido." },
// --- ÁFRICA (MUCHOS MÁS DESTINOS) ---
    { id: 1, ciudad: "El Cairo", pais: "Egipto", continente: "África", categoria: "Cultura", coords: [30.0444, 31.2357], fechas: "14 feb. - 24 feb.", escalas: "1 escala", precioUSD: 670, img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80", desc: "Las imponentes Pirámides de Giza y el místico río Nilo.", transporte: "Taxis oficiales y metro.", comida: "Koshari y falafel egipcio.", clima: "Desértico cálido." },
    { id: 2, ciudad: "Luxor", pais: "Egipto", continente: "África", categoria: "Cultura", coords: [25.6872, 32.6396], fechas: "20 feb. - 28 feb.", escalas: "1 escala", precioUSD: 710, img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80", desc: "El Valle de los Reyes, templos colosales de Karnak y globos sobre el Nilo.", transporte: "Caleches, ferris y taxis.", comida: "Ful medames y pan baladi.", clima: "Árido soleado." },
    { id: 3, ciudad: "Ciudad del Cabo", pais: "Sudáfrica", continente: "África", categoria: "Playa", coords: [-33.9249, 18.4241], fechas: "10 mar. - 20 mar.", escalas: "1 escala", precioUSD: 840, img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80", desc: "Table Mountain, viñedos y dos océanos unidos.", transporte: "Autobuses turísticos.", comida: "Bobotie y mariscos frescos.", clima: "Mediterráneo agradable." },
    { id: 4, ciudad: "Johannesburgo", pais: "Sudáfrica", continente: "África", categoria: "Ciudad", coords: [-26.2041, 28.0473], fechas: "12 abr. - 22 abr.", escalas: "1 escala", precioUSD: 810, img: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=600&q=80", desc: "La ciudad dorada, historia de Nelson Mandela y safaris cercanos.", transporte: "Gautrain y autobuses.", comida: "Braai (asado sudafricano).", clima: "Templado soleado." },
    { id: 5, ciudad: "Marrakech", pais: "Marruecos", continente: "África", categoria: "Cultura", coords: [31.6295, -7.9811], fechas: "5 abr. - 15 abr.", escalas: "Directo", precioUSD: 520, img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=600&q=80", desc: "Zocos vibrantes, palacios y la mágica plaza Jemaa el-Fna.", transporte: "Taxis y calesas tradicionales.", comida: "Cuscús y tagine marroquí.", clima: "Árido subtropical." },
    { id: 6, ciudad: "Casablanca", pais: "Marruecos", continente: "África", categoria: "Playa", coords: [33.5731, -7.5898], fechas: "18 may. - 28 may.", escalas: "Directo", precioUSD: 490, img: "https://images.unsplash.com/photo-1577948334690-34d3148102a7?w=600&q=80", desc: "La majestuosa Mezquita Hasán II frente al océano Atlántico.", transporte: "Tranvía y taxis.", comida: "Pastela marroquí y pescados.", clima: "Mediterráneo oceánico." },
    { id: 7, ciudad: "Nairobi", pais: "Kenia", continente: "África", categoria: "Aventura", coords: [-1.2921, 36.8219], fechas: "12 jul. - 22 jul.", escalas: "1 escala", precioUSD: 890, img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80", desc: "La capital del safari y puerta de entrada a la gran fauna salvaje.", transporte: "Matatus y taxis privados.", comida: "Ugali y carnes a la parrilla.", clima: "Agradable de tierras altas." },
    { id: 8, ciudad: "Zanzíbar", pais: "Tanzania", continente: "África", categoria: "Playa", coords: [-6.1659, 39.2026], fechas: "1 ago. - 10 ago.", escalas: "1 escala", precioUSD: 920, img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&q=80", desc: "Islas paradisíacas de arena blanca, especias y aguas turquesas.", transporte: "Taxis y lanchas.", comida: "Pilau y mariscos especiados.", clima: "Tropical cálido." },
    { id: 9, ciudad: "Accra", pais: "Ghana", continente: "África", categoria: "Cultura", coords: [5.6037, -0.1870], fechas: "14 sep. - 23 sep.", escalas: "1 escala", precioUSD: 760, img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80", desc: "Playas doradas, mercados de telas kente y música vibrante.", transporte: "Trotros y taxis.", comida: "Jollof rice y plátano frito.", clima: "Tropical costero." },
    { id: 10, ciudad: "Lagos", pais: "Nigeria", continente: "África", categoria: "Ciudad", coords: [6.5244, 3.3792], fechas: "3 oct. - 12 oct.", escalas: "1 escala", precioUSD: 790, img: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=600&q=80", desc: "El corazón musical y artístico de África Occidental.", transporte: "Autobuses BRT y ferris.", comida: "Suya y arroz jollof.", clima: "Tropical húmedo." },
    { id: 11, ciudad: "Adís Abeba", pais: "Etiopía", continente: "África", categoria: "Cultura", coords: [9.0320, 38.7469], fechas: "15 nov. - 25 nov.", escalas: "1 escala", precioUSD: 850, img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80", desc: "Cuna del café, historia milenaria y paisajes montañosos.", transporte: "Tren ligero y taxis.", comida: "Injera con guisos tradicionales.", clima: "Templado de montaña." },
    { id: 12, ciudad: "Túnez", pais: "Túnez", continente: "África", categoria: "Playa", coords: [36.8065, 10.1815], fechas: "8 jun. - 17 jun.", escalas: "1 escala", precioUSD: 580, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80", desc: "Ruinas de Cartago y pueblos blancos y azules junto al Mediterráneo.", transporte: "Metro ligero TGM.", comida: "Brik y cuscús tunecino.", clima: "Mediterráneo." },

    // --- RUSIA (AMPLIADO DE OESTE A ESTE) ---
    { id: 13, ciudad: "Moscú", pais: "Rusia", continente: "Europa", categoria: "Cultura", coords: [55.7558, 37.6173], fechas: "10 ago. - 20 ago.", escalas: "1 escala", precioUSD: 690, img: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&q=80", desc: "La imponente Plaza Roja, el Kremlin y las cúpulas de San Basilio.", transporte: "Metro de Moscú.", comida: "Borsch y blinis rusos.", clima: "Continental frío." },
    { id: 14, ciudad: "San Petersburgo", pais: "Rusia", continente: "Europa", categoria: "Cultura", coords: [59.9343, 30.3351], fechas: "18 ago. - 28 ago.", escalas: "1 escala", precioUSD: 720, img: "https://images.unsplash.com/photo-1520106212299-d99c44aac83b?w=600&q=80", desc: "La Venecia del Norte, el Museo Hermitage y palacios imperiales.", transporte: "Metro y tranvías.", comida: "Pelmeni y estofado stroganoff.", clima: "Subártico templado." },
    { id: 15, ciudad: "Kazán", pais: "Rusia", continente: "Europa", categoria: "Cultura", coords: [55.8304, 49.0661], fechas: "1 sep. - 10 sep.", escalas: "1 escala", precioUSD: 660, img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", desc: "Fascinante mezcla de culturas rusa y tártara con su histórico Kremlin.", transporte: "Metro y autobuses.", comida: "Chak-chak y empanadas.", clima: "Continental." },
    { id: 16, ciudad: "Sochi", pais: "Rusia", continente: "Europa", categoria: "Playa", coords: [43.5855, 39.7233], fechas: "15 sep. - 25 sep.", escalas: "1 escala", precioUSD: 640, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", desc: "El gran balneario ruso a orillas del Mar Negro junto a montañas nevadas.", transporte: "Autobuses y trenes.", comida: "Shashlik caucásico.", clima: "Subtropical húmedo." },
    { id: 17, ciudad: "Ekaterimburgo", pais: "Rusia", continente: "Asia", categoria: "Cultura", coords: [56.8389, 60.6057], fechas: "12 oct. - 21 oct.", escalas: "1 escala", precioUSD: 730, img: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=600&q=80", desc: "La puerta de los Montes Urales, frontera natural entre Europa y Asia.", transporte: "Metro y tranvías.", comida: "Ural pelmeni.", clima: "Continental." },
    { id: 18, ciudad: "Novosibirsk", pais: "Rusia", continente: "Asia", categoria: "Ciudad", coords: [55.0084, 82.9357], fechas: "5 oct. - 15 oct.", escalas: "1 escala", precioUSD: 750, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", desc: "La capital de Siberia, teatros colosales y cultura siberiana.", transporte: "Metro y tranvías.", comida: "Pescado del río Obi y estofados.", clima: "Continental extremo." },
    { id: 19, ciudad: "Irkutsk (Lago Baikal)", pais: "Rusia", continente: "Asia", categoria: "Aventura", coords: [52.2869, 104.3050], fechas: "12 feb. - 22 feb.", escalas: "1 escala", precioUSD: 820, img: "https://images.unsplash.com/photo-1551844931-42874c9037e9?w=600&q=80", desc: "Acceso al lago más profundo y cristalino del planeta en plena Siberia.", transporte: "Tren Transiberiano y minibuses.", comida: "Pescado omul ahumado.", clima: "Subártico." },
    { id: 20, ciudad: "Vladivostok", pais: "Rusia", continente: "Asia", categoria: "Ciudad", coords: [43.1332, 131.9113], fechas: "20 sep. - 30 sep.", escalas: "1 escala", precioUSD: 860, img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", desc: "Puentes colgantes gigantes sobre el Pacífico al final del Transiberiano.", transporte: "Funicular y autobuses.", comida: "Cangrejo real de Kamchatka.", clima: "Monzónico templado." },

    // --- AUSTRALIA Y OCEANÍA ---
    { id: 13, ciudad: "Sídney", pais: "Australia", continente: "Oceanía", categoria: "Playa", coords: [-33.8688, 151.2093], fechas: "15 nov. - 28 nov.", escalas: "1 escala", precioUSD: 1150, img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80", desc: "Opera House, el puente de la bahía y playas de surf mundial.", transporte: "Ferris y trenes.", comida: "Asado australiano y mariscos.", clima: "Templado soleado." },
    { id: 14, ciudad: "Melbourne", pais: "Australia", continente: "Oceanía", categoria: "Cultura", coords: [-37.8136, 144.9631], fechas: "1 dic. - 14 dec.", escalas: "1 escala", precioUSD: 1120, img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&q=80", desc: "Callejones llenos de arte urbano, cafés de especialidad y tranvías.", transporte: "Red de tranvías históricos.", comida: "Gastronomía internacional y brunch.", clima: "Oceánico variable." },
    { id: 15, ciudad: "Brisbane", pais: "Australia", continente: "Oceanía", categoria: "Playa", coords: [-27.4698, 153.0251], fechas: "10 ene. - 22 ene.", escalas: "1 escala", precioUSD: 1100, img: "https://images.unsplash.com/photo-1568849676085-51417d0c7529?w=600&q=80", desc: "Clima subtropical, río serpenteante y cercanía a la Costa Dorada.", transporte: "Ferries CityCat y trenes.", comida: "Carnes y barbacoa australiana.", clima: "Subtropical cálido." },
    { id: 16, ciudad: "Auckland", pais: "Nueva Zelanda", continente: "Oceanía", categoria: "Ciudad", coords: [-36.8485, 174.7633], fechas: "1 dec. - 14 dec.", escalas: "1 escala", precioUSD: 1200, img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80", desc: "La ciudad de las velas, volcanes y paisajes de película.", transporte: "Ferrys y autobuses.", comida: "Cordero neozelandés.", clima: "Templado marítimo." },

   // --- EL CARIBE Y CENTROAMÉRICA (AMPLIADO MASIVAMENTE) ---
    { id: 1, ciudad: "Santo Domingo", pais: "República Dominicana", continente: "Norte y Centroamérica", categoria: "Playa", coords: [18.4861, -69.9312], fechas: "1 mar. - 8 mar.", escalas: "Directo", precioUSD: 130, img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80", desc: "La Zona Colonial histórica, malecón y alegría caribeña.", transporte: "Metro y taxis oficiales.", comida: "La bandera dominicana y sancocho.", clima: "Tropical cálido." },
    { id: 2, ciudad: "Punta Cana", pais: "República Dominicana", continente: "Norte y Centroamérica", categoria: "Playa", coords: [18.5601, -68.3725], fechas: "10 abr. - 17 abr.", escalas: "Directo", precioUSD: 195, img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80", desc: "Playas paradisíacas de arena blanca, cocoteros y resorts de lujo.", transporte: "Taxis turísticos y traslados.", comida: "Pescado con coco y mofongo.", clima: "Tropical caribeño." },
    { id: 3, ciudad: "Puerto Plata", pais: "República Dominicana", continente: "Norte y Centroamérica", categoria: "Playa", coords: [19.7934, -70.6884], fechas: "15 may. - 22 may.", escalas: "Directo", precioUSD: 160, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", desc: "El teleférico al monte Isabel de Torres, playas y casonas victorianas.", transporte: "Carros públicos y taxis.", comida: "Pescado con yaniqueque.", clima: "Tropical húmedo." },
    { id: 4, ciudad: "San Juan", pais: "Puerto Rico", continente: "Norte y Centroamérica", categoria: "Playa", coords: [18.4655, -66.1057], fechas: "5 jun. - 12 jun.", escalas: "Directo", precioUSD: 210, img: "https://images.unsplash.com/photo-1518639824613-2d1264c8c084?w=600&q=80", desc: "El histórico Viejo San Juan, murallas coloniales y playas de surf.", transporte: "Autobuses AMA y taxis.", comida: "Mofongo relleno y piña colada.", clima: "Cálido tropical." },
    { id: 5, ciudad: "La Habana", pais: "Cuba", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [23.1136, -82.3666], fechas: "12 jul. - 19 jul.", escalas: "1 escala", precioUSD: 280, img: "https://images.unsplash.com/photo-1500759285772-c046e700a94d?w=600&q=80", desc: "Autos clásicos retro, arquitectura colonial y música en las calles.", transporte: "Bicitaxis y almendrones.", comida: "Ropa vieja y mojitos.", clima: "Tropical soleado." },
    { id: 6, ciudad: "San José", pais: "Costa Rica", continente: "Norte y Centroamérica", categoria: "Aventura", coords: [9.9281, -84.0907], fechas: "4 abr. - 11 abr.", escalas: "Directo", precioUSD: 240, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", desc: "Pura vida, cafetales exuberantes, volcanes y biodiversidad única.", transporte: "Autobuses interurbanos.", comida: "Gallo pinto y casado.", clima: "Tropical agradable." },
    { id: 7, ciudad: "Ciudad de Panamá", pais: "Panamá", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [8.9824, -79.5199], fechas: "10 jun. - 17 jun.", escalas: "Directo", precioUSD: 210, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", desc: "Rascacielos modernos, el Casco Antiguo y el Canal interoceánico.", transporte: "Metro y taxis.", comida: "Sancocho panameño y carimañolas.", clima: "Tropical húmedo." },
    { id: 8, ciudad: "San Salvador", pais: "El Salvador", continente: "Norte y Centroamérica", categoria: "Aventura", coords: [13.6929, -89.2182], fechas: "20 ago. - 27 ago.", escalas: "Directo", precioUSD: 230, img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&q=80", desc: "Volcanes imponentes, surf de clase mundial y rutas de café.", transporte: "Autobuses y coasters.", comida: "Pupusas salvadoreñas.", clima: "Tropical cálido." },
    { id: 9, ciudad: "Ciudad de Guatemala", pais: "Guatemala", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [14.6349, -90.5069], fechas: "3 sep. - 10 sep.", escalas: "1 escala", precioUSD: 260, img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=80", desc: "Herencia maya, volcanes circundantes y cercanía a la colonial Antigua.", transporte: "Transmetro y taxis.", comida: "Pepián y fiambre.", clima: "Templado de altitud." },
    { id: 10, ciudad: "Kingston", pais: "Jamaica", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [17.9712, -76.7936], fechas: "14 oct. - 21 oct.", escalas: "1 escala", precioUSD: 290, img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80", desc: "La cuna del reggae, el Museo de Bob Marley y vibrante cultura caribeña.", transporte: "Minibuses y taxis.", comida: "Pollo jerk y ackee con bacalao.", clima: "Tropical cálido." },

    // --- SUDAMÉRICA (AMPLIADO AL MÁXIMO) ---
    { id: 11, ciudad: "Buenos Aires", pais: "Argentina", continente: "América del Sur", categoria: "Cultura", coords: [-34.6037, -58.3816], fechas: "12 may. - 22 may.", escalas: "1 escala", precioUSD: 510, img: "https://images.unsplash.com/photo-1612294037637-ec32374e2846?w=600&q=80", desc: "El Obelisco, tango en San Telmo y arquitectura porteña.", transporte: "Subte histórico y colectivos.", comida: "Asado argentino y empanadas.", clima: "Templado." },
    { id: 12, ciudad: "Bariloche", pais: "Argentina", continente: "América del Sur", categoria: "Aventura", coords: [-41.1334, -71.3103], fechas: "10 jun. - 18 jun.", escalas: "1 escala", precioUSD: 540, img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80", desc: "Lagos cristalinos, bosques andinos y chocolates artesanales.", transporte: "Autobuses turísticos y remises.", comida: "Cordero patagónico y chocolates.", clima: "Fresco de montaña." },
    { id: 13, ciudad: "Bogotá", pais: "Colombia", continente: "América del Sur", categoria: "Cultura", coords: [4.7110, -74.0721], fechas: "10 mar. - 17 mar.", escalas: "Directo", precioUSD: 220, img: "https://images.unsplash.com/photo-1588694924153-28eb9725f4cc?w=600&q=80", desc: "Monserrate, Museo del Oro y la Candelaria colonial.", transporte: "TransMilenio.", comida: "Ajiaco santafereño.", clima: "Fresco de montaña." },
    { id: 14, ciudad: "Medellín", pais: "Colombia", continente: "América del Sur", categoria: "Ciudad", coords: [6.2476, -75.5658], fechas: "14 abr. - 21 abr.", escalas: "Directo", precioUSD: 240, img: "https://images.unsplash.com/photo-1591123202445-5613e2a70470?w=600&q=80", desc: "La ciudad de la eterna primavera, metrocable y flores.", transporte: "Metro y Metrocable.", comida: "Bandeja paisa y arepas.", clima: "Templado primaveral." },
    { id: 15, ciudad: "Cartagena de Indias", pais: "Colombia", continente: "América del Sur", categoria: "Playa", coords: [10.3910, -75.4794], fechas: "1 may. - 8 may.", escalas: "Directo", precioUSD: 235, img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80", desc: "Ciudad amurallada colonial, atardeceres en el mar Caribe e islas.", transporte: "Taxis y lanchas.", comida: "Arroz con coco y pescado frito.", clima: "Tropical caluroso." },
    { id: 16, ciudad: "Río de Janeiro", pais: "Brasil", continente: "América del Sur", categoria: "Playa", coords: [-22.9068, -43.1729], fechas: "6 jun. - 15 jun.", escalas: "1 escala", precioUSD: 460, img: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80", desc: "Cristo Redentor, Pan de Azúcar y Copacabana.", transporte: "Metro rápido.", comida: "Feijoada y churrasco.", clima: "Tropical húmedo." },
    { id: 17, ciudad: "São Paulo", pais: "Brasil", continente: "América del Sur", categoria: "Ciudad", coords: [-23.5505, -46.6333], fechas: "1 jul. - 9 jul.", escalas: "1 escala", precioUSD: 480, img: "https://images.unsplash.com/photo-1543489822-c49534f3c509?w=600&q=80", desc: "La gran metrópolis financiera, arte urbano y gastronomía mundial.", transporte: "Metro subterráneo.", comida: "Coxinha y feijoada paulista.", clima: "Subtropical." },
    { id: 18, ciudad: "Santiago", pais: "Chile", continente: "América del Sur", categoria: "Ciudad", coords: [-33.4489, -70.6693], fechas: "14 abr. - 21 abr.", escalas: "1 escala", precioUSD: 390, img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80", desc: "Moderna capital rodeada por la Cordillera de los Andes.", transporte: "Metro moderno.", comida: "Pastel de choclo y vinos.", clima: "Mediterráneo seco." },
    { id: 19, ciudad: "Lima", pais: "Perú", continente: "América del Sur", categoria: "Cultura", coords: [-12.0464, -77.0428], fechas: "5 may. - 12 may.", escalas: "Directo", precioUSD: 310, img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80", desc: "Capital gastronómica mundial con acantilados frente al mar.", transporte: "Metropolitano.", comida: "Ceviche peruano.", clima: "Subtropical árido." },
    { id: 20, ciudad: "Cusco", pais: "Perú", continente: "América del Sur", categoria: "Aventura", coords: [-13.5319, -71.9675], fechas: "15 ago. - 23 ago.", escalas: "1 escala", precioUSD: 350, img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=80", desc: "Ombligo del mundo inca y puerta de entrada a Machu Picchu.", transporte: "Colectivos y trenes andinos.", comida: "Cuy chactado y sopa criolla.", clima: "Frío de altura." },
    { id: 21, ciudad: "Quito", pais: "Ecuador", continente: "América del Sur", categoria: "Cultura", coords: [-0.1807, -78.4678], fechas: "20 feb. - 27 feb.", escalas: "1 escala", precioUSD: 270, img: "https://images.unsplash.com/photo-1599818814765-4d33f7c465d7?w=600&q=80", desc: "Centro histórico colonial en las faldas del volcán Pichincha.", transporte: "Trolebús.", comida: "Locro de papa y hornado.", clima: "Andino templado." },
    { id: 22, ciudad: "Montevideo", pais: "Uruguay", continente: "América del Sur", categoria: "Playa", coords: [-34.9011, -56.1645], fechas: "10 nov. - 18 nov.", escalas: "1 escala", precioUSD: 440, img: "https://images.unsplash.com/photo-1612257404901-f34e3226a27e?w=600&q=80", desc: "La rambla costera más larga y ambiente bohemio.", transporte: "Autobuses urbanos.", comida: "Chivito uruguayo.", clima: "Templado oceánico." },
    { id: 23, ciudad: "Caracas", pais: "Venezuela", continente: "América del Sur", categoria: "Cultura", coords: [10.4806, -66.9036], fechas: "12 jul. - 20 jul.", escalas: "1 escala", precioUSD: 380, img: "https://images.unsplash.com/photo-1580655650638-3f5f3e9b14f0?w=600&q=80", desc: "Valle tropical custodiado por el imponente cerro El Ávila.", transporte: "Metro.", comida: "Pabellón criollo y arepas.", clima: "Tropical de sabana." },
    { id: 24, ciudad: "La Paz", pais: "Bolivia", continente: "América del Sur", categoria: "Cultura", coords: [-16.5000, -68.1500], fechas: "3 ago. - 10 ago.", escalas: "1 escala", precioUSD: 410, img: "https://images.unsplash.com/photo-1578593139857-418018e69830?w=600&q=80", desc: "La metrópolis más alta del mundo conectada por teleféricos.", transporte: "Mi Teleférico.", comida: "Salteñas bolivianas.", clima: "De alta montaña." },
    { id: 25, ciudad: "Asunción", pais: "Paraguay", continente: "América del Sur", categoria: "Cultura", coords: [-25.2637, -57.5759], fechas: "15 sep. - 22 sep.", escalas: "1 escala", precioUSD: 395, img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80", desc: "Ciudad verde con casonas históricas junto a la bahía del río.", transporte: "Buses urbanos.", comida: "Sopa paraguaya y chipa.", clima: "Tropical cálido." },
    // --- ASIA (AMPLIADO MASIVAMENTE) ---
    { id: 19, ciudad: "Tokio", pais: "Japón", continente: "Asia", categoria: "Ciudad", coords: [35.6762, 139.6503], fechas: "10 oct. - 22 oct.", escalas: "1 escala", precioUSD: 950, img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", desc: "Tecnología futurista y templos ancestrales.", transporte: "Trenes impecables.", comida: "Sushi fresco y ramen.", clima: "Templado." },
    { id: 20, ciudad: "Kioto", pais: "Japón", continente: "Asia", categoria: "Cultura", coords: [35.0116, 135.7681], fechas: "15 oct. - 25 oct.", escalas: "1 escala", precioUSD: 980, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80", desc: "Antiguas pagodas, bosques de bambú y jardines zen tradicionales.", transporte: "Autobuses y metro.", comida: "Gastronomía kaiseki y té matcha.", clima: "Templado de montaña." },
    { id: 21, ciudad: "Pekín", pais: "China", continente: "Asia", categoria: "Cultura", coords: [39.9042, 116.4074], fechas: "5 nov. - 15 nov.", escalas: "1 escala", precioUSD: 890, img: "https://images.unsplash.com/photo-1508804052814-cd3826529baf?w=600&q=80", desc: "La Gran Muralla y la Ciudad Prohibida.", transporte: "Metro subterráneo.", comida: "Pato laqueado de Pekín.", clima: "Continental templado." },
    { id: 22, ciudad: "Shanghái", pais: "China", continente: "Asia", categoria: "Ciudad", coords: [31.2304, 121.4737], fechas: "12 nov. - 22 nov.", escalas: "1 escala", precioUSD: 870, img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", desc: "El famoso Malecón (The Bund) y rascacielos futuristas.", transporte: "Metro rápido y Maglev.", comida: "Dumplings (Xiao Long Bao).", clima: "Subtropical húmedo." },
    { id: 23, ciudad: "Bangkok", pais: "Tailandia", continente: "Asia", categoria: "Cultura", coords: [13.7563, 100.5018], fechas: "12 dic. - 22 dic.", escalas: "1 escala", precioUSD: 780, img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80", desc: "Templos budistas dorados y vibrante vida callejera.", transporte: "Skytrain BTS y tuk-tuks.", comida: "Pad Thai y curry verde.", clima: "Tropical cálido." },
    { id: 24, ciudad: "Phuket", pais: "Tailandia", continente: "Asia", categoria: "Playa", coords: [7.8804, 98.3923], fechas: "18 dic. - 28 dic.", escalas: "1 escala", precioUSD: 810, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", desc: "Playas paradisíacas de arena blanca y aguas cristalinas.", transporte: "Taxis y ferris.", comida: "Pescado fresco y mariscos al grill.", clima: "Tropical monzónico." },
    { id: 25, ciudad: "Seúl", pais: "Corea del Sur", continente: "Asia", categoria: "Ciudad", coords: [37.5665, 126.9780], fechas: "10 sep. - 20 sep.", escalas: "1 escala", precioUSD: 820, img: "https://images.unsplash.com/photo-1538485399061-17730e7553ff?w=600&q=80", desc: "Palacios reales junto a tecnología de punta y K-culture.", transporte: "Metro ultramoderno.", comida: "Barbacoa coreana y kimchi.", clima: "Continental templado." },
    { id: 26, ciudad: "Singapur", pais: "Singapur", continente: "Asia", categoria: "Ciudad", coords: [1.3521, 103.8198], fechas: "3 oct. - 12 oct.", escalas: "1 escala", precioUSD: 860, img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", desc: "Marina Bay Sands, jardines botánicos futuristas y limpieza impecable.", transporte: "MRT (Metro rápido).", comida: "Chilli crab y laksa.", clima: "Ecuatorial cálido." },
    { id: 27, ciudad: "Dubái", pais: "Emiratos Árabes Unidos", continente: "Asia", categoria: "Ciudad", coords: [25.2048, 55.2708], fechas: "10 ene. - 18 ene.", escalas: "Directo", precioUSD: 850, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", desc: "Rascacielos futuristas como el Burj Khalifa y lujo en el desierto.", transporte: "Metro sin conductor.", comida: "Shawarma y alta cocina.", clima: "Desértico cálido." },
    { id: 28, ciudad: "Nueva Delhi", pais: "India", continente: "Asia", categoria: "Cultura", coords: [28.6139, 77.2090], fechas: "5 feb. - 15 feb.", escalas: "1 escala", precioUSD: 790, img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80", desc: "El Fuerte Rojo, templos históricos y mercados aromáticos.", transporte: "Metro de Delhi y rickshaws.", comida: "Curry especiado y pan Naan.", clima: "Monzónico cálido." },

// --- ESTADOS UNIDOS (COSTA A COSTA) ---
    { id: 21, ciudad: "Miami", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Playa", coords: [25.7617, -80.1918], fechas: "3 dic. - 7 dic.", escalas: "Directo", precioUSD: 145, img: "https://images.unsplash.com/photo-1506966953602-c20cc110f5e3?w=600&q=80", desc: "Playas de sol radiante y vida nocturna en South Beach.", transporte: "Tranvías gratuitos.", comida: "Sándwich cubano y mariscos.", clima: "Cálido todo el año." },
    { id: 22, ciudad: "Nueva York", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [40.7128, -74.0060], fechas: "10 abr. - 18 abr.", escalas: "Directo", precioUSD: 210, img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80", desc: "La gran manzana: Times Square, Central Park y Broadway.", transporte: "Metro 24 horas.", comida: "Pizza al estilo neoyorquino y bagels.", clima: "Estaciones bien definidas." },
    { id: 23, ciudad: "Los Ángeles", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Playa", coords: [34.0522, -118.2437], fechas: "15 may. - 22 may.", escalas: "Directo", precioUSD: 280, img: "https://images.unsplash.com/photo-1534190768065-44c1e57c64e0?w=600&q=80", desc: "Hollywood, el cartel emblemático y las playas de Santa Monica.", transporte: "Autobuses y metro ligero.", comida: "Tacos californianos y hamburguesas.", clima: "Soleado y mediterráneo." },
    { id: 24, ciudad: "San Francisco", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [37.7749, -122.4194], fechas: "5 jun. - 12 jun.", escalas: "1 escala", precioUSD: 310, img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80", desc: "El puente Golden Gate, tranvías históricos y la bahía.", transporte: "BART y tranvías.", comida: "Clam chowder en pan de masa madre.", clima: "Fresco y neblinoso." },
    { id: 25, ciudad: "Orlando", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Familia", coords: [28.5383, -81.3792], fechas: "12 jul. - 19 jul.", escalas: "Directo", precioUSD: 190, img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80", desc: "La capital mundial de los parques temáticos y la magia.", transporte: "Autobuses turísticos y alquiler de autos.", comida: "Gastronomía internacional y americana.", clima: "Cálido y tropical." },
    { id: 26, ciudad: "Chicago", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [41.8781, -87.6298], fechas: "20 may. - 27 may.", escalas: "Directo", precioUSD: 245, img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80", desc: "Rascacielos icónicos, el Millennium Park y el Lago Michigan.", transporte: "Tren elevado 'L'.", comida: "Deep-dish pizza y hot dogs.", clima: "Continental ventoso." },
    { id: 27, ciudad: "Las Vegas", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [36.1699, -115.1398], fechas: "8 sep. - 14 sep.", escalas: "1 escala", precioUSD: 295, img: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=600&q=80", desc: "Espectáculos mundiales, luces de neón y cercanía al Gran Cañón.", transporte: "Monorraíl y autobuses Deuce.", comida: "Buffets gourmet y alta cocina.", clima: "Desértico seco." },
    { id: 28, ciudad: "Seattle", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [47.6062, -122.3321], fechas: "14 jul. - 21 jul.", escalas: "1 escala", precioUSD: 330, img: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=600&q=80", desc: "La Space Needle, cultura cafetera y bosques del Pacífico.", transporte: "Link Light Rail y ferris.", comida: "Salmón fresco y café de especialidad.", clima: "Oceánico fresco." },
    { id: 29, ciudad: "Boston", pais: "Estados Unidos", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [42.3601, -71.0589], fechas: "3 oct. - 10 oct.", escalas: "Directo", precioUSD: 230, img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80", desc: "Historia de la independencia, universidades prestigiosas y bahía.", transporte: "Metro 'T' histórico.", comida: "Rollos de langosta y clam chowder.", clima: "Continental costero." },

    // --- CANADÁ (MUCHAS MÁS CIUDADES) ---
    { id: 30, ciudad: "Toronto", pais: "Canadá", continente: "Norte y Centroamérica", categoria: "Ciudad", coords: [43.6532, -79.3832], fechas: "4 abr. - 11 abr.", escalas: "1 escala", precioUSD: 320, img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80", desc: "La imponente CN Tower y ambiente multicultural junto al lago.", transporte: "Sistema TTC integrado.", comida: "Gastronomía internacional de autor.", clima: "Continental." },
    { id: 31, ciudad: "Vancouver", pais: "Canadá", continente: "Norte y Centroamérica", categoria: "Aventura", coords: [49.2827, -123.1207], fechas: "18 ago. - 26 ago.", escalas: "1 escala", precioUSD: 360, img: "https://images.unsplash.com/photo-1559511239-b9d628d0987a?w=600&q=80", desc: "Montañas nevadas que se encuentran con el Océano Pacífico.", transporte: "Skytrain y SeaBus.", comida: "Salmón del Pacífico y mariscos.", clima: "Oceánico templado." },
    { id: 32, ciudad: "Montreal", pais: "Canadá", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [45.5017, -73.5673], fechas: "10 sep. - 17 sep.", escalas: "1 escala", precioUSD: 300, img: "https://images.unsplash.com/photo-1519178614-6867e5245842?w=600&q=80", desc: "Arquitectura europea, festivales y encanto francófono.", transporte: "Metro subterráneo.", comida: "Poutine y bagels de Montreal.", clima: "Continental húmedo." },
    { id: 33, ciudad: "Quebec", pais: "Canadá", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [46.8139, -71.2080], fechas: "15 dic. - 22 dic.", escalas: "1 escala", precioUSD: 340, img: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=600&q=80", desc: "El icónico Château Frontenac y calles empedradas de cuento.", transporte: "Autobuses RTC y funicular.", comida: "Tourtière y jarabe de arce.", clima: "Frío invernal mágico." },
    { id: 34, ciudad: "Calgary (Banff)", pais: "Canadá", continente: "Norte y Centroamérica", categoria: "Aventura", coords: [51.0447, -114.0719], fechas: "12 jul. - 20 jul.", escalas: "1 escala", precioUSD: 375, img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80", desc: "Puerta de entrada a las Montañas Rocosas y lagos turquesas.", transporte: "Tren ligero CTrain y buses.", comida: "Carne de Alberta y bisonte.", clima: "Alpino seco." },
    { id: 35, ciudad: "Ottawa", pais: "Canadá", continente: "Norte y Centroamérica", categoria: "Cultura", coords: [45.4215, -75.6972], fechas: "5 may. - 12 may.", escalas: "1 escala", precioUSD: 315, img: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?w=600&q=80", desc: "La Colina del Parlamento y el histórico Canal Rideau.", transporte: "O-Train y autobuses.", comida: "BeaverTails (pasteles canadienses).", clima: "Continental templado." },

    // --- EUROPA, ASIA, SUDAMÉRICA Y OCEANÍA (COMPLEMENTO) ---
    { id: 36, ciudad: "Madrid", pais: "España", continente: "Europa", categoria: "Cultura", coords: [40.4168, -3.7038], fechas: "14 abr. - 24 abr.", escalas: "Directo", precioUSD: 480, img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80", desc: "Museo del Prado, Palacio Real y ambiente nocturno vibrante.", transporte: "Metro impecable.", comida: "Tapas y cocido madrileño.", clima: "Mediterráneo continental." },
    { id: 37, ciudad: "París", pais: "Francia", continente: "Europa", categoria: "Cultura", coords: [48.8566, 2.3522], fechas: "3 may. - 12 may.", escalas: "Directo", precioUSD: 520, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", desc: "Torre Eiffel, el Sena y el arte atemporal del Louvre.", transporte: "RER y metro.", comida: "Croissants y alta cocina francesa.", clima: "Oceánico templado." },
    { id: 38, ciudad: "Roma", pais: "Italia", continente: "Europa", categoria: "Cultura", coords: [41.9028, 12.4964], fechas: "20 may. - 30 may.", escalas: "1 escala", precioUSD: 550, img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", desc: "El Coliseo romano, el Vaticano y la dolce vita.", transporte: "Tranvías y metro.", comida: "Pasta carbonara y pizza italiana.", clima: "Mediterráneo." },
    { id: 39, ciudad: "Tokio", pais: "Japón", continente: "Asia", categoria: "Ciudad", coords: [35.6762, 139.6503], fechas: "10 oct. - 22 oct.", escalas: "1 escala", precioUSD: 950, img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", desc: "Tecnología futurista y templos ancestrales.", transporte: "Trenes impecables.", comida: "Sushi fresco y ramen.", clima: "Templado." },
    { id: 40, ciudad: "Pekín", pais: "China", continente: "Asia", categoria: "Cultura", coords: [39.9042, 116.4074], fechas: "5 nov. - 15 nov.", escalas: "1 escala", precioUSD: 890, img: "https://images.unsplash.com/photo-1508804052814-cd3826529baf?w=600&q=80", desc: "La Gran Muralla y la Ciudad Prohibida.", transporte: "Metro subterráneo.", comida: "Pato laqueado de Pekín.", clima: "Continental templado." },
    { id: 41, ciudad: "Buenos Aires", pais: "Argentina", continente: "América del Sur", categoria: "Cultura", coords: [-34.6037, -58.3816], fechas: "12 may. - 22 may.", escalas: "1 escala", precioUSD: 510, img: "https://images.unsplash.com/photo-1612294037637-ec32374e2846?w=600&q=80", desc: "El Obelisco, tango en San Telmo y arquitectura porteña.", transporte: "Subte histórico y colectivos.", comida: "Asado argentino y empanadas.", clima: "Templado." },
    { id: 42, ciudad: "Sídney", pais: "Australia", continente: "Oceanía", categoria: "Playa", coords: [-33.8688, 151.2093], fechas: "15 nov. - 28 nov.", escalas: "1 escala", precioUSD: 1150, img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80", desc: "Opera House, el puente y playas de surf mundial.", transporte: "Ferris y trenes.", comida: "Asado australiano y mariscos.", clima: "Templado soleado." }
];

/* ==========================================================
   SECCIÓN 1: VARIABLES GLOBALES Y CATÁLOGOS DE DATOS
   ========================================================== */
let mapaMundial = null;
let grupoPinesMundial = null;
let destinoSeleccionadoActual = null;
let favoritosMundial = new Set();
let htmlVistaBuscadorOriginal = null;

let mesSeleccionadoFiltro = "Cualquiera";
let diasSeleccionadosFiltro = 14;
let fechaIdaSeleccionada = null;
let fechaVueltaSeleccionada = null;
let calAnioActual = 2026;
let calMesActual = 11; // Diciembre 2026

const monedaActual = {
    simbolo: "$",
    tasa: 1
};

const NOMBRES_MESES_LARGO = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const NOMBRES_MESES_CORTO = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];

/* Catálogo de aeropuertos para autocompletado del primer input (Origen) */
const AEROPUERTOS_AUTOCOMPLETADO = [
    { ciudad: "Lima, Perú", iata: "LIM", aeropuerto: "Internacional Jorge Chávez", soloCiudad: "Lima" },
    { ciudad: "Lisboa, Portugal", iata: "LIS", aeropuerto: "Lisboa", soloCiudad: "Lisboa" },
    { ciudad: "Los Ángeles, California, Estados Unidos", iata: "LAX", aeropuerto: "Internacional de Los Ángeles", soloCiudad: "Los Ángeles" },
    { ciudad: "Londres, Inglaterra, Reino Unido", iata: "LON", aeropuerto: "Todos los aeropuertos", soloCiudad: "Londres" },
    { ciudad: "Londres, Inglaterra, Reino Unido", iata: "LHR", aeropuerto: "Londres-Heathrow", soloCiudad: "Londres", esSub: true },
    { ciudad: "Londres, Inglaterra, Reino Unido", iata: "LGW", aeropuerto: "Londres-Gatwick", soloCiudad: "Londres", esSub: true },
    { ciudad: "Madrid, España", iata: "MAD", aeropuerto: "Adolfo Suárez Madrid-Barajas", soloCiudad: "Madrid" },
    { ciudad: "Medellín, Colombia", iata: "MDE", aeropuerto: "Todos los aeropuertos", soloCiudad: "Medellín" },
    { ciudad: "Medellín, Colombia", iata: "EOH", aeropuerto: "Enrique Olaya", soloCiudad: "Medellín", esSub: true },
    { ciudad: "Montevideo, Uruguay", iata: "MVD", aeropuerto: "Internacional de Carrasco", soloCiudad: "Montevideo" },
    { ciudad: "Miami, Florida, Estados Unidos", iata: "MIA", aeropuerto: "Internacional de Miami", soloCiudad: "Miami" },
    { ciudad: "Monterrey, Nuevo León, México", iata: "MTY", aeropuerto: "Internacional de Monterrey", soloCiudad: "Monterrey" },
    { ciudad: "Santo Domingo, Rep. Dom.", iata: "SDQ", aeropuerto: "Internacional Las Américas", soloCiudad: "Santo Domingo" },
    { ciudad: "Punta Cana, Rep. Dom.", iata: "PUJ", aeropuerto: "Internacional de Punta Cana", soloCiudad: "Punta Cana" },
    { ciudad: "Buenos Aires, Argentina", iata: "EZE", aeropuerto: "Todos los aeropuertos", soloCiudad: "Buenos Aires" },
    { ciudad: "Buenos Aires, Argentina", iata: "AEP", aeropuerto: "Aeroparque Jorge Newbery", soloCiudad: "Buenos Aires", esSub: true },
    { ciudad: "Bogotá, Colombia", iata: "BOG", aeropuerto: "Internacional El Dorado", soloCiudad: "Bogotá" },
    { ciudad: "Cancún, Quintana Roo, México", iata: "CUN", aeropuerto: "Internacional de Cancún", soloCiudad: "Cancún" },
    { ciudad: "París, Francia", iata: "CDG", aeropuerto: "Charles de Gaulle", soloCiudad: "París" },
    { ciudad: "Tokio, Japón", iata: "HND", aeropuerto: "Internacional de Haneda", soloCiudad: "Tokio" },
    { ciudad: "Nueva York, Estados Unidos", iata: "JFK", aeropuerto: "John F. Kennedy Internacional", soloCiudad: "Nueva York" },
    { ciudad: "Roma, Italia", iata: "FCO", aeropuerto: "Leonardo da Vinci–Fiumicino", soloCiudad: "Roma" },
    { ciudad: "Santiago, Chile", iata: "SCL", aeropuerto: "Arturo Merino Benítez", soloCiudad: "Santiago" }
];

/* Catálogo de Destinos Locales para el segundo input (Destino) */
const DESTINOS_LOCALES_GRID = [
    { nombre: "Francia", region: "Europa", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=200&q=80" },
    { nombre: "Reino Unido", region: "Europa", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&q=80" },
    { nombre: "España", region: "Europa", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=200&q=80" },
    { nombre: "Turquía", region: "Europa", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=200&q=80" },
    { nombre: "Estados Unidos", region: "Norteamérica", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=200&q=80" },
    { nombre: "Grecia", region: "Europa", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=200&q=80" },
    { nombre: "Italia", region: "Europa", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&q=80" },
    { nombre: "Tailandia", region: "Asia", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=200&q=80" },
    { nombre: "México", region: "Norteamérica", img: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=200&q=80" },
    { nombre: "Cualquier lugar", region: "Conoce tus opciones...", esCualquierLugar: true }
];

/* ==========================================================
   SECCIÓN 2: INICIALIZACIÓN AL CARGAR LA PÁGINA
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const btnRail = document.getElementById("btn-toggle-rail");
    const rail = document.getElementById("rail-lateral");
    if (btnRail && rail) {
        btnRail.addEventListener("click", () => rail.classList.toggle("abierto"));
    }

    mejorarMenusFiltros();
    inicializarSelectorFechasFlexibles();
    inicializarSelectorMoneda();
    configurarAutocompletadoInputs();

    if (typeof L !== 'undefined' && document.getElementById("mapa-leaflet-canvas")) {
        mapaMundial = L.map("mapa-leaflet-canvas", {
            zoomControl: false,
            worldCopyJump: true
        }).setView([15.0, -75.0], 3);

        L.control.zoom({ position: "bottomright" }).addTo(mapaMundial);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            attribution: 'Tiles &copy; Esri'
        }).addTo(mapaMundial);

        grupoPinesMundial = L.layerGroup().addTo(mapaMundial);

        if (typeof BASE_DATOS_MUNDIAL !== 'undefined') {
            filtrarDestinosMundiales();
        }
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest('.custom-select-wrapper')) {
            document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('abierto'));
        }
        if (!e.target.closest('.dropdown-moneda')) {
            document.querySelectorAll('.dropdown-moneda').forEach(d => d.classList.remove('activo'));
        }
    });

    setTimeout(() => {
        if (mapaMundial) mapaMundial.invalidateSize();
    }, 150);
});
/* ==========================================================
   SECCIÓN 3: AUTOCOMPLETADO EN VIVO (ORIGEN) Y CUADRÍCULA (DESTINO)
   ========================================================== */
function configurarAutocompletadoInputs() {
    // 1. Limpiar textos sueltos como "Destinos populares globales" que rompen la alineación
    const panelSubvista = document.querySelector(".panel-subvista");
    if (panelSubvista) {
        Array.from(panelSubvista.querySelectorAll("p, span, div, small, label")).forEach(el => {
            if (el.children.length === 0 && el.textContent.toLowerCase().includes("destinos populares globales")) {
                el.remove();
            }
        });
    }

    // 2. Detectar ambos inputs sin importar su ID
    const todosLosInputs = document.querySelectorAll(".inputs-origen-destino input");
    const inputOrigen = document.getElementById("input-origen") || todosLosInputs[0];
    const inputDestino = document.getElementById("input-busqueda-destino") || todosLosInputs[1];

    // 3. Crear Popover 1: Autocompletado de aeropuertos (Origen)
    let dropOrigen = document.getElementById("dropdown-autocompletado-global");
    if (!dropOrigen) {
        dropOrigen = document.createElement("div");
        dropOrigen.id = "dropdown-autocompletado-global";
        dropOrigen.className = "dropdown-autocompletado-aeropuertos";
        document.body.appendChild(dropOrigen);
    }

    // 4. Crear Popover 2: Cuadrícula de Destinos Locales (Destino)
    let dropDestino = document.getElementById("popover-destinos-locales");
    if (!dropDestino) {
        dropDestino = document.createElement("div");
        dropDestino.id = "popover-destinos-locales";
        dropDestino.className = "popover-destinos-locales";
        document.body.appendChild(dropDestino);
    }

    // --- EVENTOS PARA EL PRIMER INPUT (ORIGEN: MIAMI -> ESCRIBIR Y FILTRAR) ---
    if (inputOrigen) {
        // Quitar readonly para que puedas borrar "Miami (MIA)" y escribir libremente
        inputOrigen.removeAttribute("readonly");
        inputOrigen.readOnly = false;
        inputOrigen.placeholder = "Origen...";
        inputOrigen.style.cursor = "text";

        // Ocultar menús viejos del HTML si existen
        const viejoMenu = inputOrigen.parentElement?.querySelector(".menu-desplegable-flotante");
        if (viejoMenu) viejoMenu.remove();

        const abrirYFiltrarOrigen = () => {
            dropDestino.classList.remove("activo");
            const popFechas = document.getElementById("popover-fechas-flexibles");
            if (popFechas) popFechas.style.display = "none";
            document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('abierto'));

            const rect = inputOrigen.getBoundingClientRect();
            dropOrigen.style.top = `${rect.bottom + 8}px`;
            dropOrigen.style.left = `${rect.left}px`;

            // Si el texto es el inicial "Miami (MIA)" al hacer clic por primera vez, mostrar sugerencias iniciales
            const valorActual = inputOrigen.value.trim();
            const termino = (valorActual === "Miami (MIA)") ? "" : valorActual.toLowerCase();

            renderizarOpcionesAutocompletado(termino, inputOrigen, dropOrigen);
            dropOrigen.classList.add("activo");
        };

        inputOrigen.addEventListener("focus", () => {
            inputOrigen.select(); // Selecciona "Miami (MIA)" para que al escribir se borre solo
            abrirYFiltrarOrigen();
        });

        inputOrigen.addEventListener("click", (e) => {
            e.stopPropagation();
            abrirYFiltrarOrigen();
        });

        inputOrigen.addEventListener("input", () => {
            abrirYFiltrarOrigen();
        });
    }

    // --- EVENTOS PARA EL SEGUNDO INPUT (DESTINO: CUADRÍCULA DESTINOS LOCALES) ---
    if (inputDestino) {
        inputDestino.removeAttribute("readonly");
        inputDestino.readOnly = false;
        inputDestino.style.cursor = "text";

        const abrirDestino = () => {
            dropOrigen.classList.remove("activo");
            const popFechas = document.getElementById("popover-fechas-flexibles");
            if (popFechas) popFechas.style.display = "none";
            document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('abierto'));

            const rect = inputDestino.getBoundingClientRect();
            dropDestino.style.top = `${rect.bottom + 8}px`;
            dropDestino.style.left = `${rect.left}px`;

            renderizarCuadriculaDestinosLocales(inputDestino, dropDestino);
            dropDestino.classList.add("activo");
        };

        inputDestino.addEventListener("focus", abrirDestino);
        inputDestino.addEventListener("click", (e) => {
            e.stopPropagation();
            abrirDestino();
        });
        inputDestino.addEventListener("input", () => {
            filtrarDestinosMundiales();
        });
    }

    // Cerrar ambos al hacer clic fuera
    document.addEventListener("click", (e) => {
        if (!e.target.closest('.caja-input-exp') &&
            !e.target.closest('#dropdown-autocompletado-global') &&
            !e.target.closest('#popover-destinos-locales')) {
            dropOrigen.classList.remove("activo");
            dropDestino.classList.remove("activo");
        }
    });
}

function renderizarOpcionesAutocompletado(termino, inputEl, contenedor) {
    contenedor.innerHTML = "";

    let listaCompleta = [...AEROPUERTOS_AUTOCOMPLETADO];
    if (typeof BASE_DATOS_MUNDIAL !== "undefined") {
        BASE_DATOS_MUNDIAL.forEach(d => {
            const yaExiste = listaCompleta.some(a => a.soloCiudad.toLowerCase() === d.ciudad.toLowerCase());
            if (!yaExiste) {
                listaCompleta.push({
                    ciudad: `${d.ciudad}, ${d.pais}`,
                    iata: d.ciudad.substring(0, 3).toUpperCase(),
                    aeropuerto: `Internacional de ${d.ciudad}`,
                    soloCiudad: d.ciudad
                });
            }
        });
    }

    const coincidencias = termino
        ? listaCompleta.filter(item =>
            item.ciudad.toLowerCase().startsWith(termino) ||
            item.ciudad.toLowerCase().includes(termino) ||
            item.iata.toLowerCase().includes(termino) ||
            item.aeropuerto.toLowerCase().includes(termino)
        )
        : listaCompleta.slice(0, 6);

    if (termino) {
        coincidencias.sort((a, b) => {
            const aEmpieza = a.ciudad.toLowerCase().startsWith(termino) ? 0 : 1;
            const bEmpieza = b.ciudad.toLowerCase().startsWith(termino) ? 0 : 1;
            return aEmpieza - bEmpieza;
        });
    }

    if (coincidencias.length === 0) {
        contenedor.innerHTML = `<div style="padding:14px; font-size:12.5px; color:#64748b; text-align:center; font-weight:600;">No hay vuelos desde "${inputEl.value}"</div>`;
        return;
    }

    coincidencias.slice(0, 8).forEach(item => {
        const fila = document.createElement("div");
        fila.className = `item-aeropuerto-auto ${item.esSub ? 'sub-aeropuerto' : ''}`;
        fila.innerHTML = `
            ${item.esSub ? '<span style="color:#64748b; font-size:14px; margin-right:-6px;">↳</span>' : ''}
            <div class="icono-avion-caja">
                <i class="fa-solid fa-plane" style="transform: rotate(-35deg);"></i>
            </div>
            <div class="info-aeropuerto-texto">
                <div class="linea-ciudad-iata">
                    <span>${item.ciudad}</span>
                    <span class="codigo-iata-tag">${item.iata}</span>
                </div>
                <span class="subtexto-aeropuerto">${item.aeropuerto}</span>
            </div>
        `;

        fila.addEventListener("click", (e) => {
            e.stopPropagation();
            inputEl.value = `${item.soloCiudad} (${item.iata})`;
            window.iataOrigenActual = item.iata;
            contenedor.classList.remove("activo");
        });

        contenedor.appendChild(fila);
    });
}

function renderizarCuadriculaDestinosLocales(inputEl, contenedor) {
    contenedor.innerHTML = `
        <div class="titulo-destinos-locales">Destinos locales</div>
        <div class="grid-dos-columnas-destinos" id="grid-destinos-locales-items"></div>
    `;

    const grid = document.getElementById("grid-destinos-locales-items");

    DESTINOS_LOCALES_GRID.forEach(item => {
        const card = document.createElement("div");
        card.className = "card-destino-local";

        if (item.esCualquierLugar) {
            card.innerHTML = `
                <div class="caja-globo-cualquier">
                    <i class="fa-solid fa-earth-americas"></i>
                </div>
                <div class="texto-destino-local">
                    <h5>Cualquier lugar</h5>
                    <span>Conoce tus opciones...</span>
                </div>
            `;
            card.addEventListener("click", (e) => {
                e.stopPropagation();
                inputEl.value = "";
                contenedor.classList.remove("activo");
                filtrarDestinosMundiales();
                if (mapaMundial) mapaMundial.flyTo([20.0, 0.0], 2, { duration: 0.8 });
            });
        } else {
            card.innerHTML = `
                <img class="img-destino-local" src="${item.img}" alt="${item.nombre}">
                <div class="texto-destino-local">
                    <h5>${item.nombre}</h5>
                    <span>${item.region}</span>
                </div>
            `;
            card.addEventListener("click", (e) => {
                e.stopPropagation();
                inputEl.value = item.nombre;
                contenedor.classList.remove("activo");
                filtrarDestinosMundiales();
            });
        }

        grid.appendChild(card);
    });
}

/* ==========================================================
   SECCIÓN 4: SELECTOR DE FECHAS FLEXIBLES Y CALENDARIO CUSTOM
   ========================================================== */
function inicializarSelectorFechasFlexibles() {
    const panelSubvista = document.querySelector(".panel-subvista");
    if (!panelSubvista) return;

    let nodoFecha = document.getElementById("trigger-fechas-flexibles");
    if (!nodoFecha) {
        const candidatos = Array.from(panelSubvista.querySelectorAll("div, p, span, button"));
        nodoFecha = candidatos.find(el =>
            el.textContent.toLowerCase().includes("cualquier momento") &&
            !el.closest(".contenedor-fechas-wrapper") &&
            el.offsetHeight > 0 && el.offsetHeight < 65
        );
    }

    if (!nodoFecha) return;

    const contenedorWrapper = document.createElement("div");
    contenedorWrapper.className = "contenedor-fechas-wrapper";

    const meses = ["Cualquiera", "Noviembre", "Diciembre", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre"];

    const txtActual = mesSeleccionadoFiltro === "Cualquiera"
        ? "En cualquier momento, cualquier duración"
        : `En ${mesSeleccionadoFiltro}, ${diasSeleccionadosFiltro == 14 ? 'cualquier duración' : diasSeleccionadosFiltro + ' días'}`;

    contenedorWrapper.innerHTML = `
        <div class="trigger-fechas-flexibles" id="trigger-fechas-flexibles">
            <span style="display:flex; align-items:center; gap:8px;">
                <i class="fa-regular fa-calendar" style="color: var(--cooled-down); font-size:14px;"></i>
                <span id="texto-resumen-fechas">${txtActual}</span>
            </span>
            <i class="fa-solid fa-chevron-down" style="font-size:10px; color:#64748b;"></i>
        </div>
    `;

    let popover = document.getElementById("popover-fechas-flexibles");
    if (popover) popover.remove();

    popover = document.createElement("div");
    popover.className = "popover-fechas-flexibles";
    popover.id = "popover-fechas-flexibles";
    popover.innerHTML = `
        <div class="tabs-fechas-modal">
            <button type="button" class="tab-fecha-btn activa" id="tab-rango-fechas">Rango de fechas</button>
            <button type="button" class="tab-fecha-btn" id="tab-fechas-exactas">Fechas exactas</button>
        </div>

        <div id="vista-rango-fechas">
            <div class="grid-meses-flexibles">
                ${meses.map(m => `<button type="button" class="pill-mes ${m === mesSeleccionadoFiltro ? 'activo' : ''}" data-mes="${m}">${m}</button>`).join('')}
            </div>

            <div class="slider-duracion-box">
                <input type="range" min="1" max="14" value="${diasSeleccionadosFiltro}" class="slider-duracion-input" id="slider-dias-viaje">
                <div class="slider-labels-row">
                    <span>1 día</span>
                    <span id="valor-dias-actual" style="color: var(--cooled-down);">${diasSeleccionadosFiltro == 14 ? '+14 días' : diasSeleccionadosFiltro + ' días'}</span>
                </div>
            </div>
        </div>

        <div id="vista-fechas-exactas" style="display:none;">
            <div class="calendario-custom-box">
                <div class="cal-header-nav">
                    <button type="button" class="cal-btn-nav" id="cal-prev-mes"><i class="fa-solid fa-chevron-left"></i></button>
                    <span class="cal-mes-titulo" id="cal-titulo-mes-anio">Diciembre 2026</span>
                    <button type="button" class="cal-btn-nav" id="cal-next-mes"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
                <div class="cal-grid-dias" id="cal-grid-contenedor"></div>
                <div class="cal-resumen-rango">
                    <span id="cal-texto-seleccion">Selecciona fecha de ida y vuelta</span>
                    <button type="button" id="cal-limpiar-fechas" style="background:none; border:none; color:var(--grapefruit); font-weight:800; font-size:11px; cursor:pointer;">Limpiar</button>
                </div>
            </div>
        </div>

        <div class="popover-fechas-footer">
            <button type="button" class="btn-listo-fechas" id="btn-aplicar-fechas">Listo</button>
        </div>
    `;
    document.body.appendChild(popover);

    nodoFecha.parentNode.replaceChild(contenedorWrapper, nodoFecha);

    const trigger = document.getElementById("trigger-fechas-flexibles");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('abierto'));
        const dropOrigen = document.getElementById("dropdown-autocompletado-global");
        const dropDestino = document.getElementById("popover-destinos-locales");
        if (dropOrigen) dropOrigen.classList.remove("activo");
        if (dropDestino) dropDestino.classList.remove("activo");

        const estaAbierto = popover.style.display === "block";
        if (estaAbierto) {
            popover.style.display = "none";
            contenedorWrapper.classList.remove("abierto");
        } else {
            const rect = trigger.getBoundingClientRect();
            popover.style.top = `${rect.bottom + 8}px`;
            popover.style.left = `${rect.left}px`;
            popover.style.display = "block";
            contenedorWrapper.classList.add("abierto");
            renderizarCalendarioCustom();
        }
    });

    popover.addEventListener("click", (e) => e.stopPropagation());

    document.addEventListener("click", (e) => {
        if (!e.target.closest("#trigger-fechas-flexibles") && !e.target.closest("#popover-fechas-flexibles")) {
            popover.style.display = "none";
            contenedorWrapper.classList.remove("abierto");
        }
    });

    const tabRango = document.getElementById("tab-rango-fechas");
    const tabExactas = document.getElementById("tab-fechas-exactas");
    const vistaRango = document.getElementById("vista-rango-fechas");
    const vistaExactas = document.getElementById("vista-fechas-exactas");

    tabRango.addEventListener("click", () => {
        tabRango.classList.add("activa");
        tabExactas.classList.remove("activa");
        vistaRango.style.display = "block";
        vistaExactas.style.display = "none";
        fechaIdaSeleccionada = null;
        fechaVueltaSeleccionada = null;
    });

    tabExactas.addEventListener("click", () => {
        tabExactas.classList.add("activa");
        tabRango.classList.remove("activa");
        vistaExactas.style.display = "block";
        vistaRango.style.display = "none";
        renderizarCalendarioCustom();
    });

    document.getElementById("cal-prev-mes").addEventListener("click", () => {
        calMesActual--;
        if (calMesActual < 0) { calMesActual = 11; calAnioActual--; }
        renderizarCalendarioCustom();
    });

    document.getElementById("cal-next-mes").addEventListener("click", () => {
        calMesActual++;
        if (calMesActual > 11) { calMesActual = 0; calAnioActual++; }
        renderizarCalendarioCustom();
    });

    document.getElementById("cal-limpiar-fechas").addEventListener("click", () => {
        fechaIdaSeleccionada = null;
        fechaVueltaSeleccionada = null;
        renderizarCalendarioCustom();
    });

    popover.querySelectorAll(".pill-mes").forEach(btn => {
        btn.addEventListener("click", () => {
            popover.querySelectorAll(".pill-mes").forEach(b => b.classList.remove("activo"));
            btn.classList.add("activo");
            mesSeleccionadoFiltro = btn.dataset.mes;
        });
    });

    const slider = document.getElementById("slider-dias-viaje");
    const labelDias = document.getElementById("valor-dias-actual");
    slider.addEventListener("input", () => {
        diasSeleccionadosFiltro = parseInt(slider.value, 10);
        labelDias.textContent = slider.value == 14 ? "+14 días" : `${slider.value} días`;
    });

    document.getElementById("btn-aplicar-fechas").addEventListener("click", () => {
        const resumen = document.getElementById("texto-resumen-fechas");
        if (tabExactas.classList.contains("activa") && fechaIdaSeleccionada) {
            const txtIda = `${fechaIdaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaIdaSeleccionada.mes]}`;
            const txtVuelta = fechaVueltaSeleccionada
                ? `${fechaVueltaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaVueltaSeleccionada.mes]}`
                : "solo ida";
            resumen.textContent = `${txtIda} – ${txtVuelta}`;
        } else {
            const txtMes = mesSeleccionadoFiltro === "Cualquiera" ? "En cualquier momento" : `En ${mesSeleccionadoFiltro}`;
            const txtDur = diasSeleccionadosFiltro == 14 ? "cualquier duración" : `${diasSeleccionadosFiltro} días`;
            resumen.textContent = `${txtMes}, ${txtDur}`;
        }
        popover.style.display = "none";
        contenedorWrapper.classList.remove("abierto");
        filtrarDestinosMundiales();
    });
}

function renderizarCalendarioCustom() {
    const grid = document.getElementById("cal-grid-contenedor");
    const titulo = document.getElementById("cal-titulo-mes-anio");
    const textoSel = document.getElementById("cal-texto-seleccion");
    if (!grid || !titulo) return;

    titulo.textContent = `${NOMBRES_MESES_LARGO[calMesActual]} ${calAnioActual}`;
    grid.innerHTML = "";

    const diasSemana = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"];
    diasSemana.forEach(d => {
        const el = document.createElement("div");
        el.className = "cal-dia-semana";
        el.textContent = d;
        grid.appendChild(el);
    });

    const primerDia = new Date(calAnioActual, calMesActual, 1).getDay();
    const totalDias = new Date(calAnioActual, calMesActual + 1, 0).getDate();

    for (let i = 0; i < primerDia; i++) {
        const vacio = document.createElement("div");
        vacio.className = "cal-celda-dia vacio";
        grid.appendChild(vacio);
    }

    const aValorFecha = (f) => f ? (f.anio * 10000 + f.mes * 100 + f.dia) : 0;
    const valIda = aValorFecha(fechaIdaSeleccionada);
    const valVuelta = aValorFecha(fechaVueltaSeleccionada);

    for (let dia = 1; dia <= totalDias; dia++) {
        const celda = document.createElement("div");
        celda.className = "cal-celda-dia";
        celda.textContent = dia;

        const valActual = calAnioActual * 10000 + calMesActual * 100 + dia;
        if (valActual === valIda) celda.classList.add("seleccionado-inicio");
        else if (valActual === valVuelta) celda.classList.add("seleccionado-fin");
        else if (valIda && valVuelta && valActual > valIda && valActual < valVuelta) {
            celda.classList.add("en-rango");
        }

        celda.addEventListener("click", () => {
            const nuevaFecha = { anio: calAnioActual, mes: calMesActual, dia };
            if (!fechaIdaSeleccionada || (fechaIdaSeleccionada && fechaVueltaSeleccionada)) {
                fechaIdaSeleccionada = nuevaFecha;
                fechaVueltaSeleccionada = null;
            } else if (aValorFecha(nuevaFecha) < valIda) {
                fechaVueltaSeleccionada = fechaIdaSeleccionada;
                fechaIdaSeleccionada = nuevaFecha;
            } else {
                fechaVueltaSeleccionada = nuevaFecha;
            }
            renderizarCalendarioCustom();
        });

        grid.appendChild(celda);
    }

    if (textoSel) {
        if (fechaIdaSeleccionada && fechaVueltaSeleccionada) {
            textoSel.textContent = `Ida: ${fechaIdaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaIdaSeleccionada.mes]} · Vuelta: ${fechaVueltaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaVueltaSeleccionada.mes]}`;
        } else if (fechaIdaSeleccionada) {
            textoSel.textContent = `Ida: ${fechaIdaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaIdaSeleccionada.mes]} (elige regreso)`;
        } else {
            textoSel.textContent = "Selecciona fecha de ida y vuelta";
        }
    }
}

/* ==========================================================
   SECCIÓN 5: FILTROS SUPERIORES (ESCALAS, PRECIO, REGIÓN) Y MONEDA
   ========================================================== */
function mejorarMenusFiltros() {
    const idsSelects = ["select-escala", "select-precio", "select-continente"];
    
    idsSelects.forEach(id => {
        const selectNativo = document.getElementById(id);
        if (!selectNativo) return;

        selectNativo.style.display = "none";

        const previo = selectNativo.nextElementSibling;
        if (previo && previo.classList.contains("custom-select-wrapper")) {
            previo.remove();
        }

        const wrapper = document.createElement("div");
        wrapper.className = "custom-select-wrapper";

        const trigger = document.createElement("div");
        trigger.className = "custom-select-trigger";
        
        let labelTitulo = "FILTRO";
        if (id === "select-escala") labelTitulo = "ESCALAS";
        if (id === "select-precio") labelTitulo = "PRECIO MÁX.";
        if (id === "select-continente") labelTitulo = "REGIÓN";

        const textoInicial = selectNativo.options[selectNativo.selectedIndex]?.text || "Todos";
        
        trigger.innerHTML = `
            <span class="linea-titulo">${labelTitulo} <i class="fa-solid fa-chevron-down" style="font-size:8px;"></i></span>
            <span class="linea-valor">${textoInicial}</span>
        `;

        const optionsPanel = document.createElement("div");
        optionsPanel.className = "custom-options-panel";

        Array.from(selectNativo.options).forEach((opt, idx) => {
            const item = document.createElement("div");
            item.className = "custom-option-item" + (idx === selectNativo.selectedIndex ? " activa" : "");
            item.textContent = opt.text;

            item.addEventListener("click", (e) => {
                e.stopPropagation();
                selectNativo.value = opt.value;
                trigger.querySelector(".linea-valor").textContent = opt.text;
                
                optionsPanel.querySelectorAll(".custom-option-item").forEach(el => el.classList.remove("activa"));
                item.classList.add("activa");
                wrapper.classList.remove("abierto");

                filtrarDestinosMundiales();
            });

            optionsPanel.appendChild(item);
        });

        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            const estaAbierto = wrapper.classList.contains("abierto");
            document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('abierto'));
            if (!estaAbierto) wrapper.classList.add("abierto");
        });

        wrapper.appendChild(trigger);
        wrapper.appendChild(optionsPanel);
        selectNativo.parentNode.insertBefore(wrapper, selectNativo.nextSibling);
    });
}

function inicializarSelectorMoneda() {
    const dropdownMoneda = document.querySelector(".dropdown-moneda");
    const btnMoneda = document.querySelector(".btn-moneda-actual");
    const opciones = document.querySelectorAll(".opcion-moneda");

    if (!dropdownMoneda || !btnMoneda) return;

    const tasasCambio = {
        "USD": { simbolo: "$", tasa: 1, bandera: "https://flagcdn.com/w40/us.png" },
        "EUR": { simbolo: "€", tasa: 0.92, bandera: "https://flagcdn.com/w40/eu.png" },
        "DOP": { simbolo: "RD$", tasa: 60.5, bandera: "https://flagcdn.com/w40/do.png" },
        "MXN": { simbolo: "MX$", tasa: 18.2, bandera: "https://flagcdn.com/w40/mx.png" },
        "ARS": { simbolo: "ARS$", tasa: 980, bandera: "https://flagcdn.com/w40/ar.png" },
        "COP": { simbolo: "COP$", tasa: 4150, bandera: "https://flagcdn.com/w40/co.png" }
    };

    btnMoneda.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMoneda.classList.toggle("activo");
    });

    opciones.forEach(opcion => {
        opcion.addEventListener("click", (e) => {
            e.stopPropagation();
            const texto = opcion.textContent.trim().toUpperCase();
            let codigoElegido = "USD";
            Object.keys(tasasCambio).forEach(cod => {
                if (texto.includes(cod)) codigoElegido = cod;
            });

            const datosMoneda = tasasCambio[codigoElegido];
            monedaActual.simbolo = datosMoneda.simbolo;
            monedaActual.tasa = datosMoneda.tasa;

            btnMoneda.innerHTML = `<img src="${datosMoneda.bandera}" alt="${codigoElegido}"> ${codigoElegido} <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>`;
            dropdownMoneda.classList.remove("activo");

            if (destinoSeleccionadoActual && document.querySelector(".detalle-vuelos-container")) {
                mostrarDetalleDestino(destinoSeleccionadoActual);
            } else {
                filtrarDestinosMundiales();
            }
        });
    });
}

/* ==========================================================
   SECCIÓN 6: FILTRADO Y RENDERIZADO DE TARJETAS Y MAPA
   ========================================================== */
function filtrarDestinosMundiales() {
    if (typeof BASE_DATOS_MUNDIAL === 'undefined') return;

    const inputDestino = document.getElementById("input-busqueda-destino");
    const textoBusqueda = inputDestino ? inputDestino.value.toLowerCase().trim() : "";

    const selectEscala = document.getElementById("select-escala");
    const valEscala = selectEscala ? selectEscala.value.toLowerCase().trim() : "todos";

    const selectPrecio = document.getElementById("select-precio");
    const rawPrecio = selectPrecio ? selectPrecio.value.replace(/[^0-9]/g, "") : "";
    const maxPrecio = rawPrecio ? parseInt(rawPrecio, 10) : 999999;

    const selectContinente = document.getElementById("select-continente");
    const valContinente = selectContinente ? selectContinente.value.toLowerCase().trim() : "todas";

    const filtrados = BASE_DATOS_MUNDIAL.filter(dest => {
        const coincideTexto = !textoBusqueda ||
            dest.ciudad.toLowerCase().includes(textoBusqueda) ||
            dest.pais.toLowerCase().includes(textoBusqueda) ||
            (dest.continente && dest.continente.toLowerCase().includes(textoBusqueda));

        const esTodasEscalas = !valEscala || valEscala === "todos" || valEscala === "todas" || valEscala === "all";
        const coincideEscala = esTodasEscalas || (dest.escalas && dest.escalas.toLowerCase().includes(valEscala));

        const coincidePrecio = dest.precioUSD <= maxPrecio;

        const esTodasRegiones = !valContinente || valContinente === "todas" || valContinente === "todos" || valContinente === "all";
        const coincideContinente = esTodasRegiones || (dest.continente && dest.continente.toLowerCase().includes(valContinente));

        return coincideTexto && coincideEscala && coincidePrecio && coincideContinente;
    });

    renderizarExploradorMundial(filtrados);
}

function obtenerFechaDinamicaTarjeta(dest) {
    if (fechaIdaSeleccionada && fechaVueltaSeleccionada) {
        const f1 = `${fechaIdaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaIdaSeleccionada.mes]}`;
        const f2 = `${fechaVueltaSeleccionada.dia} ${NOMBRES_MESES_CORTO[fechaVueltaSeleccionada.mes]}`;
        return `${f1} – ${f2}`;
    }

    if (mesSeleccionadoFiltro && mesSeleccionadoFiltro !== "Cualquiera") {
        const idxMes = NOMBRES_MESES_LARGO.findIndex(m => m.toLowerCase() === mesSeleccionadoFiltro.toLowerCase());
        const mesCorto = idxMes >= 0 ? NOMBRES_MESES_CORTO[idxMes] : mesSeleccionadoFiltro.slice(0, 3).toLowerCase() + ".";
        const diaInicio = ((dest.id * 3) % 14) + 4;
        const duracion = parseInt(diasSeleccionadosFiltro, 10) || 7;
        return `${diaInicio} ${mesCorto} – ${diaInicio + duracion} ${mesCorto}`;
    }

    return dest.fechas;
}

function renderizarExploradorMundial(lista) {
    const contenedor = document.getElementById("lista-destinos-explore");
    if (!contenedor || !grupoPinesMundial) return;

    contenedor.innerHTML = "";
    grupoPinesMundial.clearLayers();

    const formatoNum = new Intl.NumberFormat("es");

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; padding:26px 14px; background:var(--ice-cold); border-radius:16px; border:1.5px dashed var(--warm-water);">
                <p style="color:var(--texto-dark); font-size:13px; font-weight:700; margin-bottom:8px;">No encontramos vuelos con esa combinación.</p>
                <button type="button" onclick="reiniciarTodosLosFiltros()" style="background:var(--cooled-down); color:#fff; border:none; padding:8px 16px; border-radius:10px; font-size:12px; font-weight:700; cursor:pointer;">Ver todos los destinos</button>
            </div>`;
        return;
    }

    lista.forEach(dest => {
        const factorDuracion = diasSeleccionadosFiltro < 14 ? (0.88 + (diasSeleccionadosFiltro * 0.012)) : 1;
        const precioConv = Math.round(dest.precioUSD * factorDuracion * monedaActual.tasa);
        const precioTxt = `${monedaActual.simbolo}${formatoNum.format(precioConv)}`;
        const fechaMostrar = obtenerFechaDinamicaTarjeta(dest);

        const esFav = favoritosMundial.has(dest.id);
        const esSeleccionado = destinoSeleccionadoActual && destinoSeleccionadoActual.id === dest.id;

        const iconoPin = L.divIcon({
            className: "wrap-pin",
            html: `<div class="pin-precio-etiqueta ${esSeleccionado ? 'seleccionado' : ''}" id="pin-global-${dest.id}">${precioTxt}</div>`,
            iconSize: [70, 32],
            iconAnchor: [35, 32]
        });

        const marcador = L.marker(dest.coords, { icon: iconoPin }).addTo(grupoPinesMundial);
        marcador.on("click", () => seleccionarDestinoGlobal(dest));

        const tarjeta = document.createElement("article");
        tarjeta.className = `tarjeta-vuelo-exp ${esSeleccionado ? 'seleccionada' : ''}`;
        tarjeta.id = `tarjeta-global-${dest.id}`;
        tarjeta.innerHTML = `
            <img class="tarjeta-img" src="${dest.img}" alt="${dest.ciudad}" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'">
            <div class="tarjeta-info">
                <div>
                    <div class="tarjeta-top">
                        <h4 class="tarjeta-ciudad">${dest.ciudad}</h4>
                        <button type="button" class="btn-fav-tarjeta" onclick="toggleFavoritoGlobal(event, ${dest.id})">
                            <i class="${esFav ? "fa-solid" : "fa-regular"} fa-heart" style="${esFav ? "color:var(--grapefruit);" : ""}"></i>
                        </button>
                    </div>
                    <p class="tarjeta-fechas">${fechaMostrar}</p>
                    <p class="tarjeta-escalas">Vuelos ${dest.escalas.toLowerCase()}</p>
                </div>
                <div class="tarjeta-pie">
                    <span style="font-size:11px; font-weight:700; color:#64748b;">${dest.pais}</span>
                    <span class="tarjeta-precio">${precioTxt}</span>
                </div>
            </div>
        `;

        tarjeta.addEventListener("click", () => seleccionarDestinoGlobal(dest));
        contenedor.appendChild(tarjeta);
    });
}

function reiniciarTodosLosFiltros() {
    mesSeleccionadoFiltro = "Cualquiera";
    diasSeleccionadosFiltro = 14;
    fechaIdaSeleccionada = null;
    fechaVueltaSeleccionada = null;
    const inputDestino = document.getElementById("input-busqueda-destino");
    if (inputDestino) inputDestino.value = "";
    ["select-escala", "select-precio", "select-continente"].forEach(id => {
        const s = document.getElementById(id);
        if (s) s.selectedIndex = 0;
    });
    mejorarMenusFiltros();
    const resumen = document.getElementById("texto-resumen-fechas");
    if (resumen) resumen.textContent = "En cualquier momento, cualquier duración";
    filtrarDestinosMundiales();
}

/* ==========================================================
   SECCIÓN 7: VISTA DE DETALLE DEL LUGAR Y BOTÓN VOLVER
   ========================================================== */
function seleccionarDestinoGlobal(dest) {
    destinoSeleccionadoActual = dest;

    document.querySelectorAll('.tarjeta-vuelo-exp').forEach(t => t.classList.remove('seleccionada'));
    const tarjetaActiva = document.getElementById(`tarjeta-global-${dest.id}`);
    if (tarjetaActiva) tarjetaActiva.classList.add('seleccionada');

    document.querySelectorAll('.pin-precio-etiqueta').forEach(p => p.classList.remove('seleccionado'));
    const pinActivo = document.getElementById(`pin-global-${dest.id}`);
    if (pinActivo) pinActivo.classList.add('seleccionado');

    if (mapaMundial) {
        mapaMundial.flyTo(dest.coords, 6, { duration: 0.8 });
    }

    mostrarDetalleDestino(dest);
}

function mostrarDetalleDestino(dest) {
    const panelSubvista = document.querySelector(".panel-subvista");
    if (!panelSubvista) return;

    if (!panelSubvista.querySelector(".detalle-vuelos-container")) {
        htmlVistaBuscadorOriginal = panelSubvista.innerHTML;
    }

    const formatoNum = new Intl.NumberFormat("es");
    const precioConv = Math.round(dest.precioUSD * monedaActual.tasa);
    const precioTxt = `${monedaActual.simbolo}${formatoNum.format(precioConv)}`;
    const fechaMostrar = obtenerFechaDinamicaTarjeta(dest);
    const esFav = favoritosMundial.has(dest.id);
    const iataOrigen = window.iataOrigenActual || "MIA";

    panelSubvista.innerHTML = `
        <div class="detalle-vuelos-container">
            <div class="detalle-hero-card">
                <img src="${dest.img}" alt="${dest.ciudad}" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'">
                <button type="button" class="btn-volver-flotante" onclick="restaurarVistaPrincipal()">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>

            <div>
                <div class="detalle-titulo-row">
                    <h2>${dest.ciudad}</h2>
                    <button type="button" class="btn-fav-detalle" onclick="toggleFavoritoGlobal(event, ${dest.id})">
                        <i class="${esFav ? "fa-solid" : "fa-regular"} fa-heart" style="${esFav ? "color:var(--grapefruit);" : ""}"></i>
                    </button>
                </div>
                <div class="detalle-subtitulo">${dest.pais}</div>
            </div>

            <div class="card-vuelo-precio">
                <div class="vuelo-precio-top">
                    <div>
                        <div class="lbl-barato">${fechaMostrar}</div>
                        <div class="lbl-fechas">Vuelo ${dest.escalas.toLowerCase()}</div>
                    </div>
                    <div>
                        <div class="val-monto">${precioTxt}</div>
                        <div class="val-tipo">ida y vuelta</div>
                    </div>
                </div>
                <button type="button" class="btn-ver-vuelos-principal" onclick="alert('Buscando aerolíneas y vuelos disponibles para ${dest.ciudad}...')">
                    Ver vuelos
                </button>
            </div>

            <div class="card-vuelos-directos">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 15px; font-weight: 800; color: var(--texto-dark);">Vuelos directos</span>
                    <div style="display: flex; gap: 8px; font-size: 14px;">
                        <i class="fa-solid fa-plane" style="color: var(--cooled-down);"></i>
                        <i class="fa-solid fa-plane-departure" style="color: var(--peach-juice);"></i>
                        <i class="fa-solid fa-plane-arrival" style="color: var(--grapefruit);"></i>
                    </div>
                </div>
                <div style="font-size: 12.5px; font-weight: 700; color: #475569;">Ida ${iataOrigen}-${dest.ciudad.substring(0,3).toUpperCase()}</div>
                <div class="dias-semana-row">
                    <div class="dia-badge">L</div>
                    <div class="dia-badge activo">M</div>
                    <div class="dia-badge">M</div>
                    <div class="dia-badge">J</div>
                    <div class="dia-badge">V</div>
                    <div class="dia-badge">S</div>
                    <div class="dia-badge">D</div>
                </div>
                <button type="button" class="btn-horarios-secundario" onclick="alert('Mostrando horarios detallados...')">
                    Ver horarios de vuelos directos
                </button>
            </div>

            <div class="detalle-seccion-texto">
                <h3>${dest.ciudad} te va a encantar</h3>
                <p>Cosmopolita, mágica, apasionada. Así es ${dest.ciudad}, una ciudad que vibra las 24 horas. La esencia de este destino fluye por sus calles y rincones llenos de historia y cultura...</p>
                <span class="link-ver-mas">Ver más</span>
            </div>

            <div class="detalle-seccion-texto">
                <h3>Las 5 mejores razones para visitar ${dest.ciudad}</h3>
                <div class="item-razon-detalle">
                    <strong style="font-size: 13.5px; color: var(--texto-dark);">1. Centro Histórico y Monumentos</strong>
                    <p style="margin-top: 3px;">Explora los sitios emblemáticos, la arquitectura colonial y museos imprescindibles.</p>
                    <span class="link-ver-mas">Ver más</span>
                </div>
                <div class="item-razon-detalle">
                    <strong style="font-size: 13.5px; color: var(--texto-dark);">2. Gastronomía local única</strong>
                    <p style="margin-top: 3px;">Disfruta de los sabores típicos en mercados tradicionales y restaurantes de categoría mundial.</p>
                    <span class="link-ver-mas">Ver más</span>
                </div>
                <div class="item-razon-detalle">
                    <strong style="font-size: 13.5px; color: var(--texto-dark);">3. Vida nocturna vibrante</strong>
                    <p style="margin-top: 3px;">Teatros, bares, música en vivo y ambiente festivo que se extiende hasta el amanecer.</p>
                    <span class="link-ver-mas">Ver más</span>
                </div>
            </div>

            <div class="detalle-seccion-texto">
                <h3>Cómo moverse por ${dest.ciudad}</h3>
                <p><strong>Transporte público:</strong> Una de las alternativas más rápidas y económicas para recorrer la ciudad gracias a su eficiente red de transporte.</p>
                <p><strong>Coche de alquiler:</strong> Ideal si planeas explorar los alrededores con total libertad y autonomía.</p>
            </div>

            <div class="footer-legal-kayak">
                <p>
                    Los precios mostrados son estimados basados en búsquedas recientes para una persona: (i) Ida y vuelta (ii) Clase económica (iii) Incluye impuestos y tarifas (iv) Puede no incluir tasas por equipaje. Los precios, cancelación y políticas pueden variar y están sujetos a cambios y disponibilidad. Datos del mapa © 2026 Google, INEGI <a href="#" onclick="return false;">Condiciones de uso</a>
                </p>
                <div class="footer-legal-links">
                    <span>©2026 KAYAK</span>
                    <a href="#" onclick="return false;">Privacidad</a>
                    <a href="#" onclick="return false;">Ver términos y condiciones</a>
                    <a href="#" onclick="return false;">Quiénes somos</a>
                    <a href="#" onclick="return false;">Ayuda/Preguntas frecuentes</a>
                </div>
            </div>
        </div>
    `;

    panelSubvista.scrollTop = 0;
}

function restaurarVistaPrincipal() {
    const panelSubvista = document.querySelector(".panel-subvista");
    if (!panelSubvista) return;

    destinoSeleccionadoActual = null;
    document.querySelectorAll(".pin-precio-etiqueta").forEach(p => p.classList.remove("seleccionado"));

    if (htmlVistaBuscadorOriginal) {
        panelSubvista.innerHTML = htmlVistaBuscadorOriginal;
        mejorarMenusFiltros();
        inicializarSelectorFechasFlexibles();
        configurarAutocompletadoInputs();
        filtrarDestinosMundiales();
    } else {
        location.reload();
    }

    if (mapaMundial) {
        mapaMundial.flyTo([15.0, -75.0], 3, { duration: 0.7 });
    }
}

function toggleFavoritoGlobal(e, id) {
    e.stopPropagation();
    if (favoritosMundial.has(id)) {
        favoritosMundial.delete(id);
    } else {
        favoritosMundial.add(id);
    }
    if (destinoSeleccionadoActual && destinoSeleccionadoActual.id === id && document.querySelector(".detalle-vuelos-container")) {
        mostrarDetalleDestino(destinoSeleccionadoActual);
    } else {
        filtrarDestinosMundiales();
    }
}

/* ==========================================================
   INICIALIZAR SELECTOR DE MONEDA MEJORADO CON BANDERAS
   ========================================================== */
function inicializarSelectorMoneda() {
    const dropdownMoneda = document.querySelector(".dropdown-moneda");
    const btnMoneda = document.querySelector(".btn-moneda-actual");
    const menuDesplegable = document.querySelector(".menu-moneda-desplegable");

    if (!dropdownMoneda || !btnMoneda || !menuDesplegable) return;

    const tasasCambio = {
        "USD": { simbolo: "$", tasa: 1, bandera: "https://flagcdn.com/w40/us.png", nombre: "USD ($)" },
        "EUR": { simbolo: "€", tasa: 0.92, bandera: "https://flagcdn.com/w40/eu.png", nombre: "EUR (€)" },
        "DOP": { simbolo: "RD$", tasa: 60.5, bandera: "https://flagcdn.com/w40/do.png", nombre: "DOP (RD$)" },
        "MXN": { simbolo: "MX$", tasa: 18.2, bandera: "https://flagcdn.com/w40/mx.png", nombre: "MXN (MX$)" },
        "COP": { simbolo: "COP$", tasa: 4150, bandera: "https://flagcdn.com/w40/co.png", nombre: "COP (COL$)" },
        "ARS": { simbolo: "ARS$", tasa: 980, bandera: "https://flagcdn.com/w40/ar.png", nombre: "ARS ($)" },
        "SEK": { simbolo: "kr", tasa: 10.5, bandera: "https://flagcdn.com/w40/se.png", nombre: "SEK (kr)" },
        "GBP": { simbolo: "£", tasa: 0.79, bandera: "https://flagcdn.com/w40/gb.png", nombre: "GBP (£)" }
    };

    // Rellenar HTML del menú de monedas con banderas
    menuDesplegable.innerHTML = "";
    Object.keys(tasasCambio.default || tasasCambio).forEach(codigo => {
        const item = tasasCambio[codigo];
        const div = document.createElement("div");
        div.className = "opcion-moneda";
        div.innerHTML = `<img src="${item.bandera}" alt="${codigo}"> <span>${item.nombre}</span>`;
        
        div.addEventListener("click", (e) => {
            e.stopPropagation();
            monedaActual.simbolo = item.simbolo;
            monedaActual.tasa = item.tasa;

            btnMoneda.innerHTML = `<img src="${item.bandera}" alt="${codigo}"> ${codigo} <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>`;
            dropdownMoneda.classList.remove("activo");

            if (destinoSeleccionadoActual && document.querySelector(".detalle-vuelos-container")) {
                mostrarDetalleDestino(destinoSeleccionadoActual);
            } else {
                filtrarDestinosMundiales();
            }
        });
        menuDesplegable.appendChild(div);
    });

    btnMoneda.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMoneda.classList.toggle("activo");
    });
}

/* ==========================================================
   FUNCIÓN PARA ABRIR EL MODAL AL HACER CLIC EN "VER MÁS"
   ========================================================== */
function abrirModalVerMas(titulo, contenidoHtml) {
    let overlay = document.getElementById("modal-ver-mas-global");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "modal-ver-mas-global";
        overlay.className = "modal-ver-mas-overlay";
        document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
        <div class="modal-ver-mas-contenido">
            <div class="modal-header-vm">
                <h3>${titulo}</h3>
                <button type="button" class="btn-cerrar-vm" onclick="document.getElementById('modal-ver-mas-global').classList.remove('activo')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="modal-body-vm">
                ${contenidoHtml}
            </div>
        </div>
    `;

    overlay.classList.add("activo");

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("activo");
        }
    });
}

/* ==========================================================
   VISTA DE DETALLE CON EXPANSIÓN DIRECTA "VER MÁS / OCULTAR"
   ========================================================== */
function mostrarDetalleDestino(dest) {
    const panelSubvista = document.querySelector(".panel-subvista");
    if (!panelSubvista) return;

    if (!panelSubvista.querySelector(".detalle-vuelos-container")) {
        htmlVistaBuscadorOriginal = panelSubvista.innerHTML;
    }

    const formatoNum = new Intl.NumberFormat("es");
    const precioConv = Math.round(dest.precioUSD * monedaActual.tasa);
    const precioTxt = `${monedaActual.simbolo}${formatoNum.format(precioConv)}`;
    const fechaMostrar = obtenerFechaDinamicaTarjeta(dest);
    const esFav = favoritosMundial.has(dest.id);
    const iataOrigen = window.iataOrigenActual || "MIA";

    panelSubvista.innerHTML = `
        <div class="detalle-vuelos-container">
            <div class="detalle-hero-card">
                <img src="${dest.img}" alt="${dest.ciudad}" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'">
                <button type="button" class="btn-volver-flotante" onclick="restaurarVistaPrincipal()">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>

            <div>
                <div class="detalle-titulo-row">
                    <h2>${dest.ciudad}</h2>
                    <button type="button" class="btn-fav-detalle" onclick="toggleFavoritoGlobal(event, ${dest.id})">
                        <i class="${esFav ? "fa-solid" : "fa-regular"} fa-heart" style="${esFav ? "color:var(--grapefruit);" : ""}"></i>
                    </button>
                </div>
                <div class="detalle-subtitulo">${dest.pais}</div>
            </div>

            <div class="card-vuelo-precio">
                <div class="vuelo-precio-top">
                    <div>
                        <div class="lbl-barato">${fechaMostrar}</div>
                        <div class="lbl-fechas">Vuelo ${dest.escalas.toLowerCase()}</div>
                    </div>
                    <div>
                        <div class="val-monto">${precioTxt}</div>
                        <div class="val-tipo">ida y vuelta</div>
                    </div>
                </div>
                <button type="button" class="btn-ver-vuelos-principal" onclick="alert('Buscando aerolíneas y vuelos disponibles para ${dest.ciudad}...')">
                    Ver vuelos
                </button>
            </div>

            <div class="card-vuelos-directos">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 15px; font-weight: 800; color: var(--texto-dark);">Vuelos directos</span>
                    <div style="display: flex; gap: 8px; font-size: 14px;">
                        <i class="fa-solid fa-plane" style="color: var(--cooled-down);"></i>
                        <i class="fa-solid fa-plane-departure" style="color: var(--peach-juice);"></i>
                        <i class="fa-solid fa-plane-arrival" style="color: var(--grapefruit);"></i>
                    </div>
                </div>
                <div style="font-size: 12.5px; font-weight: 700; color: #475569;">Ida ${iataOrigen}-${dest.ciudad.substring(0,3).toUpperCase()}</div>
                <div class="dias-semana-row">
                    <div class="dia-badge">L</div>
                    <div class="dia-badge activo">M</div>
                    <div class="dia-badge">M</div>
                    <div class="dia-badge">J</div>
                    <div class="dia-badge">V</div>
                    <div class="dia-badge">S</div>
                    <div class="dia-badge">D</div>
                </div>
                <button type="button" class="btn-horarios-secundario" onclick="alert('Mostrando horarios detallados...')">
                    Ver horarios de vuelos directos
                </button>
            </div>

            <!-- Sección 1: Descripción expandible -->
            <div class="detalle-seccion-texto">
                <h3>${dest.ciudad} te va a encantar</h3>
                <p class="texto-expandible">
                    Cosmopolita, mágica, apasionada. Así es ${dest.ciudad}, una ciudad que vibra las 24 horas. La esencia de este destino fluye por sus calles y rincones llenos de historia y cultura... 
                    <span class="contenido-oculto" style="display:none;"> Su arquitectura combina lo clásico con lo moderno, ofreciendo una experiencia inigualable para todos los sentidos y convirtiéndose en el lugar ideal para explorar a pie o en transporte público.</span>
                </p>
                <span class="link-ver-mas btn-toggle-expandir">Ver más</span>
            </div>

            <!-- Sección 2: Razones para visitar expandibles -->
            <div class="detalle-seccion-texto">
                <h3>Las mejores razones para visitar ${dest.ciudad}</h3>
                
                <div class="item-razon-detalle">
                    <strong style="font-size: 13.5px; color: var(--texto-dark);">1. Centro Histórico y Monumentos</strong>
                    <p class="texto-expandible">
                        Explora los sitios emblemáticos, la arquitectura colonial y museos imprescindibles...
                        <span class="contenido-oculto" style="display:none;"> recorriendo plazas históricas que guardan siglos de tradición y relatos fascinantes de la fundación de la ciudad.</span>
                    </p>
                    <span class="link-ver-mas btn-toggle-expandir">Ver más</span>
                </div>

                <div class="item-razon-detalle">
                    <strong style="font-size: 13.5px; color: var(--texto-dark);">2. Gastronomía local única</strong>
                    <p class="texto-expandible">
                        Disfruta de los sabores típicos en mercados tradicionales y restaurantes de categoría mundial...
                        <span class="contenido-oculto" style="display:none;"> degustando recetas ancestrales y creaciones contemporáneas premiadas internacionalmente.</span>
                    </p>
                    <span class="link-ver-mas btn-toggle-expandir">Ver más</span>
                </div>

                <div class="item-razon-detalle">
                    <strong style="font-size: 13.5px; color: var(--texto-dark);">3. Vida nocturna vibrante</strong>
                    <p class="texto-expandible">
                        Teatros, bares, música en vivo y ambiente festivo que se extiende hasta el amanecer...
                        <span class="contenido-oculto" style="display:none;"> con ritmos contagiosos en cada esquina y una oferta cultural nocturna inigualable.</span>
                    </p>
                    <span class="link-ver-mas btn-toggle-expandir">Ver más</span>
                </div>
            </div>

            <!-- Sección 3: Cómo moverse expandible -->
            <div class="detalle-seccion-texto">
                <h3>Cómo moverse por ${dest.ciudad}</h3>
                <p class="texto-expandible">
                    <strong>Transporte público:</strong> Una de las alternativas más rápidas y económicas para recorrer la ciudad gracias a su eficiente red...
                    <span class="contenido-oculto" style="display:none;"><br><br><strong>Coche de alquiler:</strong> Ideal si planeas explorar los alrededores con total libertad, carreteras en excelente estado y autonomía total.</span>
                </p>
                <span class="link-ver-mas btn-toggle-expandir">Ver más</span>
            </div>

            <div class="footer-legal-kayak">
                <p>
                    Los precios mostrados son estimados basados en búsquedas recientes para una persona: (i) Ida y vuelta (ii) Clase económica (iii) Incluye impuestos y tarifas (iv) Puede no incluir tasas por equipaje. Los precios, cancelación y políticas pueden variar y están sujetos a cambios y disponibilidad. Datos del mapa © 2026 Google, INEGI <a href="#" onclick="return false;">Condiciones de uso</a>
                </p>
                <div class="footer-legal-links">
                    <span>©2026 KAYAK</span>
                    <a href="#" onclick="return false;">Privacidad</a>
                    <a href="#" onclick="return false;">Ver términos y conditions</a>
                    <a href="#" onclick="return false;">Quiénes somos</a>
                    <a href="#" onclick="return false;">Ayuda/Preguntas frecuentes</a>
                </div>
            </div>
        </div>
    `;

    // Activar el comportamiento de expansión en todos los botones "Ver más" de esta vista
    panelSubvista.querySelectorAll(".btn-toggle-expandir").forEach(btn => {
        btn.addEventListener("click", () => {
            const pContainer = btn.previousElementSibling;
            const spanOculto = pContainer.querySelector(".contenido-oculto");

            if (spanOculto.style.display === "none") {
                spanOculto.style.display = "inline";
                btn.textContent = "Ocultar";
            } else {
                spanOculto.style.display = "none";
                btn.textContent = "Ver más";
            }
        });
    });

    panelSubvista.scrollTop = 0;
}

/* ==========================================================
   CONTROL POR CLIC PARA EL BOTÓN HAMBURGUESA
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const btnRail = document.getElementById("btn-toggle-rail");
    const rail = document.getElementById("rail-lateral");

    if (btnRail && rail) {
        // Limpiar eventos anteriores clonando el botón
        const nuevoBtn = btnRail.cloneNode(true);
        btnRail.parentNode.replaceChild(nuevoBtn, btnRail);

        nuevoBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            rail.classList.toggle("abierto");
        });

        // Cerrar al hacer clic fuera del menú lateral
        document.addEventListener("click", (e) => {
            if (!rail.contains(e.target) && !nuevoBtn.contains(e.target)) {
                rail.classList.remove("abierto");
            }
        });
    }
});

/* ==========================================================
   CONTROL DE APERTURA DEL RAIL LATERAL (MENÚ HAMBURGUESA)
   ========================================================== */


document.addEventListener("DOMContentLoaded", () => {
    const railLateral = document.getElementById("rail-lateral");
    const btnHamburguesa = document.querySelector(".btn-hamburguesa");

    if (railLateral) {
        // Abrir al pasar el mouse por encima
        railLateral.addEventListener("mouseenter", () => {
            railLateral.classList.add("abierto");
        });

        // Cerrar al retirar el mouse (a menos que se haya hecho clic para dejarlo fijo, si prefieres)
        railLateral.addEventListener("mouseleave", () => {
            railLateral.classList.remove("abierto");
        });
    }

    if (btnHamburguesa && railLateral) {
        btnHamburguesa.addEventListener("click", (e) => {
            e.stopPropagation();
            railLateral.classList.toggle("abierto");
        });
    }

    (function () {
  // Estilo para que el símbolo de 4 puntas sea BLANCO cuando el botón está activo, presionado o con fondo oscuro/rojo
  const estilo = document.createElement("style");
  estilo.textContent = `
    .rt-btn-ia-conectado svg {
      color: currentColor;
      fill: currentColor;
      transition: color 0.15s ease, fill 0.15s ease;
    }
    .rt-btn-ia-conectado.activo svg,
    .rt-btn-ia-conectado.active svg,
    .rt-btn-ia-conectado[aria-pressed="true"] svg,
    .rt-btn-ia-conectado:active svg {
      color: #ffffff !important;
      fill: #ffffff !important;
    }
  `;
  document.head.appendChild(estilo);

  const ICONO_4_PUNTAS = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;vertical-align:middle;margin-right:6px;" aria-hidden="true">
      <path d="M12 1.5C12.7 8.4 15.6 11.3 22.5 12C15.6 12.7 12.7 15.6 12 22.5C11.3 15.6 8.4 12.7 1.5 12C8.4 11.3 11.3 8.4 12 1.5Z"/>
    </svg>
  `;

  function marcarEstadoActivo(btnSeleccionado) {
    document.querySelectorAll(".rt-btn-ia-conectado").forEach((b) => {
      const esEste = b === btnSeleccionado;
      b.classList.toggle("activo", esEste);
      b.setAttribute("aria-pressed", esEste ? "true" : "false");
      const svg = b.querySelector("svg");
      if (svg) {
        svg.style.color = esEste ? "#ffffff" : "";
        svg.style.fill = esEste ? "#ffffff" : "";
      }
    });
  }

  function ejecutarFuncionalidadIa(modo, btnSeleccionado) {
    marcarEstadoActivo(btnSeleccionado);

    const panel =
      document.getElementById("panelChatIzquierda") ||
      document.querySelector(".panel-chat-ia");
    const input =
      document.getElementById("inputPreguntaIa") ||
      document.querySelector(".panel-chat-ia textarea, .panel-chat-ia input");
    const btnEnviar =
      document.getElementById("btnEnviarMensaje") ||
      document.querySelector(".panel-chat-ia .btn-enviar-ia");

    if (panel) {
      panel.classList.add("activo");
    }

    if (modo === "describir") {
      // Funcionalidad específica al tocar "Describir con IA":
      // Prepara un prompt de descripción o dispara una consulta guiada si el input está vacío
      const promptDescripcion =
        "Describe los mejores destinos para viajar desde mi ubicación y qué tipo de experiencia ofrece cada uno.";

      if (input) {
        input.placeholder =
          "Describe el destino, clima, presupuesto o tipo de viaje que buscas...";
        if (!input.value.trim()) {
          input.value = promptDescripcion;
        }
        setTimeout(() => {
          input.focus();
          if (btnEnviar && input.value === promptDescripcion) {
            btnEnviar.click();
          }
        }, 180);
      }
    } else if (input) {
      input.placeholder = "Pregunta más detalles...";
      setTimeout(() => input.focus(), 150);
    }
  }

  function conectarBotones() {
    document.querySelectorAll("button, a, [role='button']").forEach((btn) => {
      if (btn.closest("#modulo-ia-ruta-tropical")) return;
      if (btn.dataset.rtConectado) return;

      const texto = btn.textContent.replace(/\s+/g, " ").trim().toLowerCase();
      const esUsaLaIa = texto.includes("usa la ia");
      const esDescribir = texto.includes("describir");

      if (!esUsaLaIa && !esDescribir) return;

      btn.dataset.rtConectado = "true";
      btn.classList.add("rt-btn-ia-conectado");

      const icono = btn.querySelector("svg, i");
      if (icono) {
        icono.outerHTML = ICONO_4_PUNTAS;
      } else {
        btn.insertAdjacentHTML("afterbegin", ICONO_4_PUNTAS);
      }

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        ejecutarFuncionalidadIa(esDescribir ? "describir" : "ia", btn);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", conectarBotones);
  } else {
    conectarBotones();
  }
})();
(function () {
  const SPARKLE_SVG = `
    <svg class="rt-sparkle-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5C12.7 8.4 15.6 11.3 22.5 12C15.6 12.7 12.7 15.6 12 22.5C11.3 15.6 8.4 12.7 1.5 12C8.4 11.3 11.3 8.4 12 1.5Z"/>
    </svg>
  `;

  function cerrarPanelIaLateral() {
    const panel = document.getElementById("panelChatIzquierda");
    if (panel) {
      panel.classList.remove("activo", "expandido");
    }
  }

  function abrirIaPantallaCompleta(textoConsulta) {
    const panel = document.getElementById("panelChatIzquierda");
    const input = document.getElementById("inputPreguntaIa");
    const btnEnviar = document.getElementById("btnEnviarMensaje");
    if (!panel) return;

    panel.classList.add("activo", "expandido");

    if (input) {
      if (textoConsulta && textoConsulta.trim()) {
        input.value = textoConsulta.trim();
        setTimeout(() => {
          if (btnEnviar) btnEnviar.click();
        }, 160);
      } else {
        setTimeout(() => input.focus(), 160);
      }
    }
  }

  function configurarExplora() {
    const pillFlotante = document.getElementById("btn-abrir-ia-panel");
    if (pillFlotante) pillFlotante.remove();

    let btnBuscar = null;
    let btnDescribir = null;
    let btnUsaLaIa = null;

    document.querySelectorAll("button, a, [role='button']").forEach((el) => {
      if (el.closest("#modulo-ia-ruta-tropical")) return;
      const txt = el.textContent.replace(/\s+/g, " ").trim().toLowerCase();
      if (txt === "usa la ia" || txt.startsWith("usa la ia")) btnUsaLaIa = el;
      else if (txt === "buscar") btnBuscar = el;
      else if (txt.includes("describir con ia")) btnDescribir = el;
    });

    // Botón superior "Usa la IA" -> abre la IA en pantalla completa
    if (btnUsaLaIa && !btnUsaLaIa.dataset.rtInit) {
      btnUsaLaIa.dataset.rtInit = "true";
      btnUsaLaIa.classList.add("rt-btn-usa-ia-top");
      const ic = btnUsaLaIa.querySelector("svg, i");
      if (ic) ic.outerHTML = SPARKLE_SVG;
      else btnUsaLaIa.insertAdjacentHTML("afterbegin", SPARKLE_SVG);

      btnUsaLaIa.addEventListener("click", (e) => {
        e.preventDefault();
        btnUsaLaIa.classList.add("activo");
        abrirIaPantallaCompleta("");
      });
    }

    // Pestañas "Buscar" / "Describir con IA"
    if (btnBuscar && btnDescribir && !btnDescribir.dataset.rtInit) {
      btnBuscar.dataset.rtInit = "true";
      btnDescribir.dataset.rtInit = "true";

      const switchWrap = btnBuscar.parentElement;
      if (switchWrap) switchWrap.classList.add("rt-switch-explora");

      btnBuscar.classList.add("rt-switch-btn", "rt-tab-activa");
      btnDescribir.classList.add("rt-switch-btn");

      const icDesc = btnDescribir.querySelector("svg, i");
      if (icDesc) icDesc.outerHTML = SPARKLE_SVG;
      else btnDescribir.insertAdjacentHTML("afterbegin", SPARKLE_SVG);

      const controlesOriginales = [];
      let sig = switchWrap.nextElementSibling;
      while (sig) {
        if (
          sig.querySelector("img") ||
          sig.classList.contains("lista-destinos") ||
          sig.id?.toLowerCase().includes("result") ||
          sig.id?.toLowerCase().includes("destin")
        ) {
          break;
        }
        controlesOriginales.push(sig);
        sig = sig.nextElementSibling;
      }

      const panelIA = document.createElement("div");
      panelIA.className = "rt-panel-describir-ia";
      panelIA.innerHTML = `
        <div style="font-size:13.5px;font-weight:700;color:#1e293b;">
          <span style="color:#DD4350;">✦</span> Describe el viaje que buscas
        </div>
        <textarea id="rtTextoViajeIA" placeholder="Ej: Playas en el Caribe, escapada económica o destinos con nieve..."></textarea>
        <div class="rt-chips-describir">
          <button type="button" class="rt-chip-sug" data-val="Encuentra destinos económicos desde MVD">Destinos económicos</button>
          <button type="button" class="rt-chip-sug" data-val="Busca vuelos desde MVD para diciembre">Vuelos en diciembre</button>
          <button type="button" class="rt-chip-sug" data-val="Recomiéndame un destino">Recomiéndame un destino</button>
        </div>
        <button type="button" class="rt-btn-ejecutar-desc" id="rtBtnExplorarIA">
          ${SPARKLE_SVG.replace('class="rt-sparkle-icon"', 'style="width:15px;height:15px;fill:#F9FAFB;color:#F9FAFB;"')}
          Explorar con IA
        </button>
      `;

      switchWrap.insertAdjacentElement("afterend", panelIA);

      panelIA.querySelectorAll(".rt-chip-sug").forEach((chip) => {
        chip.addEventListener("click", () => {
          const ta = document.getElementById("rtTextoViajeIA");
          if (ta) {
            ta.value = chip.getAttribute("data-val");
            ta.focus();
          }
        });
      });

      // Solo al darle a "Explorar con IA" se abre la IA en pantalla completa
      document.getElementById("rtBtnExplorarIA").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const ta = document.getElementById("rtTextoViajeIA");
        const consulta = (ta && ta.value.trim()) || "Recomiéndame un destino";
        abrirIaPantallaCompleta(consulta);
      });

      // Bloquear otros listeners (como explorar.js) en "Describir con IA" para que NO abra el lateral
      btnDescribir.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          cerrarPanelIaLateral();
          btnDescribir.classList.add("rt-tab-activa");
          btnBuscar.classList.remove("rt-tab-activa");
          controlesOriginales.forEach((el) => (el.style.display = "none"));
          panelIA.classList.add("visible");
        },
        true
      );

      btnBuscar.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          cerrarPanelIaLateral();
          btnBuscar.classList.add("rt-tab-activa");
          btnDescribir.classList.remove("rt-tab-activa");
          panelIA.classList.remove("visible");
          controlesOriginales.forEach((el) => (el.style.display = ""));
        },
        true
      );
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", configurarExplora);
  } else {
    configurarExplora();
  }
})();
(function () {
    const CLAVES_CUENTAS = ["rt_cuentas_v1", "cuentasUsuario", "cuentas", "usuarios", "rt_usuarios_perfil_v1"];
    const CLAVES_ACTUAL = ["rt_cuenta_actual_v1", "cuentaActual", "usuarioActivo", "usuarioActual", "rt_usuario_activo_v1"];
    const CLAVES_FOTO = ["rt_foto_perfil", "rt_foto_perfil_actual", "fotoPerfil", "foto_perfil", "avatarUsuario", "avatar_url", "userAvatar", "foto"];

    function esImagenValida(str) {
        if (!str || typeof str !== "string") return false;
        const s = str.trim();
        return s.startsWith("data:image/") || s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/") || s.startsWith(".") || /\.(png|jpe?g|webp|gif)(\?.*)?$/i.test(s);
    }

    function extraerFotoDeObjeto(obj) {
        if (!obj || typeof obj !== "object") return "";
        for (const k of CLAVES_FOTO) {
            if (typeof obj[k] === "string" && esImagenValida(obj[k])) return obj[k].trim();
        }
        for (const val of Object.values(obj)) {
            if (typeof val === "string" && esImagenValida(val)) return val.trim();
        }
        return "";
    }

    function buscarFotoGlobalEnStorage() {
        try {
            for (const k of CLAVES_FOTO) {
                const v = localStorage.getItem(k);
                if (esImagenValida(v)) return v.trim();
            }
            for (let i = 0; i < localStorage.length; i++) {
                const clave = localStorage.key(i);
                const raw = localStorage.getItem(clave);
                if (!raw) continue;
                if (esImagenValida(raw)) return raw.trim();
                try {
                    const parsed = JSON.parse(raw);
                    const fotoObj = extraerFotoDeObjeto(parsed);
                    if (fotoObj) return fotoObj;
                    if (Array.isArray(parsed)) {
                        for (const item of parsed) {
                            const f = extraerFotoDeObjeto(item);
                            if (f) return f;
                        }
                    }
                } catch (_) {}
            }
        } catch (_) {}
        return "";
    }

    function normalizarCuenta(item, fotoRespaldo) {
        if (!item || typeof item !== "object") return null;
        const nombre = (item.nombre || item.name || item.usuario || "").toString().trim();
        const correo = (item.correo || item.email || item.mail || "").toString().trim();
        const foto = extraerFotoDeObjeto(item) || fotoRespaldo || "";
        if (!nombre && !correo) return null;
        return {
            nombre: nombre || correo.split("@")[0] || "Usuario",
            correo: correo || "cuenta@rutatropical.com",
            foto
        };
    }

    function obtenerCuentas() {
        const fotoGlobal = buscarFotoGlobalEnStorage();
        const encontradas = [];
        const vistos = new Set();

        function agregar(c) {
            const norm = normalizarCuenta(c, "");
            if (!norm) return;
            const key = norm.correo.toLowerCase();
            if (!vistos.has(key)) {
                vistos.add(key);
                encontradas.push(norm);
            } else if (!encontradas.find(x => x.correo.toLowerCase() === key).foto && norm.foto) {
                const target = encontradas.find(x => x.correo.toLowerCase() === key);
                target.foto = norm.foto;
            }
        }

        try {
            for (const clave of CLAVES_CUENTAS) {
                const raw = localStorage.getItem(clave);
                if (!raw) continue;
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) parsed.forEach(agregar);
                else if (parsed && typeof parsed === "object") agregar(parsed);
            }

            for (const claveAct of CLAVES_ACTUAL) {
                const rawAct = localStorage.getItem(claveAct);
                if (!rawAct) continue;
                try {
                    const parsedAct = JSON.parse(rawAct);
                    if (parsedAct && typeof parsedAct === "object") agregar(parsedAct);
                } catch (_) {}
            }
        } catch (_) {}

        if (!encontradas.length) {
            return [
                { nombre: "Mari", correo: "rimurutd44@gmail.com", foto: fotoGlobal },
                { nombre: "Jeimy", correo: "rutatropical@cuenta.com", foto: "" }
            ];
        }

        if (fotoGlobal && !encontradas.some(c => c.foto)) {
            encontradas[0].foto = fotoGlobal;
        }
        return encontradas;
    }

    function guardarCuentas(lista) {
        try {
            const payload = JSON.stringify(lista);
            localStorage.setItem("rt_cuentas_v1", payload);
            localStorage.setItem("rt_usuarios_perfil_v1", payload);
        } catch (_) {}
    }

    function obtenerActual() {
        const cuentas = obtenerCuentas();
        try {
            for (const clave of CLAVES_ACTUAL) {
                const raw = localStorage.getItem(clave);
                if (!raw) continue;
                let correoBuscado = raw.trim();
                try {
                    const obj = JSON.parse(raw);
                    if (obj && typeof obj === "object") {
                        correoBuscado = (obj.correo || obj.email || "").trim();
                        if (correoBuscado) {
                            const matchObj = cuentas.find(c => c.correo.toLowerCase() === correoBuscado.toLowerCase());
                            if (matchObj) {
                                if (!matchObj.foto) matchObj.foto = extraerFotoDeObjeto(obj);
                                return matchObj;
                            }
                        }
                    }
                } catch (_) {}

                const match = cuentas.find(c => c.correo.toLowerCase() === correoBuscado.toLowerCase() || c.nombre.toLowerCase() === correoBuscado.toLowerCase());
                if (match) return match;
            }
        } catch (_) {}
        return cuentas[0];
    }

    function seleccionarCuenta(correo) {
        const cuentas = obtenerCuentas();
        const elegida = cuentas.find(c => c.correo.toLowerCase() === correo.toLowerCase()) || cuentas[0];
        try {
            localStorage.setItem("rt_cuenta_actual_v1", elegida.correo);
            localStorage.setItem("rt_usuario_activo_v1", elegida.correo);
            localStorage.setItem("usuarioActual", JSON.stringify(elegida));
            if (elegida.foto) {
                localStorage.setItem("rt_foto_perfil", elegida.foto);
                localStorage.setItem("fotoPerfil", elegida.foto);
            }
        } catch (_) {}
        renderBoton();
        renderCuentas();
    }

    function renderBoton() {
        const actual = obtenerActual();
        const img = document.getElementById("rtPerfilFotoBtn");
        const span = document.getElementById("rtPerfilInicialBtn");
        const inicial = (actual.nombre || "M").trim().charAt(0).toUpperCase() || "M";
        if (span) span.textContent = inicial;

        if (!img) return;
        const foto = actual.foto || buscarFotoGlobalEnStorage();
        if (foto && esImagenValida(foto)) {
            img.onload = () => img.classList.add("activa");
            img.onerror = () => img.classList.remove("activa");
            img.src = foto;
            if (img.complete && img.naturalWidth > 0) img.classList.add("activa");
        } else {
            img.removeAttribute("src");
            img.classList.remove("activa");
        }
    }

    function renderCuentas() {
        const cont = document.getElementById("rtPerfilCuentasLista");
        if (!cont) return;
        const cuentas = obtenerCuentas();
        const actual = obtenerActual();

        cont.innerHTML = cuentas.map(c => {
            const inicial = (c.nombre || "U").trim().charAt(0).toUpperCase();
            const avatarHtml = c.foto && esImagenValida(c.foto)
                ? `<img src="${c.foto.replace(/"/g, "&quot;")}" alt="${c.nombre.replace(/"/g, "&quot;")}" onerror="this.remove()">`
                : inicial;
            const marca = c.correo.toLowerCase() === actual.correo.toLowerCase()
                ? '<i class="fa-solid fa-check" style="margin-left:auto;color:#17a1cf;"></i>'
                : "";
            return `
                <button type="button" class="rt-perfil-cuenta-item" data-correo="${c.correo.replace(/"/g, "&quot;")}">
                    <span class="rt-perfil-cuenta-avatar">${avatarHtml || inicial}</span>
                    <span class="rt-perfil-cuenta-info">
                        <strong>${c.nombre}</strong>
                        <span>${c.correo}</span>
                    </span>
                    ${marca}
                </button>
            `;
        }).join("");
    }

    function cerrarMenu() {
        const menu = document.getElementById("rtPerfilMenu");
        const btn = document.getElementById("rtPerfilBtn");
        if (menu) {
            menu.classList.remove("abierto");
            menu.setAttribute("aria-hidden", "true");
        }
        if (btn) btn.setAttribute("aria-expanded", "false");
    }

    function alternarMenu() {
        const menu = document.getElementById("rtPerfilMenu");
        const btn = document.getElementById("rtPerfilBtn");
        if (!menu || !btn) return;

        const menuMoneda = document.querySelector(".menu-moneda-desplegable");
        if (menuMoneda) menuMoneda.classList.remove("abierto");

        const abrir = !menu.classList.contains("abierto");
        if (abrir) {
            renderBoton();
            renderCuentas();
            menu.classList.add("abierto");
            menu.setAttribute("aria-hidden", "false");
            btn.setAttribute("aria-expanded", "true");
        } else {
            cerrarMenu();
        }
    }

    document.addEventListener("click", function (e) {
        if (e.target.closest("#rtPerfilBtn")) {
            e.preventDefault();
            e.stopPropagation();
            alternarMenu();
            return;
        }

        const itemCuenta = e.target.closest(".rt-perfil-cuenta-item");
        if (itemCuenta) {
            e.preventDefault();
            e.stopPropagation();
            const correo = itemCuenta.getAttribute("data-correo");
            if (correo) seleccionarCuenta(correo);
            return;
        }

        if (e.target.closest("#rtPerfilAnadirBtn")) {
            e.preventDefault();
            cerrarMenu();
            const nombre = prompt("Nombre del nuevo usuario:");
            if (!nombre || !nombre.trim()) return;
            const correo = prompt("Correo electrónico:");
            if (!correo || !correo.trim()) return;
            const foto = prompt("Enlace de foto de perfil (opcional):") || "";

            const lista = obtenerCuentas();
            const idx = lista.findIndex(c => c.correo.toLowerCase() === correo.trim().toLowerCase());
            const nueva = { nombre: nombre.trim(), correo: correo.trim(), foto: foto.trim() };
            if (idx >= 0) lista[idx] = nueva;
            else lista.push(nueva);

            guardarCuentas(lista);
            seleccionarCuenta(correo.trim());
            return;
        }

        if (e.target.closest("#rtPerfilSalirBtn")) {
            e.preventDefault();
            cerrarMenu();
            window.location.href = "../pagina principal/Inicio.html";
            return;
        }

        if (e.target.closest("#rtPerfilMenu .rt-perfil-enlace")) {
            cerrarMenu();
            return;
        }

        const box = document.getElementById("rtPerfilBox");
        if (box && !box.contains(e.target)) {
            cerrarMenu();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") cerrarMenu();
    });

    window.addEventListener("storage", function () {
        renderBoton();
        renderCuentas();
    });

    window.addEventListener("pageshow", function () {
        renderBoton();
        renderCuentas();
    });

    renderBoton();
})

(function () {
    const KEY_CUENTAS = "rt_cuentas_v1";
    const KEY_ACTUAL = "rt_cuenta_actual_v1";
    const KEY_SESION_INICIADA = "rt_sesion_iniciada_v1";

    // Cambia esta ruta al nombre real de tu página de registro / inicio de sesión
    const RUTA_REGISTRO_LOGIN = "registro.html";

    const CLAVES_CUENTAS = ["rt_cuentas_v1", "cuentasUsuario", "cuentas", "usuarios", "rt_usuarios_perfil_v1"];
    const CLAVES_ACTUAL = ["rt_cuenta_actual_v1", "cuentaActual", "usuarioActivo", "usuarioActual", "rt_usuario_activo_v1"];
    const CLAVES_FOTO = ["rt_foto_perfil", "rt_foto_perfil_actual", "fotoPerfil", "foto_perfil", "avatarUsuario", "avatar_url", "userAvatar", "foto"];

    function haySesionIniciada() {
        try {
            return localStorage.getItem(KEY_SESION_INICIADA) === "true";
        } catch (_) {
            return false;
        }
    }

    function exigirSesion() {
        if (!haySesionIniciada()) {
            limpiarInterfazSesion();
            window.location.replace(RUTA_REGISTRO_LOGIN);
            return false;
        }
        return true;
    }

    function limpiarInterfazSesion() {
        const img = document.getElementById("rtPerfilFotoBtn");
        const span = document.getElementById("rtPerfilInicialBtn");
        const cont = document.getElementById("rtPerfilCuentasLista");
        if (img) {
            img.removeAttribute("src");
            img.classList.remove("activa");
        }
        if (span) span.textContent = "";
        if (cont) cont.innerHTML = "";
    }

    function esImagenValida(str) {
        if (!str || typeof str !== "string") return false;
        const s = str.trim();
        return (
            s.startsWith("data:image/") ||
            s.startsWith("http://") ||
            s.startsWith("https://") ||
            s.startsWith("/") ||
            s.startsWith(".") ||
            /\.(png|jpe?g|webp|gif)(\?.*)?$/i.test(s)
        );
    }

    function extraerFotoDeObjeto(obj) {
        if (!obj || typeof obj !== "object") return "";
        for (const k of CLAVES_FOTO) {
            if (typeof obj[k] === "string" && esImagenValida(obj[k])) return obj[k].trim();
        }
        for (const val of Object.values(obj)) {
            if (typeof val === "string" && esImagenValida(val)) return val.trim();
        }
        return "";
    }

    function buscarFotoGlobalEnStorage() {
        if (!haySesionIniciada()) return "";
        try {
            for (const k of CLAVES_FOTO) {
                const v = localStorage.getItem(k);
                if (esImagenValida(v)) return v.trim();
            }
            for (let i = 0; i < localStorage.length; i++) {
                const clave = localStorage.key(i);
                const raw = localStorage.getItem(clave);
                if (!raw) continue;
                if (esImagenValida(raw)) return raw.trim();
                try {
                    const parsed = JSON.parse(raw);
                    const fotoObj = extraerFotoDeObjeto(parsed);
                    if (fotoObj) return fotoObj;
                    if (Array.isArray(parsed)) {
                        for (const item of parsed) {
                            const f = extraerFotoDeObjeto(item);
                            if (f) return f;
                        }
                    }
                } catch (_) {}
            }
        } catch (_) {}
        return "";
    }

    function normalizarCuenta(item) {
        if (!item || typeof item !== "object") return null;
        const nombre = (item.nombre || item.name || item.usuario || "").toString().trim();
        const correo = (item.correo || item.email || item.mail || "").toString().trim();
        const foto = extraerFotoDeObjeto(item) || "";
        if (!nombre && !correo) return null;
        return {
            nombre: nombre || correo.split("@")[0] || "Usuario",
            correo: correo || "cuenta@rutatropical.com",
            foto
        };
    }

    function obtenerCuentas() {
        const encontradaLista = [];
        const vistos = new Set();

        function agregar(c) {
            const norm = normalizarCuenta(c);
            if (!norm) return;
            const key = norm.correo.toLowerCase();
            if (!vistos.has(key)) {
                vistos.add(key);
                encontradaLista.push(norm);
            } else {
                const existente = encontradaLista.find(x => x.correo.toLowerCase() === key);
                if (existente && !existente.foto && norm.foto) existente.foto = norm.foto;
            }
        }

        try {
            for (const clave of CLAVES_CUENTAS) {
                const raw = localStorage.getItem(clave);
                if (!raw) continue;
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) parsed.forEach(agregar);
                else if (parsed && typeof parsed === "object") agregar(parsed);
            }
        } catch (_) {}

        if (!encontradaLista.length) {
            return [
                { nombre: "Mari", correo: "rimurutd44@gmail.com", foto: "" },
                { nombre: "Jeimy", correo: "rutatropical@cuenta.com", foto: "" }
            ];
        }
        return encontradaLista;
    }

    function guardarCuentas(lista) {
        try {
            const payload = JSON.stringify(lista);
            localStorage.setItem(KEY_CUENTAS, payload);
            localStorage.setItem("rt_usuarios_perfil_v1", payload);
        } catch (_) {}
    }

    function obtenerActual() {
        if (!haySesionIniciada()) return null;
        const cuentas = obtenerCuentas();
        try {
            for (const clave of CLAVES_ACTUAL) {
                const raw = localStorage.getItem(clave);
                if (!raw) continue;
                let buscado = raw.trim();
                try {
                    const obj = JSON.parse(raw);
                    if (obj && typeof obj === "object") {
                        buscado = (obj.correo || obj.email || obj.nombre || "").trim();
                    }
                } catch (_) {}

                if (buscado) {
                    const match = cuentas.find(
                        c => c.correo.toLowerCase() === buscado.toLowerCase() || c.nombre.toLowerCase() === buscado.toLowerCase()
                    );
                    if (match) return match;
                }
            }
        } catch (_) {}
        return cuentas[0] || null;
    }

    function seleccionarCuenta(correo) {
        const cuentas = obtenerCuentas();
        const elegida = cuentas.find(c => c.correo.toLowerCase() === correo.toLowerCase()) || cuentas[0];
        if (!elegida) return;

        try {
            localStorage.setItem(KEY_SESION_INICIADA, "true");
            localStorage.setItem(KEY_ACTUAL, elegida.correo);
            localStorage.setItem("rt_usuario_activo_v1", elegida.correo);
            localStorage.setItem("usuarioActual", JSON.stringify(elegida));
            if (elegida.foto) {
                localStorage.setItem("rt_foto_perfil", elegida.foto);
                localStorage.setItem("fotoPerfil", elegida.foto);
            }
        } catch (_) {}

        renderBoton();
        renderCuentas();
    }

    function cerrarSesionYIrARegistro() {
        try {
            localStorage.setItem(KEY_SESION_INICIADA, "false");
            for (const k of CLAVES_ACTUAL) localStorage.removeItem(k);
            for (const f of CLAVES_FOTO) localStorage.removeItem(f);
        } catch (_) {}

        cerrarMenu();
        limpiarInterfazSesion();
        window.location.replace(RUTA_REGISTRO_LOGIN);
    }

    function renderBoton() {
        if (!exigirSesion()) return;
        const actual = obtenerActual();
        const img = document.getElementById("rtPerfilFotoBtn");
        const span = document.getElementById("rtPerfilInicialBtn");

        if (!actual) {
            limpiarInterfazSesion();
            return;
        }

        const inicial = (actual.nombre || "J").trim().charAt(0).toUpperCase() || "J";
        if (span) span.textContent = inicial;

        if (!img) return;
        const foto = actual.foto || buscarFotoGlobalEnStorage();
        if (foto && esImagenValida(foto)) {
            img.onload = () => img.classList.add("activa");
            img.onerror = () => img.classList.remove("activa");
            img.src = foto;
            if (img.complete && img.naturalWidth > 0) img.classList.add("activa");
        } else {
            img.removeAttribute("src");
            img.classList.remove("activa");
        }
    }

    function renderCuentas() {
        if (!haySesionIniciada()) {
            limpiarInterfazSesion();
            return;
        }
        const cont = document.getElementById("rtPerfilCuentasLista");
        if (!cont) return;
        const cuentas = obtenerCuentas();
        const actual = obtenerActual();
        if (!actual) return;

        cont.innerHTML = cuentas.map(c => {
            const inicial = (c.nombre || "U").trim().charAt(0).toUpperCase();
            const avatarHtml = c.foto && esImagenValida(c.foto)
                ? `<img src="${c.foto.replace(/"/g, "&quot;")}" alt="${c.nombre.replace(/"/g, "&quot;")}" onerror="this.remove()">`
                : inicial;
            const marca = c.correo.toLowerCase() === actual.correo.toLowerCase()
                ? '<i class="fa-solid fa-check" style="margin-left:auto;color:#17a1cf;"></i>'
                : "";
            return `
                <button type="button" class="rt-perfil-cuenta-item" data-correo="${c.correo.replace(/"/g, "&quot;")}">
                    <span class="rt-perfil-cuenta-avatar">${avatarHtml || inicial}</span>
                    <span class="rt-perfil-cuenta-info">
                        <strong>${c.nombre}</strong>
                        <span>${c.correo}</span>
                    </span>
                    ${marca}
                </button>
            `;
        }).join("");
    }

    function cerrarMenu() {
        const menu = document.getElementById("rtPerfilMenu");
        const btn = document.getElementById("rtPerfilBtn");
        if (menu) {
            menu.classList.remove("abierto");
            menu.setAttribute("aria-hidden", "true");
        }
        if (btn) btn.setAttribute("aria-expanded", "false");
    }

    function alternarMenu() {
        if (!exigirSesion()) return;
        const menu = document.getElementById("rtPerfilMenu");
        const btn = document.getElementById("rtPerfilBtn");
        if (!menu || !btn) return;

        const menuMoneda = document.querySelector(".menu-moneda-desplegable");
        if (menuMoneda) menuMoneda.classList.remove("abierto");

        const abrir = !menu.classList.contains("abierto");
        if (abrir) {
            renderBoton();
            renderCuentas();
            menu.classList.add("abierto");
            menu.setAttribute("aria-hidden", "false");
            btn.setAttribute("aria-expanded", "true");
        } else {
            cerrarMenu();
        }
    }

    document.addEventListener("click", function (e) {
        if (e.target.closest("#rtPerfilBtn")) {
            e.preventDefault();
            e.stopPropagation();
            alternarMenu();
            return;
        }

        const itemCuenta = e.target.closest(".rt-perfil-cuenta-item[data-correo]");
        if (itemCuenta) {
            e.preventDefault();
            e.stopPropagation();
            const correo = itemCuenta.getAttribute("data-correo");
            if (correo) seleccionarCuenta(correo);
            return;
        }

        if (e.target.closest("#rtPerfilAnadirBtn")) {
            e.preventDefault();
            cerrarMenu();
            const nombre = prompt("Nombre del nuevo usuario:");
            if (!nombre || !nombre.trim()) return;
            const correo = prompt("Correo electrónico:");
            if (!correo || !correo.trim()) return;
            const foto = prompt("Enlace de foto de perfil (opcional):") || "";

            const lista = obtenerCuentas();
            const idx = lista.findIndex(c => c.correo.toLowerCase() === correo.trim().toLowerCase());
            const nueva = { nombre: nombre.trim(), correo: correo.trim(), foto: foto.trim() };
            if (idx >= 0) lista[idx] = nueva;
            else lista.push(nueva);

            guardarCuentas(lista);
            seleccionarCuenta(correo.trim());
            return;
        }

        if (e.target.closest("#rtPerfilSalirBtn")) {
            e.preventDefault();
            cerrarSesionYIrARegistro();
            return;
        }

        if (e.target.closest("#rtPerfilMenu .rt-perfil-enlace")) {
            cerrarMenu();
            return;
        }

        const box = document.getElementById("rtPerfilBox");
        if (box && !box.contains(e.target)) {
            cerrarMenu();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") cerrarMenu();
    });

    window.addEventListener("pageshow", function () {
        if (!exigirSesion()) return;
        renderBoton();
        renderCuentas();
    });

    window.addEventListener("storage", function () {
        if (!exigirSesion()) return;
        renderBoton();
        renderCuentas();
    });

    // Al entrar por primera vez si ya existía cuenta guardada antes de esta lógica
    try {
        if (localStorage.getItem(KEY_SESION_INICIADA) === null && localStorage.getItem(KEY_ACTUAL)) {
            localStorage.setItem(KEY_SESION_INICIADA, "true");
        }
    } catch (_) {}

    renderBoton();
})();
// Dentro del submit / validación exitosa de login.js:
localStorage.setItem("rt_sesion_iniciada_v1", "true");
localStorage.setItem("rt_cuenta_actual_v1", correoDelUsuario);
});