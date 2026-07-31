import sitioImg from "../imports/9fc7fa63-cf0d-4e3b-816b-f540ab44016a.jfif";
import alamedaChurrasImg from "../imports/churrasqueiraNoLago.jfif";
import casaJavaliImg from "../imports/serra.jpg";
import caminhoIMg from "../imports/caminho.jfif";
import lagoCarpasImg from "../imports/LagoDeCarpas.jfif";

import neveImg from "../imports/nneve.jfif";
import c1quarto from "../imports/c1Q2.jfif";
import c1Banheiro from "../imports/C1Banhei.jfif";
import c1Coz from "../imports/c1Coz.jfif";
import c2Quart from "../imports/c2Qart2.jfif";
import c2Quart2 from "../imports/C2Qart.jfif";
import c2Ban from "../imports/c2Ban.jfif";
import c2Ban2 from "../imports/c2Ban2.jfif";

import c2Coz from "../imports/c2Coz2.jfif";
import casaVidroImg from "../imports/casaDvidro.jfif";
import casasImg from "../imports/Casas.jfif";
import c1QuartoA from "../imports/c1Quarto.jfif";
import c1Sala from "../imports/c1Sala.jfif";
import c1Sala2 from "../imports/c1Sala2.jfif";
import c2CozinhaA from "../imports/c2Cozinha.jfif";
import c2Coz3 from "../imports/c2Coz2-1.jfif";
import c2Sala from "../imports/c2Sala.jfif";
import c2Sala2 from "../imports/c2Sala2.jfif";

const u = (id: string, w = 1400, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export const IMAGES = {
  heroLandscape: u("1656615771753-9faa5eb1f780", 2000, 1400),
  sitio: sitioImg,

  // Exterior
  exterior1: lagoCarpasImg,
  exterior2: casaJavaliImg,
  exterior3: neveImg,
  exterior4: caminhoIMg,

  // Chalé 1
  c1quarto: c1quarto,
  c1banheiro: c1Banheiro,
  c1cozinha: c1Coz,
  c1natureza: u("1719875022807-4d1d10c7f1b7", 1000, 1300),
  c1vista: u("1543059605-8e9a6959d120", 1400, 900),

  // Chalé 2
  c2quarto: c2Quart2,
  c2banheiro: c2Ban,
  c2cozinha: c2Coz,
  c2natureza: u("1588679964546-316eb53ba5cf", 1400, 900),
  c2vista: u("1700787221440-c2e544b4174b", 1000, 1300),

  // Fachadas dos chalés
  casas: casasImg,
  casaJavali: casaJavaliImg,

  // Extra
  bedroomWood: u("1631940182015-6604116ead7d", 1200, 900),
  kitchenWood: u("1631555542605-877a63b6e3a6", 1200, 900),
};

// ---- Galeria estruturada ----
export type GalleryImage = { src: string; caption: string };
export type GalleryBlock = {
  label: string;
  images: GalleryImage[];
};
export type GalleryAlbum = {
  id: string;
  name: string;
  carousel?: boolean; // quando true, categorias com várias fotos viram carrossel
  blocks: GalleryBlock[];
};

// Natureza é compartilhada entre os dois chalés.
const naturezaBlock: GalleryBlock = {
  label: "Natureza",
  images: [
    { src: neveImg, caption: "Serra coberta de neve" },
    { src: lagoCarpasImg, caption: "Lago de carpas" },
    { src: caminhoIMg, caption: "Caminho pela mata" },
  ],
};

export const GALLERY: GalleryAlbum[] = [
  {
    id: "exterior",
    name: "Exterior",
    blocks: [
      {
        label: "As duas casas",
        images: [{ src: casasImg, caption: "Os dois chalés" }],
      },
      {
        label: "Casa de vidro",
        images: [{ src: casaVidroImg, caption: "Casa de vidro" }],
      },
      {
        label: "Casa do Javali",
        images: [{ src: casaJavaliImg, caption: "Casa do Javali" }],
      },
      {
        label: "Churrasqueira no lago",
        images: [
          {
            src: alamedaChurrasImg,
            caption: "Churrasqueira à beira do lago",
          },
        ],
      },
      {
        label: "Lago de carpas",
        images: [{ src: lagoCarpasImg, caption: "Lago de carpas" }],
      },
      {
        label: "Caminho",
        images: [
          {
            src: caminhoIMg,
            caption: "Caminho pela propriedade",
          },
        ],
      },
    ],
  },
  {
    id: "chale1",
    name: "Casa de vidro",
    carousel: true,
    blocks: [
      {
        label: "Quartos",
        images: [
          { src: c1QuartoA, caption: "Quarto" },
          { src: c1quarto, caption: "Quarto" },
        ],
      },
      {
        label: "Sala",
        images: [
          { src: c1Sala, caption: "Sala" },
          { src: c1Sala2, caption: "Sala" },
        ],
      },
      {
        label: "Cozinha",
        images: [{ src: c1Coz, caption: "Cozinha" }],
      },
      {
        label: "Banheiro",
        images: [{ src: c1Banheiro, caption: "Banheiro" }],
      },
      naturezaBlock,
    ],
  },
  {
    id: "chale2",
    name: "Casa do Javali",
    carousel: true,
    blocks: [
      {
        label: "Quartos",
        images: [
          { src: c2Quart2, caption: "1º Quarto" },
          { src: c2Quart, caption: "2º Quarto" },
          { src: c2Quart, caption: "3º Quarto" },
        ],
      },
      {
        label: "Cozinha",
        images: [
          { src: c2CozinhaA, caption: "Cozinha" },
          { src: c2Coz, caption: "Cozinha" },
        ],
      },
      {
        label: "Banheiros",
        images: [
          { src: c2Ban, caption: "1º Banheiro" },
          { src: c2Ban2, caption: "2º Banheiro" },
        ],
      },
      {
        label: "Sala",
        images: [
          { src: c2Sala, caption: "1ª foto da sala" },
          { src: c2Sala2, caption: "2ª foto da sala" },
        ],
      },
      naturezaBlock,
    ],
  },
];

export type Attraction = {
  name: string;
  distance: string;
  description: string;
};

export const ATTRACTIONS: Attraction[] = [
  {
    name: "Serra do Corvo Branco",
    distance: "≈ 25 min",
    description:
      "Um dos cânions mais imponentes do Sul, esculpido na rocha da serra.",
  },
  {
    name: "Morro da Igreja",
    distance: "≈ 35 min",
    description:
      "Ponto habitável mais alto do Sul do Brasil e a famosa Pedra Furada.",
  },
  {
    name: "Pedra Furada",
    distance: "≈ 35 min",
    description: "Formação rochosa icônica, cartão-postal de Urubici.",
  },
  {
    name: "Cascata Véu de Noiva",
    distance: "≈ 15 min",
    description:
      "Queda d'água cercada por mata nativa, perfeita para o pôr do sol.",
  },
  {
    name: "Inscrições Rupestres",
    distance: "≈ 20 min",
    description: "Registros milenares gravados nas pedras da região.",
  },
];

export const CONTACT = {
  name: "Pousada do Javali",
  phoneDisplay: "(47) 9254-5804",
  phoneRaw: "+554792545804",
  whatsappRaw: "554792545804",
  whatsappMsg:
    "Olá! Vi o anúncio da Pousada do Javali em Urubici e gostaria de mais informações.",
  address: "Estrada Geral da Jararaca — Urubici, SC, 88650-000",
};

export const waLink = () =>
  `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
    CONTACT.whatsappMsg
  )}`;
export const telLink = () => `tel:${CONTACT.phoneRaw}`;
