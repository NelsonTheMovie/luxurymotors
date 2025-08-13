document.addEventListener('DOMContentLoaded', function() {
    // Datos de los vehículos
    const vehicles = [
        {
            id: 1,
            make: 'audi',
            model: 'Audi A8 L',
            price: '$95,000',
            image: 'img/audi-a8.jpg',
            features: ['Lujo', 'Tecnología', 'Confort'],
            description: 'El Audi A8 L redefine el lujo con su diseño elegante y tecnología innovadora. Ideal para quienes buscan lo mejor en comodidad y prestaciones.'
        },
        {
            id: 2,
            make: 'audi',
            model: 'Audi Q8',
            price: '$78,500',
            image: 'img/audi-q8.jpg',
            features: ['SUV', 'Premium', 'Espacio'],
            description: 'El Audi Q8 combina la elegancia de un coupé con la versatilidad de un SUV, ofreciendo un diseño deportivo y un interior espacioso.'
        },
        {
            id: 3,
            make: 'audi',
            model: 'Audi e-tron GT',
            price: '$102,400',
            image: 'img/audi-etron-gt.jpg',
            features: ['Eléctrico', 'Deportivo', 'Innovación'],
            description: 'El Audi e-tron GT representa el futuro de la movilidad eléctrica con un diseño impresionante y un rendimiento excepcional.'
        },
        {
            id: 4,
            make: 'audi',
            model: 'Audi RS6 Avant',
            price: '$120,000',
            image: 'img/audi-rs6.jpg',
            features: ['Familiar', 'Alto rendimiento', 'Exclusivo'],
            description: 'El Audi RS6 Avant combina la practicidad de un familiar con el corazón de un superdeportivo, ofreciendo un rendimiento sin concesiones.'
        },
        {
            id: 5,
            make: 'audi',
            model: 'Audi TT RS',
            price: '$82,000',
            image: 'img/audi-tt-rs.jpg',
            features: ['Deportivo', 'Compacto', 'Potente'],
            description: 'El Audi TT RS es un deportivo compacto que ofrece una experiencia de conducción emocionante con un diseño icónico.'
        },
        {
            id: 6,
            make: 'audi',
            model: 'Audi SQ7',
            price: '$92,300',
            image: 'img/audi-sq7.jpg',
            features: ['SUV', 'Potente', 'Lujo'],
            description: 'El Audi SQ7 es un SUV de alto rendimiento que combina potencia, lujo y tecnología avanzada en un paquete versátil.'
        },
        {
            id: 7,
            make: 'bmw',
            model: 'BMW 7 Series',
            price: '$89,900',
            image: 'img/bmw-7series.jpg',
            features: ['Lujo', 'Tecnología', 'Confort'],
            description: 'El BMW Serie 7 es el buque insignia de la marca, ofreciendo un refinamiento sin igual y tecnología innovadora.'
        },
        {
            id: 8,
            make: 'bmw',
            model: 'BMW X5 M',
            price: '$125,000',
            image: 'img/bmw-x5m.jpg',
            features: ['SUV', 'Alto rendimiento', 'Lujo'],
            description: 'El BMW X5 M combina la versatilidad de un SUV con el corazón de un deportivo, ofreciendo un rendimiento excepcional.'
        },
        {
            id: 9,
            make: 'bmw',
            model: 'BMW i8',
            price: '$147,500',
            image: 'img/bmw-i8.jpg',
            features: ['Híbrido', 'Deportivo', 'Futurista'],
            description: 'El BMW i8 es un deportivo híbrido enchufable con un diseño revolucionario y una eficiencia excepcional.'
        },
        {
            id: 10,
            make: 'bmw',
            model: 'BMW M4 Competition',
            price: '$86,300',
            image: 'img/bmw-m4.jpg',
            features: ['Deportivo', 'Potente', 'Precisión'],
            description: 'El BMW M4 Competition es un deportivo puro que ofrece una experiencia de conducción emocionante y un diseño agresivo.'
        },
        {
            id: 11,
            make: 'bmw',
            model: 'BMW Z4',
            price: '$52,500',
            image: 'img/bmw-z4.jpg',
            features: ['Roadster', 'Diversión', 'Estilo'],
            description: 'El BMW Z4 es un roadster que combina diversión al volante con un diseño elegante y deportivo.'
        },
        {
            id: 12,
            make: 'bmw',
            model: 'BMW X7',
            price: '$97,300',
            image: 'img/bmw-x7.jpg',
            features: ['SUV', 'Lujo', 'Espacio'],
            description: 'El BMW X7 es el SUV más grande y lujoso de la marca, ofreciendo un espacio excepcional y un confort supremo.'
        },
        {
            id: 13,
            make: 'mercedes',
            model: 'Mercedes S-Class',
            price: '$110,500',
            image: 'img/mercedes-sclass.jpg',
            features: ['Lujo', 'Tecnología', 'Confort'],
            description: 'El Mercedes-Benz Clase S es el epítome del lujo automotriz, con tecnología innovadora y un confort incomparable.'
        },
        {
            id: 14,
            make: 'mercedes',
            model: 'Mercedes GLE Coupe',
            price: '$78,900',
            image: 'img/mercedes-gle-coupe.jpg',
            features: ['SUV', 'Estilo', 'Versatilidad'],
            description: 'El Mercedes-Benz GLE Coupé combina el estilo de un coupé con la versatilidad de un SUV, ofreciendo lo mejor de ambos mundos.'
        },
        {
            id: 15,
            make: 'mercedes',
            model: 'Mercedes-AMG GT',
            price: '$135,000',
            image: 'img/mercedes-amg-gt.jpg',
            features: ['Deportivo', 'Potente', 'Exclusivo'],
            description: 'El Mercedes-AMG GT es un superdeportivo que ofrece un rendimiento excepcional y un diseño imponente.'
        },
        {
            id: 16,
            make: 'mercedes',
            model: 'Mercedes EQC',
            price: '$72,500',
            image: 'img/mercedes-eqc.jpg',
            features: ['Eléctrico', 'SUV', 'Innovación'],
            description: 'El Mercedes-Benz EQC es el primer SUV eléctrico de la marca, combinando movilidad sostenible con el lujo característico de Mercedes.'
        },
        {
            id: 17,
            make: 'mercedes',
            model: 'Mercedes G-Class',
            price: '$142,000',
            image: 'img/mercedes-gclass.jpg',
            features: ['Off-road', 'Icono', 'Lujo'],
            description: 'El Mercedes-Benz G-Class es un icono del off-road que combina capacidades todoterreno con un lujo excepcional.'
        },
        {
            id: 18,
            make: 'mercedes',
            model: 'Mercedes CLS',
            price: '$81,300',
            image: 'img/mercedes-cls.jpg',
            features: ['Coupé', 'Elegancia', 'Tecnología'],
            description: 'El Mercedes-Benz CLS es un cuatro puertas coupé que redefine la elegancia con su diseño fluido y tecnología avanzada.'
        },
        {
            id: 19,
            make: 'porsche',
            model: 'Porsche 911 Turbo S',
            price: '$210,000',
            image: 'img/porsche-911.jpg',
            features: ['Deportivo', 'Icono', 'Alto rendimiento'],
            description: 'El Porsche 911 Turbo S es un icono del automovilismo deportivo, ofreciendo un rendimiento excepcional y un diseño atemporal.'
        },
        {
            id: 20,
            make: 'porsche',
            model: 'Porsche Taycan Turbo',
            price: '$152,000',
            image: 'img/porsche-taycan.jpg',
            features: ['Eléctrico', 'Deportivo', 'Innovación'],
            description: 'El Porsche Taycan es el primer deportivo eléctrico de la marca, combinando el ADN Porsche con movilidad sostenible.'
        },
        {
            id: 21,
            make: 'porsche',
            model: 'Porsche Cayenne Turbo',
            price: '$135,000',
            image: 'img/porsche-cayenne.jpg',
            features: ['SUV', 'Alto rendimiento', 'Lujo'],
            description: 'El Porsche Cayenne Turbo es un SUV de alto rendimiento que ofrece la deportividad característica de Porsche en un paquete versátil.'
        },
        {
            id: 22,
            make: 'porsche',
            model: 'Porsche Panamera Turbo S',
            price: '$185,000',
            image: 'img/porsche-panamera.jpg',
            features: ['Berlina', 'Lujo', 'Alto rendimiento'],
            description: 'El Porsche Panamera Turbo S es una berlina deportiva que combina el lujo de un gran turismo con el rendimiento de un deportivo.'
        },
        {
            id: 23,
            make: 'porsche',
            model: 'Porsche Macan GTS',
            price: '$82,000',
            image: 'img/porsche-macan.jpg',
            features: ['SUV', 'Compacto', 'Deportivo'],
            description: 'El Porsche Macan GTS es un SUV compacto que ofrece una experiencia de conducción deportiva en un paquete práctico.'
        },
        {
            id: 24,
            make: 'porsche',
            model: 'Porsche 718 Boxster GTS',
            price: '$78,500',
            image: 'img/porsche-boxster.jpg',
            features: ['Roadster', 'Diversión', 'Precisión'],
            description: 'El Porsche 718 Boxster GTS es un roadster puro que ofrece diversión al volante y un diseño atractivo.'
        },
        {
            id: 25,
            make: 'tesla',
            model: 'Tesla Model S Plaid',
            price: '$125,000',
            image: 'img/tesla-model-s.jpg',
            features: ['Eléctrico', 'Alto rendimiento', 'Tecnología'],
            description: 'El Tesla Model S Plaid redefine el rendimiento eléctrico con aceleración brutal y tecnología innovadora.'
        },
        {
            id: 26,
            make: 'tesla',
            model: 'Tesla Model X',
            price: '$98,000',
            image: 'img/tesla-model-x.jpg',
            features: ['Eléctrico', 'SUV', 'Puertas de ala de gaviota'],
            description: 'El Tesla Model X es un SUV eléctrico con puertas de ala de gaviota y un interior espacioso y tecnológico.'
        },
        {
            id: 27,
            make: 'tesla',
            model: 'Tesla Model 3 Performance',
            price: '$62,000',
            image: 'img/tesla-model-3.jpg',
            features: ['Eléctrico', 'Sedán', 'Alto rendimiento'],
            description: 'El Tesla Model 3 Performance ofrece un rendimiento excepcional en un paquete más accesible, sin comprometer la tecnología.'
        },
        {
            id: 28,
            make: 'tesla',
            model: 'Tesla Model Y',
            price: '$58,000',
            image: 'img/tesla-model-y.jpg',
            features: ['Eléctrico', 'SUV', 'Versatilidad'],
            description: 'El Tesla Model Y es un SUV eléctrico compacto que combina espacio, versatilidad y la tecnología característica de Tesla.'
        },
        {
            id: 29,
            make: 'tesla',
            model: 'Tesla Cybertruck',
            price: '$70,000',
            image: 'img/tesla-cybertruck.jpg',
            features: ['Eléctrico', 'Pickup', 'Futurista'],
            description: 'El Tesla Cybertruck es una pickup eléctrica con un diseño revolucionario y capacidades excepcionales.'
        },
        {
            id: 30,
            make: 'tesla',
            model: 'Tesla Roadster',
            price: '$200,000',
            image: 'img/tesla-roadster.jpg',
            features: ['Eléctrico', 'Deportivo', 'Récord de aceleración'],
            description: 'El Tesla Roadster es un deportivo eléctrico que promete un rendimiento sin precedentes en un vehículo de producción.'
        },
        {
            id: 31,
            make: 'lexus',
            model: 'Lexus LS 500h',
            price: '$105,000',
            image: 'img/lexus-ls.jpg',
            features: ['Lujo', 'Híbrido', 'Artesanía'],
            description: 'El Lexus LS 500h es la máxima expresión de lujo y artesanía de la marca, con un sistema híbrido sofisticado.'
        },
        {
            id: 32,
            make: 'lexus',
            model: 'Lexus LC 500',
            price: '$115,000',
            image: 'img/lexus-lc.jpg',
            features: ['Coupé', 'Diseño', 'Sonido V8'],
            description: 'El Lexus LC 500 es un coupé de gran turismo con un diseño impresionante y un sonoro motor V8.'
        },
        {
            id: 33,
            make: 'lexus',
            model: 'Lexus RX 450h',
            price: '$68,000',
            image: 'img/lexus-rx.jpg',
            features: ['SUV', 'Híbrido', 'Confort'],
            description: 'El Lexus RX 450h es un SUV híbrido que combina eficiencia, confort y el diseño característico de la marca.'
        },
        {
            id: 34,
            make: 'lexus',
            model: 'Lexus UX 250h',
            price: '$42,000',
            image: 'img/lexus-ux.jpg',
            features: ['SUV', 'Compacto', 'Híbrido'],
            description: 'El Lexus UX 250h es un SUV compacto híbrido ideal para la ciudad, con un diseño juvenil y tecnología avanzada.'
        },
        {
            id: 35,
            make: 'lexus',
            model: 'Lexus IS 500',
            price: '$65,000',
            image: 'img/lexus-is.jpg',
            features: ['Sedán', 'Deportivo', 'V8'],
            description: 'El Lexus IS 500 es un sedán deportivo con un potente motor V8 y un diseño agresivo.'
        },
        {
            id: 36,
            make: 'lexus',
            model: 'Lexus GX 460',
            price: '$78,000',
            image: 'img/lexus-gx.jpg',
            features: ['SUV', 'Off-road', 'Lujo'],
            description: 'El Lexus GX 460 es un SUV todoterreno que no compromete el lujo ni el confort en cualquier tipo de terreno.'
        }
    ];

    // Función para renderizar vehículos
    function renderVehicles(filter = 'all') {
        const vehicleGrid = document.querySelector('.vehicle-grid');
        vehicleGrid.innerHTML = '';

        const filteredVehicles = filter === 'all' ? vehicles : vehicles.filter(vehicle => vehicle.make === filter);

        filteredVehicles.forEach(vehicle => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            vehicleCard.dataset.make = vehicle.make;

            vehicleCard.innerHTML = `
                <div class="vehicle-image">
                    <img src="${vehicle.image}" alt="${vehicle.model}">
                </div>
                <div class="vehicle-info">
                    <span class="vehicle-make">${vehicle.make.toUpperCase()}</span>
                    <h3>${vehicle.model}</h3>
                    <div class="vehicle-price">${vehicle.price}</div>
                    <div class="vehicle-features">
                        ${vehicle.features.map(feature => `<span>${feature}</span>`).join('')}
                    </div>
                    <p class="vehicle-description">${vehicle.description}</p>
                    <button class="btn">Más
        </div>
        <button class="btn">Más información</button>
    </div>
</div>
`;
            vehicleGrid.appendChild(vehicleCard);
            // Agregar comportamiento a los botones dentro de cada tarjeta
vehicleCard.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const contacto = document.getElementById("contacto");
        if (contacto) {
            contacto.scrollIntoView({ behavior: "smooth" });
        }
    });
});

        });
    }

    renderVehicles();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderVehicles(this.dataset.filter);
        });
    });
});


// Funcionalidad para enviar el formulario de contacto usando Formspree


