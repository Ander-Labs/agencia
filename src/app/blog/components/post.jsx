
// nuevo cambio 


import Image from "next/image";
export default function BlogPost() {


    const Articulo = [
        {
            id: '1',
            imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Oalh2MojUuk/upload/31490938f8ff472876be57eba6d008ff.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            title: 'La clave para el éxito en el mundo digital',
            button: 'Ver',
            buttonUrl: 'https://ryu-mark.hashnode.dev/ryu-mark',
        },
        {
            id: '2',
            imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/QckxruozjRg/upload/fd066d3f50a9f29c0eb3b1fe8013e316.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            title: 'Estrategias de marketing digital efectivas',
            button: 'Ver',
            buttonUrl: 'https://ryu-mark.hashnode.dev/marketing-digital-ryu-mark',
        },
        {
            id: '3',
            imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/NhRk-907Ayc/upload/d29103c4dd772bb309ae8fc3d98f8274.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            title: 'El poder de las redes sociales en tu estrategia de marketing',
            button: 'Ver',
            buttonUrl: 'https://ryu-mark.hashnode.dev/las-redes-sociales-ryu-mark',
        },
        {
            id: '4',
            imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/yeB9jDmHm6M/upload/2d45a3e68b77ffdc49701903040960bc.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            title: 'Cómo optimizar tu estrategia de SEO para aumentar la visibilidad en línea',
            button: 'Ver',
            buttonUrl: 'https://ryu-mark.hashnode.dev/como-optimizar-tu-estrategia-de-seo-para-aumentar-la-visibilidad-en-linea',
        },
        {
            id: '5',
            imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/hpjSkU2UYSU/upload/0760f0ebf03109547c1112a7c74077f6.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            title: 'La importancia del análisis de datos en tu estrategia de marketing',
            button: 'Ver',
            buttonUrl: 'https://ryu-mark.hashnode.dev/analisis-de-datos-ryu-mark',
        },
        {
            id: '6',
            imgUrl: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/cqOZcjOOmRw/upload/c974ff0677544a0b2be1593c49aa462b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            title: 'El Impacto del Marketing de Contenidos en la Generación de Leads Cualificados',
            button: 'Ver',
            buttonUrl: 'https://ryu-mark.hashnode.dev/el-impacto-del-marketing-de-contenidos-en-la-generacion-de-leads-cualificados-aumenta-tus-oportunidades-de-venta',
        },
    ]

    return (
        <div className="p-10 text-white bg-neutral-900">
            <div className="p-10 bg-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-4">
                {Articulo.map((articulo) => (
                    <div key={articulo.id} className="bg-neutral-900/10 text-white w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:shadow-orange-600/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50">
                        <Image src={articulo.imgUrl} alt={articulo.title} width={1000} height={1000} className="w-32 h-32 lg:w-80 lg:h-60 mx-auto mb-4 rounded-3xl" />
                        <h2 className="text-xl text-white font-bold mb-2 text-center">{articulo.title}</h2>
                        <a className="text-white mb-4 text-left hover:text-orange-500 p-3" href={articulo.buttonUrl} target="_black">{articulo.button}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}