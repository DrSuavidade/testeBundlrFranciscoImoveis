import { Listing } from '../types';

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    refCode: 'LIS-001',
    title: 'Penthouse de Luxo no Chiado',
    description: 'Um apartamento deslumbrante no coração de Lisboa, com vistas panorâmicas sobre o Tejo. Acabamentos de luxo, soalho em tábua corrida e isolamento acústico premium.',
    price: 1250000,
    location: {
      district: 'Lisboa',
      concelho: 'Lisboa',
      freguesia: 'Misericórdia'
    },
    type: 'Apartamento',
    status: 'Venda',
    beds: 3,
    baths: 3,
    areaM2: 180,
    features: ['Vista Rio', 'Terraço', 'Garagem', 'Elevador', 'Ar Condicionado', 'Renovado'],
    energyRating: 'A',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
      'https://cdn.proppy.app/propertyfiles/3285/491683/1398596a-cdd8-450f-a4c2-8f7ec26cc140.jpg'
    ],
    createdAt: '2024-05-10',
    isFeatured: true
  },
  {
    id: '2',
    refCode: 'CAS-042',
    title: 'Moradia Contemporânea em Cascais',
    description: 'Arquitetura moderna inserida em lote de 1000m2. Piscina aquecida, jardim tropical e total privacidade. A 5 minutos da praia do Guincho.',
    price: 2400000,
    location: {
      district: 'Lisboa',
      concelho: 'Cascais',
      freguesia: 'Cascais e Estoril'
    },
    type: 'Moradia',
    status: 'Venda',
    beds: 5,
    baths: 6,
    areaM2: 450,
    features: ['Piscina', 'Jardim', 'Garagem Box', 'Painéis Solares', 'Domótica', 'Ginásio'],
    energyRating: 'A+',
    images: [
      'https://www.rrj-arq.pt/storage/app/media/projectos/Moradia%20Cascais%2018B/RRJ-Arq-MoradiaCascais-18B-02-Bext2.jpg',
      'https://www.tracado.pt/img/upload/moradia_cj/gallery/1---vcr-06---white---c.jpg',
      'https://www.tracado.pt/img/upload/moradia_cs1/gallery/1---ctia-santos-vcr03.jpg',
      'https://images.homify.com/c_fill,f_auto,h_700,q_auto/v1563267103/p/photo/image/3127781/9_-_VCR-03_-_White_-_New.jpg'
    ],
    createdAt: '2024-05-12',
    isFeatured: true
  },
  {
    id: '3',
    refCode: 'PRI-101',
    title: 'Palacete Histórico no Príncipe Real',
    description: 'Oportunidade única de reabilitação. Tectos trabalhados, azulejos originais e pé direito de 4 metros.',
    price: 3100000,
    location: {
      district: 'Lisboa',
      concelho: 'Lisboa',
      freguesia: 'Santo António'
    },
    type: 'Comercial',
    status: 'Reservado',
    beds: 8,
    baths: 4,
    areaM2: 600,
    features: ['Histórico', 'Jardim Interior', 'Centro da Cidade', 'Investimento'],
    energyRating: 'C',
    images: [
      'https://www.nit.pt/wp-content/uploads/2024/07/39f48d43419a7a4896b002b817b707ad.jpg',
      'https://cdn.cmjornal.pt/images/2019-01/img_1500x1000uu2019-01-16-01-16-25-813416.jpg',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000',
      'https://images.trovit.com/v1/eyJrZXkiOiJwYWxhY2lvX2RlXzYyMV9tX2FfdmVuZGFfcHJpbmNpcGVfcmVhbF9tZXJjZXNfbGlzYm9hXzQ1NDAwMDE3NDA3Nzc2MDczMDIuanBnIiwiYnJhbmQiOiJ0cm92aXQiLCJjb3VudHJ5IjoiUFQiLCJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MH0='
    ],
    createdAt: '2024-04-20',
    isFeatured: false
  },
  {
    id: '4',
    refCode: 'SIN-005',
    title: 'Refúgio na Serra de Sintra',
    description: 'Moradia T3 integrada na natureza, com vista para o Palácio da Pena. Silêncio absoluto e ar puro.',
    price: 890000,
    location: {
      district: 'Lisboa',
      concelho: 'Sintra',
      freguesia: 'Colares'
    },
    type: 'Moradia',
    status: 'Venda',
    beds: 3,
    baths: 2,
    areaM2: 180,
    features: ['Vista Serra', 'Lareira', 'Anexo', 'Árvores de Fruto'],
    energyRating: 'B-',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/611446346.jpg?k=acfa2ecf1a0c853e1dd3b0f9a3ae780c95e3a8c7648857503d9a060e662c184c&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/618284446.jpg?k=792067f8cbb65822416af944da628e4dfb02b1f4cb2463a439f0eb44b16baf55&o=',
      'https://st3.idealista.pt/news/arquivos/styles/amp_1200x675_16_9/public/2025-11/images/quinta_da_maquia_hotel_2.png?VersionId=U40QbWySdDDwcHCmMHAuqdEWrNqJwowY&itok=QoDFE04X'
    ],
    createdAt: '2024-05-14',
    isFeatured: true
  },
  {
    id: '5',
    refCode: 'ALG-202',
    title: 'Apartamento T2 em Algés',
    description: 'Excelente apartamento renovado, perto de transportes e comércio. Ótima exposição solar.',
    price: 345000,
    location: {
      district: 'Lisboa',
      concelho: 'Oeiras',
      freguesia: 'Algés'
    },
    type: 'Apartamento',
    status: 'Venda',
    beds: 2,
    baths: 1,
    areaM2: 85,
    features: ['Varanda', 'Cozinha Equipada', 'Perto do Rio'],
    energyRating: 'C',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZ4cnNzZXBieTZ1di1FQ09TWVNURU0iLCJ3IjpbeyJmbiI6IjY5bmxwYTdlY3FtNzEtQVBUIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.jVKt403VJj1AEI7NZBV_APOl-DQuRMcji2lTCO4thiQ/image;s=1280x1024;q=80',
      'https://ana-macao-kw.pt/sites/all/files/imoveis/2020/alges-apartamento-T2-2020-46/Alges-Apartamento-T2-Varanda-2020-46.jpg',
      'https://cdn.proppy.app/propertyfiles/2284/338055/f9d2fa1e-d2b8-4355-9722-c621fd39bb42.jpg?quality=85&width=1200&height=800&mode=crop&format=webp'
    ],
    createdAt: '2024-05-15',
    isFeatured: false
  },
  {
    id: '6',
    refCode: 'ALG-203',
    title: 'Mansão em Algés',
    description: 'Mansão renovada, perto de comércio. Ótima exposição solar e acessibilidade à praia.',
    price: 815000,
    location: {
      district: 'Lisboa',
      concelho: 'Oeiras',
      freguesia: 'Algés'
    },
    type: 'Moradia',
    status: 'Venda',
    beds: 6,
    baths: 3,
    areaM2: 185,
    features: ['Varanda', 'Cozinha Equipada', 'Perto do Rio'],
    energyRating: 'B',
    images: [
      'https://st3.idealista.pt/news/arquivos/styles/fullwidth_xl/public/2022-02/cascais.png?VersionId=dechHdPKz0L0HnRZDdS3t4nPQ.L2Igrv&itok=nbACXQyq',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjj_ydXy66qNs1Cj2h33wVM8-HyXH5dn6ACQ&s',
      'https://img.holidu.com/images/23077cd0-3ddf-49bf-92b2-62fdb7acf0a8/m.jpg',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/521015130.jpg?k=07198e399966887d135bbc6186a48d2d766bbe1aef6875fa2ce79e3a282512b9&o='
    ],
    createdAt: '2024-05-15',
    isFeatured: false
  }
];
